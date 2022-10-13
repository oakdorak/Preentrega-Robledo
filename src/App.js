import React from 'react';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./routes/Home/Home";
import Menu from './routes/Menu/Menu';
import Cart from './routes/Cart/Cart'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/carrito" element={<Cart />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
