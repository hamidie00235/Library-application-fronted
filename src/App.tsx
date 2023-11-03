import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Carousel } from './layouts/HomePage/carousel';

function App() {
  return (
    <div>
       <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
    </div>
  );
}

export default App;
