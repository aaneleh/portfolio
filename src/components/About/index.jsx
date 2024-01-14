import styled from 'styled-components'

import Selfie from '../../assets/selfie.jpeg'

const Wrapper = styled.div`
    img {
        width: 350px;
    }
    p {
        text-align: justify;
        margin-bottom: 2em;
        line-height: 1.35em;
        max-width: 48em;
    }
    
    @media screen and (min-width: 1200px){
        display: inline-flex;
        gap: 2em;
    }
`


function About() {
    return (
        <section className="about" id="sobre">
            <h2>Sobre</h2>
            <Wrapper>
                <p>Gosto de investir meu tempo livre estudando e aprendendo novas tecnologias, principalmente relacionadas a desenvolvimento web. Conclui curso técnico em informática pelo IFRS, onde estudei programação Java, Javascript, SQL e PHP. No momento estou cursando Ciências da Computação na UNISINOS.</p>
                <img src={Selfie}/>
            </Wrapper>
        </section>
    )
}

export default About