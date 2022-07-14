import React from 'react'
import Home from "./components/Home.js"
import About from "./components/About.js";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Services from "./components/Services.js";


function App() {
  return (
    <div>

<Router>

<nav style={{
  background: "grey", 
  position: "fixed",
  bottom:400,
  padding: "10px 10px 0px 10px",
  width: "100%",
  }} >

<Link to="/" style={{padding: 5}}>
Home
</Link>

<Link to="about" style={{padding: 5}}>
About
</Link>

<Link to="services" style={{padding: 5}}>
Services
</Link>

</nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="services" element={<Services />} />

  </Routes>
</Router>

<footer style={{
  position: "fixed",
  bottom:0,
  padding: "10px 10px 0px 10px",
  width: "100%",
  height:30,   /* Height of the footer */
  background: "grey"
}}>


  
  Thanks for visitng our page! EST. 2022
</footer>
</div>
  );
}

export default App;
