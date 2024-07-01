import { ICarImageRepository } from "@modules/car/repositories/ICarImageRepository ";
import { PrismaClient, car_image } from "@prisma/client";

class CarImageRepository implements ICarImageRepository {

  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(carId: string, image_name: string): Promise<car_image> {
    const car_image = await this.prisma.car_image.create({
      data: {
        carId,
        image_name
      }
    })

    return car_image
  }

}

export { CarImageRepository }