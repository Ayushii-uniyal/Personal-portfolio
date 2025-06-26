import React from 'react';
import './App.css';
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Home from "./components/home/home";
import Projects from './components/projects/projects';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <>
    <Sidebar />
    <main className = "main">
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
    </>
  );
}

export default App;
