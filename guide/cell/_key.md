Keys allow the virtual DOM to:
- **Identify unique nodes** - Distinguish between different items even when content is similar
- **Optimize updates** - Efficiently update only the nodes that have changed
- **Preserve state** - Maintain component state when items are reordered or filtered

### Basic Key Usage

When rendering multiple elements, always provide a unique `key` prop:

```jsx
const MyTemplate = (h, props) => {
  const items = props.model.items || [];
  
  return (
    <div>
      {items.map((item, index) => (
        <div key={item.id || `item-${index}`}>
          {item.name}
        </div>
      ))}
    </div>
  );
}
```

### Best Practices for Keys

1. **Use stable, unique identifiers** - Prefer IDs from your data over array indices:
   ```jsx
   // ✅ Good - uses stable ID
   {items.map(item => (
     <div key={item.id}>{item.name}</div>
   ))}
   
   // ⚠️ Acceptable - uses index when no ID available
   {items.map((item, index) => (
     <div key={`item-${index}`}>{item.name}</div>
   ))}
   ```

2. **Combine identifiers for uniqueness** - When rendering cells, combine row and column identifiers:
   ```jsx
   const CellTemplate = (h, props) => {
     return (
       <div key={`${props.rowIndex}-${props.colIndex}`}>
         {props.model[props.prop]}
       </div>
     );
   }
   ```

3. **Avoid changing keys** - Keys should remain stable for the same item across renders:
   ```jsx
   // ❌ Bad - key changes on every render
   <div key={Math.random()}>Content</div>
   
   // ✅ Good - key is stable
   <div key={props.model.id}>Content</div>
   ```

### Example: Cell Template with Keys

```jsx
const CellWithMultipleItems = (h, props) => {
  const tags = props.model.tags || [];
  
  return (
    <div>
      <span>{props.model.name}</span>
      <div>
        {tags.map(tag => (
          <span key={tag.id} className="tag">
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}
```