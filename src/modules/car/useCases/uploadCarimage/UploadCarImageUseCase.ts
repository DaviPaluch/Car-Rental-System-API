import { ICarImageRepository } from "@modules/car/repositories/ICarImageRepository ";
import { inject, injectable } from "tsyringe";

interface IRequest {
  carId: string,
  images_name: string[]
}

@injectable()
class UploadCarImageUseCase {
  constructor(
    @inject("CarImageRepository")
    private carsImagesRepository: ICarImageRepository
  ) { }

  async execute({ carId, images_name }: IRequest): Promise<void> {
    images_name.map(async (image) => {
      await this.carsImagesRepository.create(carId, image)
    })
  }
}

export { UploadCarImageUseCase }