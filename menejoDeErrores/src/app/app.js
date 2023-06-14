import express from 'express'
import { apiRouter } from '../routers/api.router.js'

const app = express()

app.use(express.json())
app.use((req, res, next) => { console.log(`(${req.method}) ${req.url}`); next() })
app.use('/api', apiRouter)

export { app }