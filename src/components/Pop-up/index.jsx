import { useEffect } from 'react';
import styled from 'styled-components';
import { BsXLg } from "react-icons/bs";

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    background-color: var(--light-bg);
    padding: 4em 4em;
    width: min(24em, 50vw);
    border-radius: 0.5em;
    box-shadow: 0px 0px 20px 2px var(--bg);
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5em;
    text-align: left;
    p {
        font-size: 18px;
        font-weight: 200;
    }
    button {
        font-size: 20px;
        font-weight: 300;
    }
    h3 {
        font-size: 28px;
        text-align: left;
    }
    div {
        align-self: center;
    }
    button {
        background-color: transparent;
        border: 2px solid var(--font);
        color: var(--font);
        border-radius: 0.85em;
        padding: 0.25em 0.5em;
        cursor: pointer;
        transition: all 100ms;
        &:hover{
            background-color: var(--font);
            color: var(--light-bg);
        }
    }
`
const Close = styled.div`
    position: absolute;
    right: 16px;
    top: 16px;
    transition: all 100ms;
    &:hover {
        transform: scale(1.24);
    }
`

function PopUp(props) {

    return (props.trigger) ? (
        <Wrapper className="pop-up sombra">

            <Content>
                <h3> {props.title} </h3>
                <p> {props.description} </p>
                <div>
                    <button onClick={() => props.setTrigger(false) }>
                        {props.button}
                    </button>
                </div>
            </Content> 

        </Wrapper>
    ) : "";

}

export default PopUp;