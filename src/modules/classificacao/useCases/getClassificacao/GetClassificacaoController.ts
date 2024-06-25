//CreateCategoryController.ts

import { Request, Response } from "express";
import { GetClassificacaoUseCase } from "./GetClassificacaoUseCase";
import { container } from "tsyringe";

class GetClassificacaoController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.body
      const listClassificacaoUseCase = container.resolve(GetClassificacaoUseCase)
      const list = await listClassificacaoUseCase.execute({ id });
      return res.status(201).json(list);
    } catch (err) {
      console.error({ error: err.message })
      return res.status(400).json("Erro ao retornar a lista de classificações");
    }
  }
}

export { GetClassificacaoController };
