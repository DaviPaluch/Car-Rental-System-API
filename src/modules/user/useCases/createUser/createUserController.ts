import { container } from "tsyringe"
import { CreateUserUseCase } from "./createUserUseCase"
import { Request, Response } from "express"
import { stat } from "fs"


class CreateUserCrontroller {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password_hash } = req.body
    try {
      const createUserUseCase = container.resolve(CreateUserUseCase)
      await createUserUseCase.execute({
        name,
        email,
        password_hash
      })

      return res.status(201).json({status:"201"});
    } catch (err) {
      return res.status(400).json({ status:"400" });
    }
  }
}

export { CreateUserCrontroller }