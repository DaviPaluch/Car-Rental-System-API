import { ICarRepository } from "@modules/car/repositories/ICarRepository";
import { car } from "@prisma/client";
import { inject, injectable } from "tsyringe";

interface IRequest {
  classificationId?: string,
  brand?: string,
  name?: string
}

@injectable()
class ListCarUseCase {

  constructor(
    @inject("CarRepository")
    private carRepository: ICarRepository) { }

  async execute({ classificationId, brand, name }: IRequest): Promise<car[]> {
    const cars = await this.carRepository.findAvailable(classificationId, brand, name)
    return cars
  }
}

export { ListCarUseCase }
