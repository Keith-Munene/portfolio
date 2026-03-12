/**
 * src/main.tsx — Vite/React Entry Point
 *
 * This is the first file that runs.
 * It mounts the React app onto the #root div in index.html.
 *
 * StrictMode renders components twice in development to help
 * catch side effects and bugs early. Has no effect in production.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './app/globals.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)