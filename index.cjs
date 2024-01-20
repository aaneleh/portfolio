require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const sgMail = require('@sendgrid/mail')

app.use(cors())
app.use(express.json())

app.post('/', async(req, res) => {
        
    sgMail.setApiKey(req.body.apiKey)

    const msg = {
        to: req.body.to,
        from: req.body.from, 
        subject: req.body.subject,
        text: req.body.html,
        html: req.body.html,
    }

    console.log(msg)

    sgMail.send(msg)
        .then(() => {
            console.log('Email sent')
            res.sendStatus(200)
        })
        .catch((error) => {
            console.error(error)
            res.sendStatus(500)
        })
})

app.listen(process.env.PORT, ()=> console.log(`Server iniciado porta ${process.env.PORT}`))