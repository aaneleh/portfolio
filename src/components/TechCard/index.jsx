import styled from 'styled-components'

const Wrapper = styled.div`
    height: 6em;
    width: 4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--light-bg);
    border-radius: 1em;
    padding: 1.5em;
    * {
        font-size: 4em;
    }
    p {
        font-size: 1em;
        height: 0.25em;
    }
`

function TechCard({name, icon}) {
    return (
        <Wrapper className="tech-card">
            {icon}
            <p>{name}</p>
        </Wrapper>
    )
}

export default TechCard