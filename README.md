# RevoGrid Documentation

Welcome to the RevoGrid documentation repository.
This project uses VitePress to generate a static site for the RevoGrid documentation.

## Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Filling the Documentation](#filling-the-documentation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

RevoGrid is a powerful data grid component for web applications. This repository contains the source files for the RevoGrid documentation site.

## Setup

To set up the project locally:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/revolist/revogrid-docs.git
   cd revogrid-docs
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the local development server:**
   ```sh
   npm run dev
   ```

4. **Build the static site:**
   ```sh
   npm run build
   ```

## Project Structure

- `guide`, `demo`: Contains the markdown files for the documentation.
- `.vitepress`: Configuration for VitePress.
- `public`: Static assets.



## Filling the Documentation

### Creating a New Page

1. **Add a new markdown file in the `docs` directory:**
   ```sh
   guide/new-page.md
   ```

2. **Write the content using Markdown:**
   ```markdown
   # New Page Title

   This is the content of the new page.
   ```

3. **Update the sidebar navigation:**
   Edit `.vitepress/configs/sidebar/en.ts`:
   ```js
   export const sidebarEn: DefaultTheme.Sidebar = {
    '/guide/': [
        {
         // other entries
         { text: 'New Page', link: '/new-page' }
       }]
     }
   ```

### Markdown Syntax

Use Markdown to write the content. Here are some common elements:

- **Headings:** `#`, `##`, `###`, etc.
- **Links:** `[link text](URL)`
- **Code blocks:**
  ````
  ```js
  console.log('Hello, RevoGrid!');
  ```
  ````

- **Lists:** `-`, `*`, or `1.`

## Contributing

We welcome contributions! To contribute:

1. **Fork the repository.**
2. **Create a new branch:**
   ```sh
   git checkout -b feature-branch
   ```
3. **Make your changes and commit them:**
   ```sh
   git commit -m 'Add new feature'
   ```
4. **Push to the branch:**
   ```sh
   git push origin feature-branch
   ```
5. **Create a Pull Request.**

Please ensure your contributions follow our guidelines and include appropriate documentation updates.

---

For more information, visit the [RevoGrid GitHub repository](https://github.com/revolist/revogrid) and the [official website](https://revolist.eu).
```

This `README.md` provides clear instructions on how to set up, fill, and contribute to the VitePress-based RevoGrid documentation. Adjust as needed to better fit the specific requirements of the project.
