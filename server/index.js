let express = require('express')
let app = express()
let massive = require('massive')
require('dotenv').config()
let ctrl = require('./controller')

let { CONNECTION_STRING, SERVER_PORT } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
})

app.get('/api/houses', ctrl.readAll)
app.post('/api/houses', ctrl.addHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)