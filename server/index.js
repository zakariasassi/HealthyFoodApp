const express = require('express')
const cors = require('cors')
const bodybarser = require('body-parser')
const router = require('./routes/router')




const app = express()
const port = 3000



app.use(cors())

app.use(express.urlencoded( { extends : true }))

app.use(router)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))