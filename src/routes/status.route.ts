import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

export const statusRouter = Router()

statusRouter.get('/status', (req, res) => {
  res.status(StatusCodes.OK).send({ message: 'API online' })
})
