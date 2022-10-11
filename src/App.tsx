import { Route, Routes } from 'react-router-dom';

import Header from './components/Layout/Header/Header';
import Home from './pages/Home/Home';
import Planet from './pages/Planet/Planet';
import React from 'react';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
   <Wrapper>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:planetName" element={<Planet />} />
    </Routes>
   </Wrapper>
  );
}

export default App;
