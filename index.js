const express = require('express')
const app = express()

//dotenv
require('dotenv').config()

//cors
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({extended : true}))

//converting to json
app.use(express.json())


//router
const clgRouter = require('./router/cRouter')
app.use('/',clgRouter)









app.listen(process.env.PORT,()=>
{
    console.log('Server Running.. http://localhost:9004/')
})