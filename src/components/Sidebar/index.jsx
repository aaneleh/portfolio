import styled from 'styled-components'

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
        top: ${props => props.$active ? "0" : "0"}; 
        font-size: ${props => props.$active ? "32px" : "24px"}; 
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
            
        }
    }
`

/* @todo adicionar o active dinamico*/
function Sidebar() {

    return (
        <SidebarWrapper className="sidebar">
            <ItemWrapper >
                <a href="#projetos">
                    <p> Projetos </p>
                    <h3></h3>
                </a>
            </ItemWrapper>
            <ItemWrapper >
                <a href="#tech">
                    <p> Tech </p>
                    <h3></h3>
                </a>
            </ItemWrapper>
            <ItemWrapper>
                <a href="#sobre">
                    <p> Sobre </p>
                    <h3></h3>
                </a>
            </ItemWrapper>
            <ItemWrapper>
                <a href="#contato">
                    <p> Contato </p>
                    <h3></h3>
                </a>
            </ItemWrapper>
        </SidebarWrapper>
    )
}

export default Sidebar