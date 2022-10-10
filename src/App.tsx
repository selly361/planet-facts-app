import { Route, Routes } from 'react-router-dom';

import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';
import Planet from './pages/Planet/Planet';
import React from 'react';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
   <Wrapper>
    <Header />
    <Routes>
      <Route path="/:planet" element={<Planet />} />
    </Routes>
   </Wrapper>
  );
}

export default App;
