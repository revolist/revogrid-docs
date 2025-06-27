---
title: RTL (Right-to-Left) Support
---

# RTL (Right-to-Left) Support

RevoGrid provides comprehensive support for Right-to-Left (RTL) languages and layouts, making it suitable for applications targeting Arabic, Hebrew, Persian, and other RTL language users. The RTL support is implemented through a dedicated plugin that automatically handles column ordering, text alignment, and layout adjustments.

## Overview

RTL support in RevoGrid includes:

- **Automatic column reordering**: Columns are automatically reversed when RTL mode is enabled
- **Text alignment**: Cell content is properly aligned for RTL languages
- **Layout adjustments**: Scrollbars, headers, and interactive elements are positioned correctly
- **Plugin-based architecture**: RTL functionality is implemented as a plugin for easy integration


## Basic Usage

### Enabling RTL Mode

To enable RTL support, simply set the `rtl` property to `true` on your RevoGrid component:

```html
<revo-grid rtl></revo-grid>
```

### JavaScript Example

```typescript
// Basic RTL setup
const grid = document.querySelector('revo-grid');
grid.rtl = true;

// Configure columns and data
grid.columns = [
  { prop: 'name', name: 'الاسم' },
  { prop: 'age', name: 'العمر' },
  { prop: 'city', name: 'المدينة' }
];

grid.source = [
  { name: 'أحمد', age: 25, city: 'القاهرة' },
  { name: 'فاطمة', age: 30, city: 'الإسكندرية' },
  { name: 'محمد', age: 28, city: 'الجيزة' }
];
```

### Framework Examples

#### Vue 3

```vue
<template>
  <revo-grid 
    :rtl="isRTLEnabled"
    :columns="columns"
    :source="data"
  />
</template>

<script setup>
import { ref } from 'vue';

const isRTLEnabled = ref(true);

</script>
```

#### React

```tsx
import { useState } from 'react';

function RTLGrid() {
  const [isRTLEnabled, setIsRTLEnabled] = useState(true);

  return (
    <revo-grid 
      rtl={isRTLEnabled}
    />
  );
}
```

## Advanced Configuration

### Dynamic RTL Toggle

You can dynamically toggle RTL mode based on user preferences or application state:

```typescript
// Toggle RTL mode
function toggleRTL() {
  const grid = document.querySelector('revo-grid');
  grid.rtl = !grid.rtl;
}

// Listen for RTL state changes
grid.addEventListener('rtlstatechanged', (event) => {
  console.log('RTL state changed:', event.detail.rtl);
});
```

## Styling Considerations

### Custom RTL Styles

RevoGrid automatically applies RTL-specific styles when the `rtl` attribute is present. You can also add custom RTL styles:

```css
/* Custom RTL styles */
revo-grid[rtl] {
  /* Custom RTL-specific styles */
  font-family: 'Arial', sans-serif;
}

revo-grid[rtl] .rgCell {
  /* Custom cell styles for RTL */
  text-align: right;
  direction: rtl;
}
```

### RTL with Custom Cell Renderers

When using custom cell renderers, ensure they respect RTL layout:

```typescript
const columns = [
  {
    prop: 'name',
    name: 'الاسم',
    cellTemplate: (h, props) => {
      return h('div', {
        style: {
          textAlign: props.model.rtl ? 'right' : 'left',
          direction: props.model.rtl ? 'rtl' : 'ltr'
        }
      }, props.model[props.prop]);
    }
  }
];
```

## Best Practices

### 1. Consistent RTL Implementation

- Always test your application in both LTR and RTL modes
- Ensure all text content is properly translated for RTL languages
- Consider cultural differences in data presentation

### 2. Performance Considerations

- RTL transformation is handled efficiently by the plugin system
- Column reordering is performed only when necessary
- No performance impact when RTL is disabled

### 3. Accessibility

- Ensure proper ARIA attributes for RTL content
- Test with screen readers that support RTL languages
- Consider keyboard navigation patterns for RTL users

### 4. Data Formatting

- Use appropriate number and date formatting for RTL locales
- Consider currency symbol positioning for RTL languages
- Ensure proper text direction for mixed content

## Troubleshooting

### Common Issues

1. **Columns not reordering**: Ensure the RTL plugin is properly loaded
2. **Text alignment issues**: Check if custom CSS is overriding RTL styles
3. **Performance problems**: Verify that RTL mode is only enabled when needed

### Debug Mode

Enable debug mode to troubleshoot RTL issues:

```typescript
// Enable debug mode
const grid = document.querySelector('revo-grid');
grid.debug = true;

// Check RTL state
console.log('RTL enabled:', grid.rtl);
```

### Events

The RTL plugin emits events when the RTL state changes:

```typescript
// Listen for RTL state changes
grid.addEventListener('rtlstatechanged', (event) => {
  const { rtl } = event.detail;
  console.log('RTL state changed to:', rtl);
});
```

This comprehensive RTL support ensures that RevoGrid works seamlessly with RTL languages and provides a native experience for users in RTL locales. 