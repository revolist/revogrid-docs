Here's an example of a simple plugin that logs when a cell is focused:

```typescript
class CellLogger extends BasePlugin {
  constructor(revogrid: HTMLRevoGridElement, providers: PluginProviders) {
    super(revogrid, providers);
    this.addEventListener('beforecellfocus', this.handleCellFocus);
  }

  private handleCellFocus = (e: CustomEvent) => {
    console.log('Cell focused:', e.detail);
  };
}

// Usage
const gridElement = document.querySelector('revo-grid');
gridElement.plugins.push(CellClickLogger);
```
