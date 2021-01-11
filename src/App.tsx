import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import Routes from './Routes'

function App() {
  return (
    <Router>
      <Routes></Routes>
    </Router>
  )
}

export default App
