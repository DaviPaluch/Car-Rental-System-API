import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { UserRepository } from "../modules/user/repositories/implementations/UserRepository";
import { AppError } from "../err/AppError";

interface IPayLoad {
  iat: string
  exp: string
  sub: string
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new AppError("Você não possui permissão de acesso", 401);
  }
  const [, token] = authHeader.split(" ")
  try {
    const decoded = verify(token, "6fecd29a9465dec8eaac6f6e904ddfe0") as IPayLoad
    console.log(decoded) //quando foi criado, quando vai expirar, quem é o sujeito

    const userRepository = new UserRepository()
    const user = await userRepository.fingById(decoded.sub)

    if (!user) {
      throw new AppError("Usuário não existe", 400);
    }

    req.user = {
      id: user.id
    }

    next()
  } catch (error) {
    console.error(error)
    throw new AppError("Invalid Token", 401);
  }
}