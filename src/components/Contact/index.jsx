import styled from 'styled-components'
import { useState } from 'react'
import PopUp from '../Pop-up'

const InputContainer = styled.div`
    display: grid;
    row-gap: 0.75em;
    margin-bottom: 2em;
`
const RoundedInput = styled.input`
    height: 1.75em;
    outline: none;
    border: 0.15em solid var(--light-bg); 
    background-color: transparent;
    border-radius: 1.5em;
    resize: none;
    color: var(--font);
    font-size: 16px;
    padding: 0.5em 1em;
`
const RoundedTextArea = styled.textarea`
    outline: none;
    border: 0.15em solid var(--light-bg); 
    background-color: transparent;
    border-radius: 1.5em;
    resize: none;
    color: var(--font);
    font-size: 16px;
    padding: 0.5em 1em;
`
const Button = styled.button`
    cursor: pointer;
    align-self: center;
    justify-self: center;
    padding: 0.5em 1.75em;
    border-radius: 1.75em;
    color: var(--font);
    font-size: 16px;
    background-color: transparent; 
    border: 0.15em solid var(--light-bg); 
    transition: 150ms;
    &:hover {
        background: var(--light-bg);
    }
`

function Contact() {

    const [ popUpError, setPopUpError] = useState(false);
    const [ popUpThanks, setPopUpThanks] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        body: '',
    })

    const handleChange = (e) => {
        setFormData((old) => {
            return {
                ...old,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!formData.email.includes('@') || formData.email.length < 11 ||
        formData.name.length < 2 || formData.body.length < 2) {
            setPopUpError(true)
            return
        }

        setPopUpThanks(true)
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=helenakurzgon@gmail.com&body=${formData.body}&bcc=${formData.email}`, "_blank", "noreferrer");
    }

    return (
        <section className="contact" id="contato">
            <h2>Contato</h2>
            <form onSubmit={handleSubmit}>
                <InputContainer>
                    <label htmlFor="">Nome</label>
                    <RoundedInput type="text" name="name" onChange={handleChange}/>
                </InputContainer>
                <InputContainer>
                    <label htmlFor="">Email</label>
                    <RoundedInput type="text" name="email" onChange={handleChange}/>
                </InputContainer>
                <InputContainer>
                    <label htmlFor="">Mensagem</label>
                    <RoundedTextArea name="body" id="" cols="30" rows="10" onChange={handleChange}></RoundedTextArea>
                </InputContainer>
                <InputContainer>
                    <Button>
                        Enviar
                    </Button>
                </InputContainer>
            </form>

            <PopUp trigger={popUpError} setTrigger={setPopUpError} title={'Dados Incompletos'} description={'Por favor, preencha corretamente todos os campos'} button={'Voltar'}/>
            <PopUp trigger={popUpThanks} setTrigger={setPopUpThanks} title={'Obrigada!'} description={'Agradeço o contato, responderei assim que possível!'} button={'Voltar'}/>

        </section>
    )
}

export default Contact