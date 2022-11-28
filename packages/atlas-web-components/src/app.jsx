import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './components/BasicButton'
import './app.css'

export function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div className="card">
        <h1></h1>
        <atlas-basic-button label="My Label"></atlas-basic-button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
