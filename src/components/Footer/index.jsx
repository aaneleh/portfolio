import { BsGithub, BsLinkedin, BsTwitterX, BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
    display: flex;
    align-items: flex-start; //@todo flex-start ou center?
    justify-content: space-between;
    padding: 1em 2em;
    width: 90vw;
    width: 90dvw;
    overflow: hidden;
    @media screen and (max-width: 776px){
        flex-direction: column;
        align-items: center;
        gap: 2em;
        margin-bottom: 8em;
    }
    * {
        color: var(--font);
    }
` 
const FooterContainers = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1em;
`
const Socials = styled.div`
    display: inline-flex;
    gap: 2em;
`

function Footer() {

    return (
        <FooterWrapper className="footer">
            <FooterContainers>
                <Link to="/">
                    <h3>
                        LoremIpsum {/* @todo nome */}
                    </h3>
                </Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/tech">Tech</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contato</Link>

            </FooterContainers>
            <FooterContainers>
                <a href="/" target="_blank">
                    helenakurzgon@gmail.com
                </a>
                <Socials>
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
            </FooterContainers>
        </FooterWrapper>
    )
}

export default Footer