import { BsGithub, BsLinkedin, BsTwitterX, BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1em 4em 4em;
    width: calc(90dvw - 4em);
    @media screen and (max-width: 776px){
        flex-direction: column;
        align-items: center;
        gap: 2em;
        margin-bottom: 8em;
    }
    * {
        color: var(--font);
    }
    a {
        position: relative;
        width: fit-content;
    }
    a:not(.icon)::before {
        content: "";
        background-color: var(--font);
        width: 0%;
        position: absolute;
        top: 100%;
        left: 0;
        height: 2px;
    }
    a:not(.icon):hover::before {
        width: 100%;
        transition: width 150ms;
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
                        HelenaKurz
                    </h3>
                </Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/tech">Tech</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contato</Link>
            </FooterContainers>
            <FooterContainers>
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=helenakurzgon@gmail.com&tf=cm" target="_blank">
                    helenakurzgon@gmail.com
                </a>
                <Socials>
                    <a href="https://github.com/aaneleh" target="_blank" className="icon">
                        <BsGithub />
                    </a>
                    <a href="https://br.linkedin.com/in/helena-kurz-1738a2256" target="_blank" className="icon">
                        <BsLinkedin />
                    </a>
                    <a href="https://twitter.com/helena_kurzzz" target="_blank" className="icon">
                        <BsTwitterX />
                    </a>
                    <a href="https://www.instagram.com/helena.kurz/" target="_blank" className="icon">
                        <BsInstagram />
                    </a>
                </Socials>
            </FooterContainers>
        </FooterWrapper>
    )
}

export default Footer