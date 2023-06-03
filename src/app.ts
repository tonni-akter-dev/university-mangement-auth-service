import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/user/users.route'
import usersService from './app/modules/user/users.service'

const app: Application = express()
app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Application routes
app.use('/api/v1/users/', usersRouter)
//Testing
/* app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully')
}) */

app.get('/', async (req: Request, res: Response) => {
  await usersService.createUser({
    id: '999',
    password: '1234',
    role: 'student',
  })
  res.send('Working successfully')
})

export default app
