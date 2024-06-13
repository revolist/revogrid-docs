---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Accelerate.
  text: Fine-tune. Propel.
  tagline: Revogrid is a datagrid system designed to boost the rendering of any data volume.
  license:
    text: Revogrid is a MIT-licensed open source library.
    details: Help us to ensure the further development and maintenance by subscribing to
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

featuresHeader:
  title: Features
  details: The magical, reusable Datagrid.

features:
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

  - title: Pinning/Freezing
    icon: 
      src: pin.svg
    details: Pin any row or column, to the any edge of the screen, ensure that specific elements remain visible while scrolling.
    link: ./guide/column/columnPin
    linkText: Read mode

  - title: Range Selection
    icon: 
      src: range.svg
    details: Allows users to select and manipulate a range of cells efficiently.
    link: ./guide/defs.md#Focus
    linkText: Read mode

  - title: Column Operations
    icon: 
      src: column.svg
    details: Comprehensive column customization, including resizing, reordering, grouping and defining data types.
    link: ./guide/column/
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

  - title: Data Grouping
    icon: 
      src: group.svg
    details: Supports grouping of data on multiple levels for improved organization.
    link: ./guide/jsx.template
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

  - title: Slots
    icon: 
      src: menu.svg
    details: Customizable containers for custom components.
    link: ./guide/slots
    linkText: Read mode

  - title: Tree Data
    icon: 
      src: tree.svg
    details: Support for hierarchical data representation and management.
    link: ./guide/defs#Row-Grouping
    linkText: Read mode

  - title:  Keyboard Support
    icon: 
      src: keyboard.svg
    details: Handle all popular keyboard events, and unleash your creativity by extending functionality according to your unique requirements.
    link: ./guide/defs#Keyboard
    linkText: Read mode

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

