// CategoriesRepository.ts

import { PrismaClient, risco } from "@prisma/client";
import { IRiscoRepository, ICreateRiscoDTO } from "../IRiscoRepository";

class RiscoRepository implements IRiscoRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({
    estrategia_resolucaoId,
    userId,
    setorId,
    status_riscoId,
    classificacaoId,
    titulo,
    desc,
    descImpacto
  }: ICreateRiscoDTO): Promise<void> {
    const impacto = await this.prisma.impacto.create({ data: { desc: descImpacto, classificacaoId: classificacaoId } })
    await this.prisma.risco.create({
      data: {
        impactoId: impacto.id,
        estrategia_resolucaoId: estrategia_resolucaoId,
        userId: userId,
        setorId: setorId,
        status_riscoId: status_riscoId,
        titulo: titulo,
        desc: desc,
      }
    });
  }

  async list(): Promise<risco[]> {
    const categories = await this.prisma.risco.findMany();
    return categories;
  }

  // async findByName(name: string): Promise<risco | null> {
  //   const category = await this.prisma.risco.findFirst({
  //     where: { nome: name }
  //   });
  //   return category;
  // }
}

export { RiscoRepository };
