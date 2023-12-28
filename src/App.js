import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Education from './components/Education';
import styled from "styled-components";
import { BrowserRouter as Router } from 'react-router-dom';
import Projects from './components/Projects/index.js';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from "./components/ProjectDetails";

const Body = styled.div`
    width: 100%;
    overflow-x: hidden;

`;

const Wrapper = styled.div`
    background: #F9F9F9;
`;

function App() {
    const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar />
      <Body>
        <Hero />
        <Wrapper>
          <Skills />
        </Wrapper>
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <Wrapper>
          {/* <Education /> */}
          <Contact />
        </Wrapper>
        <Footer />
        {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
