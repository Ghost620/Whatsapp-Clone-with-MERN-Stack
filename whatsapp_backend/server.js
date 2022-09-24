import express from 'express'
import mongoose from 'mongoose'
import Messages from "./dbMessages.js"

//app config

const app = express()
const port = process.env.PORT || 9000

// DB config

const conn_url = 'mongodb+srv://ghost620:Prisoner620123@cluster0.4bcjedd.mongodb.net/whatsappdb?retryWrites=true&w=majority'

// mongoose.connect(conn_url, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true 
// })
mongoose.connect(conn_url)

// API Routes

app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.listen(port, ()=> console.log(`Listening on localhost:${port}`))
