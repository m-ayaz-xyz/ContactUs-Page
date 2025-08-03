import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Contactheader from './components/Contactheader/Contactheader'
import Contactform from './components/Contactform/Contactform'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Contactheader/>
      <Contactform/>
    </div>
  )
}

export default App