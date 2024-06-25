// CategoriesRepository.ts

import { PrismaClient, classificacao } from "@prisma/client";
import { IClassificacaoRepository, ICreateClassificacaoDTO, } from "../IClassificacaoRepository";
import { AppError } from "../../../../err/AppError";

class ClassificacaoRepository implements IClassificacaoRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({ label }: ICreateClassificacaoDTO): Promise<void> {
    const exists = await this.prisma.classificacao.findUnique({ where: { label } })
    if (exists) { throw new AppError("Classificacao já existente.") }
    await this.prisma.classificacao.create({ data: { label } })
    return null
  }

  async getById(id): Promise<{ id: string; label: string; }> {
    const classificacao = await this.prisma.classificacao.findUnique({ where: { id } });
    return classificacao;
  }

  async getByName(label: string): Promise<{ id: string; label: string; }> {
    const classificacao = await this.prisma.classificacao.findUnique({ where: { label } });
    return classificacao;
  }

  async list(): Promise<classificacao[]> {
    const classificacao = await this.prisma.classificacao.findMany();
    return classificacao;
  }
}

export { ClassificacaoRepository };
