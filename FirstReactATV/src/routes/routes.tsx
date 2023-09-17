import React from 'react';

// import { Container } from './styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home';

const RouterController: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage description={'Número'} rate={0} title={'Menos avaliado'}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterController;