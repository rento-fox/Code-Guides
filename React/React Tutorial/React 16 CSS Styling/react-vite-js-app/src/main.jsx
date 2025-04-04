// Import the component in your application:

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './App.jsx'
import Car from './Car.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header />
        <Car />
    </StrictMode>,
)

// EOF
