import React from'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './component/Owner/HomePage.jsx'
import NewOffers from './component/Owner/NewOffers.jsx';


function App() {
  return (
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/NewOffers' element={<NewOffers/>}/>
  </Routes>
  )
}

export default App;
