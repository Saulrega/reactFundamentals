import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ModdalProvider } from './components/Modal/context/ModalContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModdalProvider>
      <App />
    </ModdalProvider>
  </StrictMode>,
)
