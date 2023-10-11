import React from 'react'
import "./App.css"
import {BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from './Routes'
import Navbar from './components/Navbar'
import { StoreProvider } from './context-reducer/StoreContext'

function App() {
  return (
    
    <StoreProvider>
    <Router>
          <Navbar />
          <AppRoutes />
        </Router>
    </StoreProvider>
  
  )
}

export default App