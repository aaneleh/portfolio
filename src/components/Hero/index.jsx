import styled from 'styled-components'

const Wrapper = styled.section`
    h1 {
        margin-bottom: 20px;
    }
`

function Hero() {

    return (
        <Wrapper className="hero">
            <h1>Olá</h1>
            <p>Me chamo Helena! Sou uma desenvolvera web, atualmente focada em front-end com React.</p>
        </Wrapper>
    )
}

export default Hero