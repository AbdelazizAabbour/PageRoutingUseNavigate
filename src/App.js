import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Profilname from './components/Profilname';

 function App() {
  return (
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/Profilname" element={<Profilname />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;