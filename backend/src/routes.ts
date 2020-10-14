import {Router} from 'express'
import routerOrphanage from './routes/orphanageRouter'
const routerApi = Router()
routerApi.use('/',routerOrphanage)


export default routerApi