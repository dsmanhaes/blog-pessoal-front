import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/estaticos/navbar/Navbar';
import { About } from './paginas/about/About';
import { Home } from './paginas/home/Home';
import { NotFound } from './paginas/notFound/NotFound';
import { Produto } from './paginas/produto/Produto';

function App() {
  // <Route path='*' element={<NotFound />} />
  // <Route path='*' element={<Navigate to='/' replace />} />
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/produto' element={<Produto />} />
        <Route path='/produto/:photoId' element={<Produto />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Router>
  );
}

export default App;
