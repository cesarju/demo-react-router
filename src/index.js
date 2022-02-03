import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Dogs } from './components/Dogs';
import { Cats } from './components/Cats';
//importar BrowserRouter => conecta la aplicacion con la URL del navegador
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<App />}>
        <Route path='dogs' element={<Dogs/>}/>
        <Route path='cats' element={<Cats/>}/>  
      </Route>
      <Route path="*" element={<h1>ERROR 404</h1>}/>
    </Routes>   
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
