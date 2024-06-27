//CreateCategoryController.ts

import { Request, Response } from "express";
import { CreateClassificacaoUseCase } from "./CreateCarUseCase";
import { container } from "tsyringe";

class CreateClassificacaoController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { label } = req.body
      const createClassificacaoUseCase = container.resolve(CreateClassificacaoUseCase)
      await createClassificacaoUseCase.execute({ label });
      return res.status(201).json("Classificação criada com sucesso");
    } catch (err) {
      console.error({ error: err.message })
      return res.status(400).json("Erro ao retornar a lista de classificações");
    }
  }
}

export { CreateClassificacaoController };
