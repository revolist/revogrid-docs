import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

const policyFiles = [
  'pro/policies/terms.md',
  'pro/policies/privacy.md',
  'pro/policies/license.md',
  'pro/policies/3rdparty.md',
];

function runGit(command) {
  try {
    return execSync(`git ${command}`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  } catch {
    return '';
  }
}

function parseChangedFiles(text) {
  return text
    .split(/[\n,\s]+/g)
    .map(file => file.trim())
    .filter(Boolean);
}

function listChangedPolicyFiles() {
  const changed = new Set();
  const changedFilesEnv = process.env.POLICY_CHANGED_FILES || process.env.CHANGED_FILES || '';
  const commitRef = process.env.CF_PAGES_COMMIT_SHA || 'HEAD';

  // Preferred source in CI: an explicit env var with changed files.
  for (const file of parseChangedFiles(changedFilesEnv)) {
    if (policyFiles.includes(file)) {
      changed.add(file);
    }
  }

  // Cloudflare/Git fallback: list files from the commit being built.
  if (!changed.size) {
    const output = runGit(`show --name-only --pretty="" ${commitRef} --`);
    for (const file of parseChangedFiles(output)) {
      if (policyFiles.includes(file)) {
        changed.add(file);
      }
    }
  }

  return [...changed];
}

function listPolicyFilesWithoutDate() {
  return policyFiles.filter(filePath => {
    const content = readFileSync(filePath, 'utf8');
    return !/^>\s*Last updated:\s*/im.test(content);
  });
}

function formatDate() {
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date());
}

function updateLastUpdatedLine(filePath, formattedDate) {
  const content = readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const updatedLine = `> Last updated: ${formattedDate}`;
  const existingDateLineIndex = lines.findIndex(line => /^>\s*Last updated:\s*/i.test(line));

  if (existingDateLineIndex >= 0) {
    lines[existingDateLineIndex] = updatedLine;
  } else {
    const titleIndex = lines.findIndex(line => line.startsWith('# '));
    if (titleIndex === -1) {
      return false;
    }

    if (lines[titleIndex + 1] === '') {
      lines.splice(titleIndex + 1, 1, updatedLine, '');
    } else {
      lines.splice(titleIndex + 1, 0, '', updatedLine, '');
    }
  }

  const nextContent = `${lines.join('\n').replace(/\s*$/, '')}\n`;
  if (nextContent === content) {
    return false;
  }

  writeFileSync(filePath, nextContent, 'utf8');
  return true;
}

const changedFiles = listChangedPolicyFiles();
const targetFiles = changedFiles.length ? changedFiles : listPolicyFilesWithoutDate();

if (!targetFiles.length) {
  console.log('No policy updates detected.');
  process.exit(0);
}

const date = formatDate();
for (const filePath of targetFiles) {
  const changed = updateLastUpdatedLine(filePath, date);
  console.log(changed ? `Updated date in ${filePath}` : `Date already up to date in ${filePath}`);
}
