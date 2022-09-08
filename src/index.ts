import express, { urlencoded } from 'express'
import { statusRouter } from './routes/status.route'
import { userRoutes } from './routes/users.route'

const app = express()

// Configs
app.use(express.json())
app.use(urlencoded({ extended: true }))

// Routes
app.use(userRoutes)
app.use(statusRouter)

app.listen(5555, () => {
  console.log('App running on http://localhost:5555/')
})
