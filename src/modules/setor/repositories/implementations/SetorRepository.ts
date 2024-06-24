// CategoriesRepository.ts

import { PrismaClient, setor } from "@prisma/client";
import { ISetorRepository } from "../ISetorRepository";

class SetorRepository implements ISetorRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async list(): Promise<setor[]> {
    const setor = await this.prisma.setor.findMany();
    return setor;
  }
}

export { SetorRepository };
