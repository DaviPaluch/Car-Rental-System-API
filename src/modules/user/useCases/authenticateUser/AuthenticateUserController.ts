import { container } from "tsyringe"
import { Request, Response } from "express"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"


class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
    try {
      const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)
      const token = await authenticateUserUseCase.execute({ email, password })
      return res.status(200).json(token);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { AuthenticateUserController }