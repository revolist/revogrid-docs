---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: High performance data grid for any framework - Vue, React, Angular, Svelte and JavaScript

head:
  - - meta
    - name: description
      content: Fast and feature-rich excel like data grid with native support for Vue, React, Angular, and Svelte
  - - meta
    - name: keywords
      content: AI Grid, Fast Grid, Virtual Grid, Reactive Grid, Infinity Grid, Spreadsheet Features, Virtual Data Grid, Excel-like Grid, High-performance Grid, Responsive Grid, Data Grid Library, Enterprise Data Grid, Lightweight Grid, Customizable Grid, Vue Grid, Vue3 Data Grid, Vue3 Virtual Grid, Vue Grid Component, Vue Datagrid Features, React Grid, React Data Grid, React Editable Grid, React Virtual Scrolling Grid, Svelte Grid, Svelte Data Grid, Svelte Virtual Grid, Svelte UI Grid, Angular Grid, Angular Data Grid, Angular Tree Grid, Angular Grid Component, Angular Virtual Scrolling Grid, Virtual Scrolling, Grid Performance, Data Sorting, Data Filtering, Grouping, Editable Grid Component, Treeview Grid, Spreadsheet Editing, Conditional Formatting, Merge Cells, Master-detail Rows, Row Management, Column Management, Pagination, Large Dataset Handling, Interactive Data Grid, Frontend Grid, Grid Plugins, StencilJS Grid, JavaScript Grid, Scalable Grid, RevoGrid, RevoGrid Demo, RevoGrid Plugins, RevoGrid Features, Data Visualization, Data Editing, Enterprise-grade Data Grid, Startup Data Grid

hero:
  name: Accelerate.
  text: Fine-tune. Propel.
  tagline: Revogrid is a datagrid system designed to boost the rendering of any data volume. 60fps, 3x less memory. Now with <a href="/pro/ai" class="VPBadge danger">AI support</a>
  license:
    text: Revogrid is a MIT-licensed open source library
    details: Unlock advanced features by subscribing to
    action: Revogrid Pro
  banner:
    text: Revogrid 4 is here
    action: Read what’s new →
  actions:
    - theme: brand
      text: Get started
      link: /guide/
    - theme: sponsor
      text: Demo
      link: /demo/

recommended:
  title: Engineered for
  details: Every Challenge.
  features:
    - title: Enterprise Solutions
      icon:
        src: org.svg
      details: For large organizations managing massive datasets. Performance and scalability to handle even the most complex data tables. 

    - title: Startups and Innovators
      icon:
        src: startup.svg
      details: Rapid prototyping with intuitive and extendable codebase. Agility to build robust data-driven applications in no time.

    - title: Individuals
      icon: 
        src: individual.svg
      details: Quickly build elegant and efficient data grids. Lightweight yet powerful architecture lets you easily scale as your needs grow.

featuresHeader:
  title: Features
  details: The magical, reusable Datagrid.

features:
  - title: Go Native
    icon:
      src: emoji-happy.svg
    details: Integrate Vue, React, Angular, and Svelte components. Full capabilities of your chosen framework.
    link: ./guide/overview#Framework-Native-Support
    linkText: Read more

  - title: Accessibility and WCAG
    icon:
      src: wcag.svg
    details: Designed to ensure accessibility and WCAG compliance.
    link: ./guide/wcag
    linkText: Read mode
  
  - title: Row Operations
    icon: 
      src: row.svg
    details: Advanced row customization, including dragging and dropping rows, grouping them, and applying styles.
    link: ./guide/row/
    linkText: Read more

  - title: Column Operations
    icon:
      src: column.svg
    details: Comprehensive column customization, including resizing, reordering, grouping and defining data types.
    link: ./guide/column/
    linkText: Read mode

  - title: Reactivity upon the deep
    icon: 
      src: reactivity.svg
    details: The grid core is built upon an advanced reactive approach. By incorporating smart recombination, it handles substantial data loads and intricate operations.
    link: ./guide/overview.md#Magic-behind-the-scene
    linkText: Read mode

  - title: Enhanced Customization Toolkit
    icon: 
      src: template.svg
    details: Template every element - cells, rows, columns, headers. Customize nearly every action keeping performance with internal VNode support.
    link: ./guide/cell/renderer
    linkText: Read mode

  - title: Pinning/Freezing
    icon: 
      src: pin.svg
    details: Pin any row or column, to the any edge of the screen, ensure that specific elements remain visible while scrolling.
    link: ./guide/column/columnPin
    linkText: Read mode

  - title: Cell and Range Selection
    icon: 
      src: range.svg
    details: Allows users to select and manipulate a range of cells efficiently.
    link: ./guide/defs.md#Focus
    linkText: Read mode

  - title: Filtering
    icon: 
      src: filter.svg
    details: Transparent system filters and the ability to define custom filter operations for refining data.
    link: ./guide/filters
    linkText: Read mode

  - title: Sorting
    icon: 
      src: sort.svg
    details: Powerful sorting functionality for organizing data based on various criteria.
    link: ./guide/sorting
    linkText: Read mode

  - title: Cell Editing
    icon: 
      src: edit.svg
    details: Enables users to edit cell contents directly within the grid. Customize editors using provided templates to suit specific needs.
    link: ./guide/cell/editor
    linkText: Read mode

  - title: Clipboard Support
    icon: 
      src: clipboard.svg
    details: Facilitates copy-paste operations for seamless data transfer.
    link: ./guide/defs#Clipboard
    linkText: Read mode

  - title: Export to Excel/CSV
    icon: 
      src: export.svg
    details: Provides options to export grid data to Excel or CSV formats.
    link: ./guide/export.plugin
    linkText: Read mode

  - title: Grouping Data
    icon: 
      src: tree.svg
    details: Support for hierarchical data representation and management.
    link: ./guide/defs#Row-Grouping
    linkText: Read mode

  - title: Keyboard Support
    icon: 
      src: keyboard.svg
    details: Handle all popular keyboard events, and unleash your creativity by extending functionality according to your unique requirements.
    link: ./guide/defs#Keyboard
    linkText: Read mode

  - title: Plugin Support
    icon: 
      src: menu.svg
    details: Extend grid functionality with micro applications, allowing for limitless customization and enhancements.
    link: ./guide/plugin
    linkText: Read mode

  - title: TypeScript support
    icon: 
      src: ts.svg
    details: Revogrid uses TypeScript, providing your components with type safety as your system scales.
    link: ./guide/ts/
    linkText: Read mode
    
  - title: JSX support
    icon: 
      src: jsx.svg
    details: Leverage a widely recognized templating syntax to describe your custom content, ensuring a fast and reactive DOM while utilizing the full range of JavaScript's features.
    link: ./guide/jsx.template
    linkText: Read mode

  - title: Transparent Codebase
    icon:
      src: code.svg
    details: 'The code you truly own: understand, build, and extend with minimal effort.'
    link: ./guide/overview#Magic-behind-the-scene
    linkText: Read more

integrations:
- title: Vue
  icon: vuejs
  details: Use to speed up your Vue code base.
  path: /guide/vue3/
- title: Angular
  icon: angular
  details: Use to speed up your Angular code base.
  path: /guide/angular/
- title: React
  icon: react
  details: Use to speed up your React code base.
  path: /guide/react/
- title: Svelte
  icon: svelte
  details: Use to speed up your Svelte code base.
  path: /guide/svelte/
---

