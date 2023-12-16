import './App.scss'
import Nav from './components/Nav'
import Hero from './components/Hero'

import styled from 'styled-components'

const Main = styled.main`
    margin: 88px auto;
    max-width: 50dvw;
    min-height: 88vh;
    min-height: 88dvh;
    border: 1px solid white;
`

function App() {

  return (
    <>
      <Nav/>

      <Main>
        <Hero/>
          
        <section className="projects">
          
        </section>
        <section className="tech">
          
        </section>
        <section className="about">
          
        </section>
        <section className="contact">
          
        </section>
      </Main>

      <footer className="footer">
        
      </footer>
      <nav className="sidebar">
        
      </nav>
    </>
  )
}

export default App
