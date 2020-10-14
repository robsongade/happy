import express from 'express'
import 'express-async-errors'
import './database/connection'

import routers from './routes'
import errorHandler from './errors/handler'
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json())
app.use(routers)
app.use(errorHandler)
const port = 3333
app.listen(port,'0.0.0.0',function(){
    console.log(`Server load in port ${port}`)
})