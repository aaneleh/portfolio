import { useEffect, useState } from "react"
import { BsStack, BsCodeSlash, BsFillPersonLinesFill, BsChatSquareTextFill } from "react-icons/bs";
import styled from 'styled-components'

const SidebarWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    position: fixed;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    @media screen and (max-width: 776px) {
        bottom: 0;
        left: 0;
        top: auto;
        transform: translateY(0%);
        gap: 3em;
        flex-direction: row;
        justify-content: center;
        width: 100dvw;
        background: var(--bg); 
        box-shadow: 0px -4px 8px var(--light-bg);
    }
    * {
        color: var(--font);
    }
` 
const ItemWrapper = styled.div`
    /* desktop bar */
    position: relative;
    display: flex;
    align-items: center;
    height: 2.5em;
    cursor: pointer;
    p {
        display: inline-flex;
        position: relative;
        gap: 0.5em;
        height: 2.5em;
        font-size: ${props => props.$active ? "28px" : "20px"};
        top: ${props => props.$active ? "2px" : "0px"};
        transition: font-size 150ms;
        &::before {
            content: "—";
        }
    }
    /* mobile bar invisible */
    h3 {
        position: absolute;
        visibility: hidden;
    }
    /* mobile bar */
    @media screen and (max-width: 776px) {
        height: 4em;
        width: 58px;
        padding: 1em 0;
        /* desktop bar invisible */
        p {
            position: absolute;
            visibility: hidden;
        }
        /* icones */
        h3 {
            position: relative;
            visibility: visible;
            font-size: ${props => props.$active ? "44px" : "36px"};
            top: 4px;
            right: ${props => props.$active ? "4px" : "0px"};
            transition: all 150ms;
        }
    }
`

function Sidebar() {
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            /* alert(window.innerWidth) */
            if(window.innerWidth < 1600) {
                setActiveSection(()=> {
                    if(window.scrollY > 400 && window.scrollY < 3300) {
                        return 1
                    } else
                    if (window.scrollY >= 3300 && window.scrollY < 4400){
                        return 2
                    } else 
                    if (window.scrollY >= 4400 && window.scrollY < 5400) {
                        return 3
                    } else 
                    if (window.scrollY >= 5400) {
                        return 4
                    }
                })
            } else {
                setActiveSection(()=> {
                    if(window.scrollY > 500 && window.scrollY < 1700) {
                        return 1
                    } else
                    if (window.scrollY >= 1700 && window.scrollY < 2600){
                        return 2
                    } else 
                    if (window.scrollY >= 2600 && window.scrollY < 3400) {
                        return 3
                    } else 
                    if (window.scrollY >= 3400) {
                        return 4
                    }
                })
            }
        }
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return (
        <SidebarWrapper className="sidebar">
            <ItemWrapper $active={activeSection == 1}>
                <a href="#projetos">
                    <p> Projetos </p>
                    <h3> <BsStack/> </h3>
                </a>
            </ItemWrapper>
            <ItemWrapper $active={activeSection == 2}>
                <a href="#tech">
                    <p> Tech </p>
                    <h3> <BsCodeSlash/> </h3>
                </a>
            </ItemWrapper>
            <ItemWrapper $active={activeSection == 3}>
                <a href="#sobre">
                    <p> Sobre </p>
                    <h3> <BsFillPersonLinesFill/> </h3>
                </a>
            </ItemWrapper>
            <ItemWrapper $active={activeSection == 4}>
                <a href="#contato">
                    <p> Contato </p>
                    <h3> <BsChatSquareTextFill/> </h3>
                </a>
            </ItemWrapper>
        </SidebarWrapper>
    )
}

export default Sidebar