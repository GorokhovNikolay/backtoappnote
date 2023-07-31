const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const routerImport = require('./Routs/routerImport')
const routerExport = require('./Routs/routerExport')
var cors = require('cors')
//192.168.1.159

const app = express()
app.use(cors())
require('dotenv').config() 
app.use(express.json({extended: true}))  

app.use(passport.initialize())
require('./middleware/passport')(passport) 

app.use('/api', routerImport)
app.use('/api', routerExport)
app.get('/', (req, res) => {
    res.send('Привет, народ!')  
  })

const port = process.env.PORT || 3000 
const URI = process.env.URI
 
const start = async () => {
   await mongoose.connect(`${URI}`)  
    app.listen(`${port}`, ()=>{
        console.log(`Сервер запущен на ${port} порту`)   
        
    })
}
start() 


