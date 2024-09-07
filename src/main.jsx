import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// router
import { BrowserRouter } from 'react-router-dom'

// components
import App from './App'

// context
import { ContextData, AppContext } from './contexts/context'


// css
import './reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppContext>
        <App />
      </AppContext>
    </BrowserRouter>
  </StrictMode>,
)
