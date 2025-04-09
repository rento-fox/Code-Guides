import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppNoCustomHook from './AppNoCustomHook.jsx'
import AppWithCustomHook from './AppWithCustomHook.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppNoCustomHook />
        <AppWithCustomHook />
    </StrictMode>,
)

// EOF
