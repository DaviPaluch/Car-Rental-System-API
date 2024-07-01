import { UserRepository } from "@modules/user/infra/prisma/repositories/UserRepository";
import { AppError } from "@shared/err/AppError";
import { NextFunction, Request, Response } from "express";

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  const { id } = req.user

  const userRepository = new UserRepository()
  const user = await userRepository.fingById(id)

  if (!user.isAdmin) {
    throw new AppError("User isn't admin!")
  }

  return next()
}