// CategoriesRepository.ts

import { PrismaClient, classificacao } from "@prisma/client";
import { IClassificacaoRepository } from "../IClassificacaoRepository";

class ClassificacaoRepository implements IClassificacaoRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async getById(id): Promise<{ id: string; label: string; }> {
    const classificacao = await this.prisma.classificacao.findUnique({ where: { id } });
    return classificacao;
  }

  async list(): Promise<classificacao[]> {
    const classificacao = await this.prisma.classificacao.findMany();
    return classificacao;
  }
}

export { ClassificacaoRepository };
