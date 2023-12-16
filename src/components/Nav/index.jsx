import { BsGithub, BsLinkedin, BsTwitterX, BsInstagram } from "react-icons/bs";
import styled from 'styled-components'

const Navigation = styled.nav`
    margin-top: 0px;
    position: fixed;
    top:0px;
    left: 0px;
    padding: 1em 2em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    width: 94vw;
    width: 94dvw;
`

const Socials = styled.div`
    display: inline-flex;
    gap: 2em;
`

function Nav() {
    return (
        <Navigation className="nav"> 
            <h1>
                LoremIpsum
            </h1>
            <Socials>
                <a href="/" target="_blank">
                    helenakurzgon@gmail.com
                </a>
                <a href="/" target="_blank" className="icon">
                    <BsGithub />
                </a>
                <a href="/" target="_blank" className="icon">
                    <BsLinkedin />
                </a>
                <a href="/" target="_blank" className="icon">
                    <BsTwitterX />
                </a>
                <a href="/" target="_blank" className="icon">
                    <BsInstagram />
                </a>
            </Socials>
        </Navigation>
    )
}

export default Nav