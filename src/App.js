import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Hospital from './Pages/Hospital';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Personlanding from './Pages/Personlanding';
import Donate from './Pages/Donate';
import Hospitalbloodbank from './Pages/Hospitalbloodbank';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/Hospital' element={<Hospital/>} />
      {/* <Route path='/Login' element={<Login/>} /> */}
      <Route path='/Register' element={<Register/>} />
      <Route path='/Person-Landing' element={<Personlanding/>} />
      <Route path='/Donate' element={<Donate/>} />
      <Route path='/Hospitalbloodbank' element={<Hospitalbloodbank/>} />

    </Routes>
  )
}

export default App
