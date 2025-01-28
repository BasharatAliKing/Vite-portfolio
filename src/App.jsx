import React from "react";
import Navbar from "./layouts/Navbar";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Error from "./pages/Error"
import Layout from "./pages/Layout";
function App() {
  return (
    <>
      <Router>
       <Routes>
        <Route exact path="/" element={<Layout/>} >
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/portfolio" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/work" element={<Work/>} />
        </Route>
        <Route exact path="*" element={<Error/>} />
       </Routes>
      </Router>
    </>
  );
}

export default App;
