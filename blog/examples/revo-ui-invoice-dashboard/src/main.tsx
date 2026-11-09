import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@revolist/ui/styles.css';
import './styles.css';
import App from './App';
import UiQuickStart from './UiQuickStart';

const Example = new URLSearchParams(location.search).get('example') === 'quick-start'
  ? UiQuickStart
  : App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Example />
  </StrictMode>,
);
