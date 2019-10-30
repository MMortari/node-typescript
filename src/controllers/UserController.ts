import { Request, Response } from 'express'
import User from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const body: UserInterface = req.body

    const user = await User.create(body)

    console.log('fullname -> ', user.fullName())

    return res.json(user)
  }
}

export default new UserController()

interface UserInterface {
  email: string;
  firstName: string;
  lastName: string;
}
