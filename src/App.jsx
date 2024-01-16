import './App.scss'
import Nav from './components/Nav'
import Hero from './components/Hero'

import styled from 'styled-components'
import Projects from './components/Projects'
import Tech from './components/Tech'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

import ScrollReveal from 'scrollreveal'

const Main = styled.main`
    position: relative;
    left: 120px;
    margin: 88px auto;
    min-height: 88vh;
    min-height: 88dvh;
    max-width: 70dvw;

    @media screen and (max-width: 776px) {
      max-width: 80dvw;
      left: 0px;

    }
`

function App() {

  ScrollReveal({ reset: true });
  ScrollReveal().reveal('.nav', { delay: 250 });
  ScrollReveal().reveal('.hero', { delay: 250 });
  ScrollReveal().reveal('.projects', { delay: 400 });
  ScrollReveal().reveal('.tech', { delay: 400 });
  ScrollReveal().reveal('.about', { delay: 400 });
  ScrollReveal().reveal('.contact', { delay: 400 });

  return (
    <>
      <Nav/>

      <Main>
          <Hero/>
            
          <Projects/>
          
          <Tech/>

          <About/>
          
          <Contact/>
      </Main>

      <Footer/>
    
      <Sidebar/>
    </>
  )
}

export default App
