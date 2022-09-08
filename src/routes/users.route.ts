import { Router } from 'express'
import { v4 as uuid } from 'uuid'
import { StatusCodes } from 'http-status-codes'

export const userRoutes = Router()

interface user {
  username: string
  uuid: string
}

const users: user[] = []

userRoutes.get('/users', (req, res) => {
  return res.status(StatusCodes.OK).send({ users })
})

userRoutes.get('/users/:userId', (req, res) => {
  const { userId } = req.params
  const user = users.find((user) => user.uuid === userId)

  return res.status(StatusCodes.OK).send({ user })
})

userRoutes.post('/users', (req, res) => {
  const { username } = req.body
  const newUser: user = {
    username,
    uuid: uuid(),
  }
  users.push(newUser)

  return res.status(StatusCodes.CREATED).send({ newUser })
})

userRoutes.put('/users/:userId', (req, res) => {
  const { userId } = req.params
  const { username } = req.body

  const user = users.find((user) => user.uuid === userId)
  if (user) {
    user.username = username
  }

  return res.status(StatusCodes.OK).send({ user })
})

userRoutes.delete('/users/:userId', (req, res) => {
  const { userId } = req.params

  const targetUser = users.find((user) => user.uuid === userId)
  users.filter((user) => user.uuid !== targetUser?.uuid)

  return res.status(StatusCodes.OK).send({ message: 'User Deleted' })
})
