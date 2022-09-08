import express, { NextFunction, Request, Response } from 'express'

const app = express()

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ message: 'Hello World 2' })
})

app.listen(5555, () => {
  console.log('App rodando em http://localhost:5555/')
})
