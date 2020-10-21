const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const db = require('./backend/database/index.js')


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/client/dist'))


app.use('/user',require('./backend/routes/Users'))
app.use('/comment',require('./backend/routes/Comments'))
app.use('/video',require('./backend/routes/Videos.js'))
app.use('/favorite',require('./backend/routes/Favorites.js'))


const port = 3000
app.listen(port, () => {
    console.log(`listening at port http://localhost:${port}`)
})