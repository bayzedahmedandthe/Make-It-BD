import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import ContextProvider from './Pages/Authentication/ContextProvider/ContextProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
      <ToastContainer/>
    </ContextProvider>
  </StrictMode>,
)
