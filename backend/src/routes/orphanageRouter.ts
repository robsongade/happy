import express from 'express'
import path from 'path'
const { Router } = express

import multer from 'multer'

import uploadConfig from './../config/upload';

import OrphanagesController from './../../src/controllers/OrphanagesController'

const routerOrphanage = Router()
const upload = multer(uploadConfig)


routerOrphanage.get('/orphanages',OrphanagesController.index)
routerOrphanage.get('/orphanages/:id',OrphanagesController.show)
routerOrphanage.post('/orphanages',upload.array('images'),OrphanagesController.create)
routerOrphanage.use('/uploads',express.static(path.join(__dirname,'..','..','uploads')))

export default routerOrphanage