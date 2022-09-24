import express from 'express'
import mongoose from 'mongoose'

//app config

const app = express()
const port = process.env.PORT || 9000

// DB config

const conn_url = 'mongodb+srv://ghost620:Prisoner620123@cluster0.4bcjedd.mongodb.net/whatsappdb?retryWrites=true&w=majority'

mongoose.connect(conn_url,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true 
})


// API Routes

app.get('/', (req, res) => res.status(200).send('hello world'))

app.listen(port, ()=> console.log(`Listening on localhost:${port}`))
