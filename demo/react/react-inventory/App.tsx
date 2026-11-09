import * as React from 'react';
import InventoryEditor from './inventory/InventoryEditor';

export default function App() {
  return <main style={{ maxWidth: 1000, margin: '40px auto', padding: '0 16px' }}>
    <InventoryEditor />
  </main>;
}
