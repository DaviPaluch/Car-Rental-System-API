import { ICarRepository } from "@modules/car/repositories/ICarRepository";
import { car } from "@prisma/client";

interface IRequest {
  classificationId?: string,
  brand?: string,
  name?: string
}

class ListCarUseCase {

  constructor(private carRepository: ICarRepository) { }

  async execute({ classificationId, brand, name }: IRequest): Promise<car[]> {
    const cars = this.carRepository.findAvailable()
    return cars
  }
}

export { ListCarUseCase }
