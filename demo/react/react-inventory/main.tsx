import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const host = document.getElementById('root');
if (!host) throw new Error('Missing #root element.');
createRoot(host).render(<React.StrictMode><App /></React.StrictMode>);
