import styled from 'styled-components'

const InputContainer = styled.div`
    display: grid;
    row-gap: 0.75em;
    margin-bottom: 2em;
`
const RoundedInput = styled.input`
    height: 1.75em;
    outline: none;
    border: 0.25em solid var(--light-bg); 
    background-color: transparent;
    border-radius: 1.5em;
    resize: none;

`
const RoundedTextArea = styled.textarea`
    outline: none;
    border: 0.25em solid var(--light-bg); 
    background-color: transparent;
    border-radius: 1.5em;
    resize: none;
`
const Button = styled.button`
    cursor: pointer;
    align-self: center;
    justify-self: center;
    padding: 0.5em 1.75em;
    border-radius: 1.75em;
    background-color: var(--bg); 
    border: 0.25em solid var(--light-bg); 
`

function Contact() {

    return (
        <section className="contact" id="contato">
            <h2>Contato</h2>
            <form onSubmit={(e)=> e.preventDefault}>
                <InputContainer>
                    <label htmlFor="">Nome</label>
                    <RoundedInput type="text" />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="">Email</label>
                    <RoundedInput type="text" />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="">Mensagem</label>
                    <RoundedTextArea name="" id="" cols="30" rows="10"></RoundedTextArea>
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