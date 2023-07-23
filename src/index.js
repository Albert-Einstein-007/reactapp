import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import './App.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/layout';
import Social from './pages/social';
import About from './pages/about';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<App />} />
        <Route path='Social' element={<Social />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
