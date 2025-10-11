import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Home/>
    </ErrorBoundary>
  )
}

export default App
