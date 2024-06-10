import React from'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './component/Owner/HomePage.jsx'
import NewOffers from './component/Owner/NewOffers.jsx';
import Register from './component/Owner/Register.jsx';


function App() {
  return (
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/NewOffers' element={<NewOffers/>}/>
    <Route path='/Register' element={<Register/>}/>
  </Routes>
  )
}

export default App;
