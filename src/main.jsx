// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'
// import "./index.scss"
// import { AuthContextProvider } from './context/AuthContextProvider.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthContextProvider>
//     <App />
//     </AuthContextProvider>
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.scss"
import { AuthContextProvider } from './context/AuthContextProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
 
  </StrictMode>,
)
