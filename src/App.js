
import './App.css';

import React from "react";

import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import { TodoPage } from './pages/TodoPage';
import { NotFound } from './pages/NotFound';



function App() {
  return(
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={ <HomePage />}/>
          <Route path='/todo' element={ <TodoPage />}/>
          <Route path='/todo/:id' element={ <TodoPage />}/>
          <Route path='*' element={ <NotFound />}/>
        </Routes>
      </HashRouter>
    </>
  )
  
}

export default App;
