import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hive from './components/Hive';
import Cricket from './components/Cricket';
import Projects from './components/Projects';
import Interests from './components/Interests';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Hive />
      <Cricket />
      <Projects />
      <Interests />
      <About />
      <Footer />
    </div>
  );
}

export default App;

