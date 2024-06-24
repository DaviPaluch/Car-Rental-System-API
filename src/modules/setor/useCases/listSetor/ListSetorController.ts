//CreateCategoryController.ts

import { Request, Response } from "express";
import { ListSetorUseCase } from "./ListSetorUseCase";
import { container } from "tsyringe";

class ListSetorController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const listSetorUseCase = container.resolve(ListSetorUseCase)
      const list = await listSetorUseCase.execute({});
      return res.status(200).json(list);
    } catch (err) {
      console.error({ error: err.message })
      return res.status(400).json("Erro ao retornar a lista de notificações");
    }
  }
}

export { ListSetorController };
