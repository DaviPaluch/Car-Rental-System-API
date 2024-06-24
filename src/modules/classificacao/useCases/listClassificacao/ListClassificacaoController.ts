//CreateCategoryController.ts

import { Request, Response } from "express";
import { ListClassificacaoUseCase } from "./ListClassificacaoUseCase";
import { container } from "tsyringe";

class ListClassificacaoController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const listClassificacaoUseCase = container.resolve(ListClassificacaoUseCase)
      const list = await listClassificacaoUseCase.execute({});
      return res.status(201).json(list);
    } catch (err) {
      console.error({ error: err.message })
      return res.status(400).json("Erro ao retornar a lista de classificações");
    }
  }
}

export { ListClassificacaoController };
