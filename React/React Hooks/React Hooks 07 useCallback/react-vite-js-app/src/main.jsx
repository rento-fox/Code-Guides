import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppNoCallBack from './AppNoCallBack.jsx'
import AppWithCallBack from './AppWithCallBack.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppNoCallBack />
        <AppWithCallBack />
    </StrictMode>,
)

// EOF
