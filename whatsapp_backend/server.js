import express from 'express'
import mongoose from 'mongoose'
import Messages from "./dbMessages.js"

// app config

const app = express()
const port = process.env.PORT || 9000



const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1481958",
  key: "f67bd1478faa505418f5",
  secret: "632ee87542beb08b444a",
  cluster: "eu",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});



// middleware
app.use(express.json())

// DB config

const conn_url = 'mongodb+srv://ghost620:Prisoner620123@cluster0.4bcjedd.mongodb.net/dbwhatsapp?retryWrites=true&w=majority'

mongoose.connect(conn_url)

// mongoose.connect(conn_url, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
// .then(console.log("mongodb connected successfully...."))
// .catch(err =>console.log(err))

// API Routes

app.get('/', (req, res) => res.status(200).send('hello world'))

app.get('/messages/sync', (req, res) => {

    Messages.find( (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

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
