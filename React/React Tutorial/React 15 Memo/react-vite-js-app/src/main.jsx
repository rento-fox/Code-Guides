import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NonMemoApp from './NonMemoApp.jsx'
import MemoApp from './MemoApp.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <NonMemoApp />
        <MemoApp />
    </StrictMode>,
)

// EOF
