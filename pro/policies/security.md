---
sidebar: false
footer: true
---

# Security Policy
> Last updated: April 13, 2026

## 1. Overview

Revolist OÜ ("Revolist," "we," "us") is committed to maintaining the security of RevoGrid and RevoGrid Pro throughout their entire lifecycle — from design and development through delivery and ongoing maintenance.

This document describes the security standards, processes, and methods Revolist implements to prevent, identify, evaluate, and remediate vulnerabilities, malicious code, and security incidents. These practices are consistent with **ISO/IEC 27001** information security management principles and, to the extent applicable, **IEC 62443**.

This document is intended for enterprise customers and procurement teams performing supplier security assessments.

---

## 2. Scope

This policy applies to:

- **RevoGrid** — the open-source core data grid library (MIT-licensed, [revolist/revogrid](https://github.com/revolist/revogrid))
- **RevoGrid Pro** — the commercial plugin and example library built on top of RevoGrid

---

## 3. Secure Development Lifecycle

### 3.1 Code Review

All code changes to RevoGrid and RevoGrid Pro must pass through a mandatory pull request (PR) process before being merged into any protected branch (`main`, `next`).

**Requirements before merge:**

- At least **one approved human reviewer**
- **AI-assisted code review** integrated into the PR workflow, providing automated analysis of every change
- All CI checks must pass (unit tests, end-to-end tests)
- **Branch protection rules** are enforced on GitHub, preventing direct pushes to protected branches

No code reaches production without satisfying all of the above gates.

*ISO/IEC 27001:2022 mapping: A.8.25 (Secure development life cycle), A.8.28 (Secure coding), A.8.32 (Change management)*

### 3.2 Dependency Scanning

| Component | Tooling | Frequency |
|---|---|---|
| RevoGrid (core) | SonarCloud + GitHub Dependabot | Continuous / Weekly |
| RevoGrid Pro | GitHub Dependabot | Weekly |

- **GitHub Dependabot** monitors all direct and transitive npm dependencies and automatically opens pull requests for version updates that address known CVEs.
- **SonarCloud** performs continuous static analysis of the core library on every push, detecting code quality issues, security hotspots, and potential vulnerabilities.

All dependency update PRs go through the same review process described in §3.1.

*ISO/IEC 27001:2022 mapping: A.8.8 (Management of technical vulnerabilities), A.8.29 (Security testing in development and acceptance)*

### 3.3 Static Analysis and Automated Testing

- SonarCloud quality gates are enforced on the core library. Builds that introduce security hotspots or fail quality thresholds are blocked from merging.
- Automated **end-to-end tests** (Playwright) and **unit tests** run on every PR via GitHub Actions, preventing regressions in security-sensitive or functional areas.
- Third-party libraries included in RevoGrid Pro are reviewed for license compatibility and known vulnerabilities before inclusion. The full list is maintained at [Third-Party Tools and Libraries](./3rdparty).

*ISO/IEC 27001:2022 mapping: A.8.29 (Security testing in development and acceptance), A.8.26 (Application security requirements)*

---

## 4. Vulnerability Management

### 4.1 Identification

Vulnerabilities are identified through the following channels:

1. **Automated scanning** — Dependabot and SonarCloud flag known CVEs and security hotspots on a continuous basis.
2. **GitHub Security Advisories** — Revolist monitors the GitHub Advisory Database for newly published vulnerabilities affecting our dependencies.
3. **Responsible disclosure** — External researchers, customers, or partners may report vulnerabilities directly via email (see §4.2).
4. **Internal review** — Security-relevant issues identified during code review or development are treated as vulnerabilities and processed through this workflow.

### 4.2 Reporting a Vulnerability

To report a security vulnerability, contact:

**Email:** [info@rv-grid.com](mailto:info@rv-grid.com)

Please include in your report:
- A description of the vulnerability and its potential impact
- Steps to reproduce (proof of concept if available)
- Affected product and version range
- Any known mitigations or workarounds

Revolist acknowledges receipt of vulnerability reports within **2 business days** and will provide a status update as the investigation progresses.

We ask that reporters practice responsible disclosure and refrain from publicly disclosing the vulnerability until a fix has been released.

### 4.3 Classification and Response SLAs

Reported vulnerabilities are classified using the **Common Vulnerability Scoring System (CVSS)**:

| Severity | CVSS Score | Fix Target |
|---|---|---|
| **Critical** | 9.0 – 10.0 | Fix released within **7 days** of confirmation |
| **High** | 7.0 – 8.9 | Fix released within **30 days** of confirmation |
| **Medium** | 4.0 – 6.9 | Addressed in the **next planned release** |
| **Low / Informational** | 0.1 – 3.9 | Addressed in the **next planned release** |

Response timelines apply from the point at which a vulnerability has been confirmed by Revolist's engineering team.

*ISO/IEC 27001:2022 mapping: A.5.24 (Information security incident management planning), A.5.26 (Response to information security incidents)*

### 4.4 Malicious Code Prevention

- All third-party packages are sourced exclusively from the npm registry and are reviewed for provenance and maintenance status before adoption.
- Dependabot alerts for known malicious packages trigger immediate triage outside the normal SLA cycle.
- The complete list of third-party dependencies bundled with RevoGrid Pro is publicly available at [Third-Party Tools and Libraries](./3rdparty).

*ISO/IEC 27001:2022 mapping: A.5.7 (Threat intelligence), A.8.8 (Management of technical vulnerabilities)*

---

## 5. Patching Process

When a vulnerability is confirmed and a fix is ready, the following process applies:

1. **Fix development** — A patch is developed in an isolated branch. For embargoed or critical vulnerabilities, development may occur in a private fork to prevent premature disclosure.
2. **Review** — The patch undergoes the standard PR review process (human reviewer + AI review + CI checks), with no exceptions.
3. **Release** — A new version is published to npm containing the fix.
4. **Disclosure** — The fix is documented in the **Changelog / Release Notes** of the affected package, including the vulnerability description, affected version range, and the version in which it was resolved.

For **Critical** and **High** severity issues, a **GitHub Security Advisory** may additionally be published on the repository after the fix is released.

*ISO/IEC 27001:2022 mapping: A.8.8 (Management of technical vulnerabilities), A.8.32 (Change management)*

---

## 6. Customer Notification

Security fixes are communicated to customers through:

- **Changelog and Release Notes** published with every release on GitHub and npm, clearly describing any security-relevant changes and affected versions
- Customers are advised to subscribe to **GitHub release notifications** for the [revolist/revogrid](https://github.com/revolist/revogrid) repository to receive alerts for new releases as they are published

Customers who require direct security notifications or have contractual security notification requirements may contact [info@rv-grid.com](mailto:info@rv-grid.com) to discuss applicable arrangements.

---

## 7. ISO/IEC 27001 Controls Mapping

The table below summarizes how Revolist's security practices map to the relevant controls of **ISO/IEC 27001:2022**:

| Control | Description | Revolist Implementation |
|---|---|---|
| A.5.7 | Threat intelligence | GitHub Advisory Database monitoring; Dependabot CVE alerts |
| A.5.24 | IS incident management planning | Defined vulnerability reporting channel; internal triage process |
| A.5.26 | Response to information security incidents | Classified patch SLAs (§4.3); responsible disclosure coordination |
| A.8.8 | Management of technical vulnerabilities | Weekly dependency scanning; defined classification and remediation SLAs |
| A.8.25 | Secure development life cycle | Mandatory PR reviews; CI/CD gates; protected branches |
| A.8.26 | Application security requirements | Security considerations evaluated during design and development phases |
| A.8.28 | Secure coding | Human + AI review on all PRs; SonarCloud static analysis on the core |
| A.8.29 | Security testing in development and acceptance | Automated unit and end-to-end tests executed on every pull request |
| A.8.32 | Change management | All changes processed through the PR workflow with enforced review gates |

### Applicability of IEC 62443

IEC 62443 addresses security for industrial automation and control systems (IACS). RevoGrid and RevoGrid Pro are frontend UI libraries and are not directly deployed in industrial control environments. To the extent that customers integrate RevoGrid into systems subject to IEC 62443, Revolist's secure development practices — including code review, dependency scanning, and structured vulnerability management — support the supplier-side requirements of **IEC 62443-2-4** (Security program requirements for IACS service providers) as described in this document.

---

## 8. Contact

For security inquiries, vulnerability reports, or supplier security assessments:

**Revolist OÜ**
Ruunaoja tn 3, Tallinn, Harju maakond 11415, Estonia

Security contact: [info@rv-grid.com](mailto:info@rv-grid.com)
General contact: [contact@revolist.eu](mailto:contact@revolist.eu)
Website: [https://rv-grid.com](https://rv-grid.com)
