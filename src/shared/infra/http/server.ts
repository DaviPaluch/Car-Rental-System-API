// server.ts
import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../../../swagger.json'
import { router } from './routes'
import '@shared/container'
import { AppError } from '@shared/err/AppError'


const server = express()

server.use(express.json())
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

server.use(router)

server.get("/", (req, res) => {
  console.log("hello world")
  return res.send("hello")
})

server.use(
  (err: Error, req: Request, res: Response, next: NextFunction) => {
    // console.log(err)
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({ message: err.message })
    }

    return res.status(500).json({ status: "error", message: `Internal server error - ${err.message}` })
  })


server.listen(3000, () => console.log("server is running..."))