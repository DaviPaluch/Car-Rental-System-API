// CategoriesRepository.ts

import { PrismaClient, setor } from "@prisma/client";
import { IStatusRiscoRepository } from "../IStatusRiscoRepository";

class StatusRiscoRepository implements IStatusRiscoRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async list(): Promise<setor[]> {
    const setor = await this.prisma.status_risco.findMany();
    return setor;
  }
}

export { StatusRiscoRepository };
