//CreateCategoryController.ts

import { Request, Response } from "express";
import { ListStatusRiscoUseCase } from "./ListStatusRiscoUseCase";
import { container } from "tsyringe";

class ListStatusRiscoController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const listStatusRiscoUseCase = container.resolve(ListStatusRiscoUseCase)
      const list = await listStatusRiscoUseCase.execute({});
      return res.status(200).json(list);
    } catch (err) {
      console.error({ error: err.message })
      return res.status(400).json("Erro ao retornar a lista de notificações");
    }
  }
}

export { ListStatusRiscoController };
