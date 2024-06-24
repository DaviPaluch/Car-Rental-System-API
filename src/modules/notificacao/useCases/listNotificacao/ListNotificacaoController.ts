//CreateCategoryController.ts

import { Request, Response } from "express";
import { ListNotificacaoUseCase } from "./ListNotificacaoUseCase";
import { container } from "tsyringe";

class ListClassificacaoController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const listNotificacaoUseCase = container.resolve(ListNotificacaoUseCase)
      const list = await listNotificacaoUseCase.execute({});
      return res.status(201).json(list);
    } catch (err) {
      console.error({ error: err.message })
      return res.status(400).json("Erro ao retornar a lista de notificações");
    }
  }
}

export { ListClassificacaoController };
