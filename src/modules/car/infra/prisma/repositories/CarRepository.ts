// CategoriesRepository.ts

import { ICreateCarDTO, ICarRepository } from "@modules/car/repositories/ICarRepository";
import { PrismaClient, car } from "@prisma/client";



import { AppError } from "@shared/err/AppError";

class CarRepository implements ICarRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({ label }: ICreateCarDTO): Promise<void> {
    const exists = await this.prisma.classificacao.findUnique({ where: { label } })
    if (exists) { throw new AppError("Carro já existente.") }
    // await this.prisma.car.create({ data:{}})
    return null
  }

  async getById(id): Promise<car> {
    const classificacao = await this.prisma.car.findUnique({ where: { id } });
    return classificacao;
  }

  // async getByName(name: string): Promise<car> {
  //   const car = await this.prisma.car.findMany({ where: {  } });
  //   return car;
  // }

  async list(): Promise<car[]> {
    const classificacao = await this.prisma.car.findMany();
    return classificacao;
  }
}

export { CarRepository };
