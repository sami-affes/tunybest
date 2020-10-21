const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + '/client/dist'))

const db = require('./backend/database/index.js')

const port = 3000
app.listen(port, () => {
    console.log(`listening at port http://localhost:${port}`)
})