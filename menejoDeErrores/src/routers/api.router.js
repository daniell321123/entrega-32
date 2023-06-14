import { Router } from 'express'
import { usuariosRouter } from './usuarios.router.js'
import { apiErrorHandler } from '../middlewares/apiErrorHandler.js'

export const apiRouter = Router()

apiRouter.use('/usuarios', usuariosRouter)

apiRouter.use(apiErrorHandler)