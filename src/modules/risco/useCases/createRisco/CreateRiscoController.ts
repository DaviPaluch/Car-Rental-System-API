//CreateCategoryController.ts

import { Request, Response } from "express";
import { CreateRiscoUseCase } from "./CreateRiscoUseCase";
import { container } from "tsyringe";

class CreateRiscoController {

  async handle(req: Request, res: Response): Promise<Response> {
    const {
      estrategia_resolucaoId,
      userId,
      setorId,
      status_riscoId,
      classificacaoId,
      titulo,
      desc,
      descImpacto
    } = req.body;

    try {
      const createCategoryUseCase = container.resolve(CreateRiscoUseCase)
      await createCategoryUseCase.execute({
        estrategia_resolucaoId,
        userId,
        setorId,
        status_riscoId,
        classificacaoId,
        titulo,
        desc,
        descImpacto
      });

      return res.status(201).json({status:"201"});
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { CreateRiscoController };
