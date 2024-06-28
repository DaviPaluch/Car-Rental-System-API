//CreateCategoryController.ts

import { Request, Response } from "express";
import { CreateCarUseCase } from "./CreateCarUseCase";
import { container } from "tsyringe";

class CreateCarController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const {
        name,
        desc,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        classificacaoId
      } = req.body
      const createCarUseCase = container.resolve(CreateCarUseCase)
      await createCarUseCase.execute({
        name,
        desc,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        classificacaoId
      });
      return res.status(201).json("Registro criado com sucesso");
    } catch (err) {
      console.error({ error: err.message })
      return res.status(400).json("Erro ao criar registro");
    }
  }
}

export { CreateCarController };
