import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
 import Signup from './Signup/signup';
import Login from './Signup/login';
import Home from './Homepage/Home';

import EHome from './Ecommerce/EHome';
import EProduct from './Ecommerce/ProductPage/EProduct';
import Aboutus from './Ecommerce/Aboutus';

import THome from './Tutorial/THome';
import Article from './Tutorial/Article';
import Video from './Tutorial/Video';
import RHome from './Recycling/RHome';
import SortingGame from './Recycling/SortingGame'; 
import CHome from './Contact/CHome';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Signup />} /> 
         <Route path="/login" element={<Login />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/Ecommerce" element={<EHome />} /> 
        <Route path="/Ecommerce/EHome" element={<EHome/>}/>
        <Route path="/Ecommerce/products" element={<EProduct/>}/>
        <Route path="/Ecommerce/aboutus" element={<Aboutus />} />
       
        <Route path="/Tutorial" element={<THome />}/>
        <Route path="/article" element={<Article/>}/>
        <Route path="/video" element={<Video/>}/>
        <Route path="/Tutorial/THome" element={<THome />} />
        <Route path="/Recycling" element={<RHome />} />
        <Route path="/game" element={<SortingGame />} />
        <Route path="/collection" element={<RHome />} />
        <Route path="/Contact" element={<CHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
