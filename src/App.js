// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />

      {/* Your other components go here */}
    </div>
  );
}

export default App;
