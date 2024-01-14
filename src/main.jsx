import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import styled from 'styled-components'
import Projects from './components/Projects/index.jsx'
import Tech from './components/Tech/index.jsx'
import Nav from './components/Nav/index.jsx'
import Footer from './components/Footer/index.jsx'
import About from './components/About/index.jsx'
import Contact from './components/Contact/index.jsx'


const Main = styled.main`
    margin: 88px auto;
    min-height: 88vh;
    min-height: 88dvh;
    max-width: 50dvw;
    @media screen and (max-width: 776px) {
      max-width: 80dvw;
    }
`

function ProjectsPage(){
  return (
    <>
      <Nav/>
      <Main>
          <Projects/>
      </Main>
      <Footer/>
    </>
  )
}
function TechPage(){
  return (
    <>
      <Nav/>
      <Main>
          <Tech/>
      </Main>
      <Footer/>
    </>
  )
}
function AboutPage(){
  return (
    <>
      <Nav/>
      <Main>
          <About/>
      </Main>
      <Footer/>
    </>
  )
}
function ContactPage(){
  return (
    <>
      <Nav/>
      <Main>
          <Contact/>
      </Main>
      <Footer/>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
      <Routes>
        <Route path='/' element={ <App/> }/>
        <Route path='/projetos' element={ <ProjectsPage/> }/>
        <Route path='/tech' element={ <TechPage/> }/>
        <Route path='/sobre' element={ <AboutPage/> }/>
        <Route path='/contato' element={ <ContactPage/> }/>
      </Routes>
  </Router>
/*   <React.StrictMode>
    <App />
  </React.StrictMode>, */
)
