import styled from 'styled-components'
import { useState } from 'react'

const API_KEY = import.meta.env.VITE_SG_APIKEY
const API_EMAIL = import.meta.env.VITE_SG_EMAIL
const API_URL = import.meta.env.VITE_API_URL

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
            alert('dados incompletos')
            console.log('dados incompletos')
            return
        }

        const apiKey = API_KEY
        const apiEmail = API_EMAIL

        sendEmail({
            apiKey: apiKey,
            to: formData.email,
            from: apiEmail,
            subject: 'Título',
            html: '<div><h4>Agredeço a mensagem, entrarei em contato assim que possível</h4><p>Abaixo incluo uma cópia da mensagem enviada:</p><br>' + formData.body + '</div>'
        }) ?
            alert("Email enviado com sucesso, obrigada pelo contato!")
        :
            alert('Erro ao enviar email!')

        sendEmail({
            apiKey: apiKey,
            to: apiEmail,
            from: apiEmail,
            subject: 'Contato a partir do portifolio',
            html: formData.body + "<br>Enviado por: " + formData.email
        }) ?
            alert("Email enviado com sucesso, obrigada pelo contato!")
        :
            alert('Erro ao enviar email!')
    }

    const sendEmail = async(body) => {
        const apiUrl = API_URL

        try {
            const res = await fetch(
                apiUrl, 
            {
                method: 'POST',
                body: JSON.stringify(body),
                headers:  {
                'Content-Type': 'application/json'
                },
            }
            );
            const resStatus = await res.status
            return true
        } catch (err) {
            console.log(err)
            return false
        }
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
        </section>
    )
}

export default Contact