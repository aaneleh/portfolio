import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsGithub, BsLinkedin, BsTwitterX, BsInstagram, BsFillGridFill  } from "react-icons/bs";
import styled from 'styled-components'

const Navigation = styled.nav`
    color: var(--font);
    background: var(--bg);
    box-shadow: 0px 4px 8px var(--bg);
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1em 2em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    width: calc(100vw - 5em);
    width: calc(100dvw - 5em);
    & h1 {
        z-index: 101;
    }
    * {
        color: var(--font);
    }
`

const Button = styled.div`
    font-size: 2em;
    cursor: pointer;
    @media screen and (min-width: 777px) {
        visibility: hidden;
    }
`

const Socials = styled.div`
    display: inline-flex;
    gap: 2em;

    @media screen and (max-width: 776px) {
        position: fixed;
        left: 0;
        padding: 2em 0;
        width: 100vw;
        width: 100dvw;
        display: grid;
        place-items: center;
        justify-content: center;
        grid-template: 1fr 1fr / repeat(4, 2em);
        box-shadow: 0px 4px 4px var(--light-bg);
        & a:first-child{
            grid-column-end: span 4;
        }

        margin-top: -16em;
        transition: 200ms;
        &.active {
            margin-top: 14em;
        }
        &.active:after{
            margin-top: 9em;
            content: '';
            position:absolute;
            top:0;
            left:0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.4);
        }
    }
`

function Nav() {
    const [sidebar, setSidebar] = useState(false)

    return (
        <Navigation className="nav"> 
            <Link to="/">
                <h3>
                    HelenaKurz 
                </h3>
            </Link>
            <Button onClick={ ()=> setSidebar(!sidebar) }>
                <BsFillGridFill/>
            </Button>
            <Socials className={ sidebar ? "active" : ""}>
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