import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { ScrollToTop } from './components'
import { FilterProvider } from './context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <ScrollToTop />
        <App />
      </FilterProvider>
    </BrowserRouter>
  </StrictMode>,
)
