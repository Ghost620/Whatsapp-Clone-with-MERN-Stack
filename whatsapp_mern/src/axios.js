import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://whatsappclone.mhuzaifa4.repl.co'
})

export default instance