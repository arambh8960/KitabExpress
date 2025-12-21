import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import About from './components/About';

const App = () => {
  return (
    <BrowserRouter basename="/KitabExpress">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
