import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/Education';
import styled from "styled-components";
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience';
import Projects from './components/Projects/index.js';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Body = styled.div`
    background-color: #F9F9F9;
    width: 100%;
    overflow-x: hidden;
`;

const Wrapper = styled.div`
    background: #F9F9F9;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar />
      <Body>
        <Hero />
        <Wrapper>
          <Skills />
          {/* <Experience /> */}
        </Wrapper>
        <Projects />
        <Wrapper>
          {/* <Education /> */}
          <Contact />
        </Wrapper>
        <Footer />
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
