import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { AppError } from "../../../../err/AppError";

interface IRequest {
  email: string,
  password: string
}
interface IResponse {
  user: {
    id:string,
    name: string,
    email: string
  }
  token: string,
  status:string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email)
    if (!user) {
      throw new AppError("Email ou senha incorreto!", 401)
    }
    const passwordMatch = await compare(password, user.password_hash)
    if (!passwordMatch) {
      throw new AppError("Email ou senha incorreto!", 401)
    }
    // Gerar token de autenticacao
    const token = sign({}, "6fecd29a9465dec8eaac6f6e904ddfe0", {
      subject: user.id,
      expiresIn: "1d"
    })

    return { user: { id: user.id,name: user.name, email: user.email }, token, status:"200" }
  }
}

export { AuthenticateUserUseCase }