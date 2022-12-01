import React from 'react'
import Navbar from "./component/Navbar";
import Hero from './component/Hero';
import Card from './component/Card';

function App() {
  return (
    <div className="container" >
      <Navbar />
      <Hero />
      <Card />
    </div>
  )
}

export default App;