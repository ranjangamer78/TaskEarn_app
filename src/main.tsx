// Protect against environments where window.fetch has only a getter
try {
  if (typeof window !== 'undefined') {
    let currentFetch = window.fetch;
    try {
      Object.defineProperty(window, 'fetch', {
        get: () => currentFetch,
        set: (fn) => {
          currentFetch = fn;
        },
        configurable: true,
        enumerable: true,
      });
    } catch {
      // Ignored if non-configurable
    }
  }
} catch {
  // Ignored
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {ErrorBoundary} from './components/ErrorBoundary.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);

