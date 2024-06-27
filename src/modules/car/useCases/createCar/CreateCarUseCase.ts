// CreateCategoryUseCase.ts
import "reflect-metadata"
import { inject, injectable } from "tsyringe";
import { ICarRepository } from "../../repositories/ICarRepository";
import { AppError } from "@shared/err/AppError";

interface IRequest {
  name: string;
  desc: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  classificacaoId: string;
}

@injectable()
class CreateCarUseCase {

  constructor(
    @inject("CarRepository")
    private carRepository: ICarRepository) { }

  async execute({
    name,
    desc,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    classificacaoId
  }: IRequest): Promise<void> {
    const exists = await this.carRepository.getByLicencePlate(license_plate)

    if (exists) { throw new AppError("Categoria já existente") }

    await this.carRepository.create({
      name,
      desc,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      classificacaoId
    });
  }
}

export { CreateCarUseCase };
