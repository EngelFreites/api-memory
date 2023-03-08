require('./mongoose.js')
require('dotenv').config()

const express = require('express')
const cors = require('cors') 
const routesApp = require('./routes/index.js')


const app = express()

app.use(express.json())
app.use(cors())
app.get('/', (req, res) =>{
  res.send('hellow')
})

routesApp(app)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('server conected')
})