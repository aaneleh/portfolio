import styled from 'styled-components'
import { useEffect, useState } from "react"

const SidebarWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1em;
    position: fixed;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    @media screen and (max-width: 776px) {
        bottom: 0;
        left: 0;
        top: auto;
        transform: translateY(0%);
        gap: 2em;
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
    position: relative;
    display: flex;
    align-items: center;
    height: 2.5em;
    cursor: pointer;
    p {
        display: inline-flex;
        gap: 0.5em;
        height: 2.5em;
        font-size: ${props => props.$active ? "28px" : "20px"};
        transition: font-size 150ms;
        &::before {
            content: "—";
        }
    }
    @media screen and (max-width: 776px) {
        height: 4em;
        width: 58px;
        padding: 1em 0;
        p {
            position: absolute;
            visibility: hidden;
        }
        h3{
            width: ${props => props.$active ? "56px" : "40px"};
            height:  ${props => props.$active ? "56px" : "40px"};
            background: var(--font); /* @todo aqui vai um icone */
            border-radius: 100%;
            transition: all 150ms;
        }
    }
`

function Sidebar() {

    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            if(window.innerWidth < 1300) {
                setActiveSection(()=> {
                    if(window.scrollY > 500 && window.scrollY < 2500) {
                        return 1
                    } else
                    if (window.scrollY >= 2500 && window.scrollY < 3400){
                        return 2
                    } else 
                    if (window.scrollY >= 3400 && window.scrollY < 4400) {
                        return 3
                    } else 
                    if (window.scrollY >= 4400) {
                        return 4
                    }
                })
            } else {
                setActiveSection(()=> {
                    if(window.scrollY > 500 && window.scrollY < 1700) {
                        return 1
                    } else
                    if (window.scrollY >= 1700 && window.scrollY < 2400){
                        return 2
                    } else 
                    if (window.scrollY >= 2400 && window.scrollY < 3100) {
                        return 3
                    } else 
                    if (window.scrollY >= 3100) {
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
                    <h3></h3>
                </a>
            </ItemWrapper>
            <ItemWrapper $active={activeSection == 2}>
                <a href="#tech">
                    <p> Tech </p>
                    <h3></h3>
                </a>
            </ItemWrapper>
            <ItemWrapper $active={activeSection == 3}>
                <a href="#sobre">
                    <p> Sobre </p>
                    <h3></h3>
                </a>
            </ItemWrapper>
            <ItemWrapper $active={activeSection == 4}>
                <a href="#contato">
                    <p> Contato </p>
                    <h3></h3>
                </a>
            </ItemWrapper>
        </SidebarWrapper>
    )
}

export default Sidebar