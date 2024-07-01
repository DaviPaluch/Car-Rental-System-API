import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCarUseCase } from "./ListAvailableCarUseCase";


class ListAvailableCarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { brand, name, classificationId } = req.body

    const listAvailableCarUseCase = container.resolve(ListCarUseCase)

    const cars = await listAvailableCarUseCase.execute({
      name: name as string,
      brand: brand as string,
      classificationId: classificationId as string
    })

    return res.json(cars)
  }
}

export { ListAvailableCarController }