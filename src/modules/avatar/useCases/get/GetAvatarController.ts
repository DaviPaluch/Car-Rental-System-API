//CreateCategoryController.ts

import { Request, Response } from "express";
import { GetAvatarUseCase } from "./GetAvatarUseCase";
import { container } from "tsyringe";

class GetAvatarController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.body
      const getAvatarUseCase = container.resolve(GetAvatarUseCase)
      const avatar = await getAvatarUseCase.execute({ id });
      return res.status(201).json(avatar);
    } catch (err) {
      console.error({ error: err.message })
      return res.status(400).json("Erro ao retornar a lista de classificações");
    }
  }
}

export { GetAvatarController };
