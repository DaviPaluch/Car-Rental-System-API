import { car_image } from "@prisma/client"

interface ICarImageRepository {
  create(carId: string, image_name: string): Promise<car_image>
}

export { ICarImageRepository }