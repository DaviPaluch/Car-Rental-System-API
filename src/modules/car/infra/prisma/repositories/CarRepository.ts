// CategoriesRepository.ts

import { ICreateCarDTO, ICarRepository } from "@modules/car/repositories/ICarRepository";
import { PrismaClient, car } from "@prisma/client";



import { AppError } from "@shared/err/AppError";

class CarRepository implements ICarRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({
    brand, classificacaoId, daily_rate, desc, fine_amount, license_plate, name
  }: ICreateCarDTO): Promise<car> {

    const exists = await this.prisma.car.findUnique({ where: { license_plate } })

    if (exists) { throw new AppError("Carro já existente.") }

    const car = await this.prisma.car.create({
      data: {
        brand,
        daily_rate,
        desc,
        fine_amount,
        license_plate,
        name,
        classificacaoId,
      }
    })
    return car
  }

  async getById(id): Promise<car> {
    const car = await this.prisma.car.findUnique({ where: { id } });
    return car;
  }

  async getByLicencePlate(license_plate: string): Promise<car> {
    const car = await this.prisma.car.findUnique({ where: { license_plate } });
    return car;
  }

  async list(): Promise<car[]> {
    const classificacao = await this.prisma.car.findMany();
    return classificacao;
  }

  async findAvailable(classificationId?: string, brand?: string, name?: string): Promise<car[]> {
    const conditions: any = [];
    conditions.push({ available: true })

    if (name) {
      conditions.push({ name });
    }

    if (brand) {
      conditions.push({ brand });
    }

    if (classificationId) {
      conditions.push({
        classification: {
          id: classificationId
        }
      });
    }

    return await this.prisma.car.findMany({
      where: {
        AND: conditions,
      },
      include: {
        classificacao: true,
      },
    });
  }

}


export { CarRepository };
