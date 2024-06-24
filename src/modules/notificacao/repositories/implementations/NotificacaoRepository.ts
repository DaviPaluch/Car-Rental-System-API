// CategoriesRepository.ts

import { PrismaClient, notificacao } from "@prisma/client";
import { INotificacaoRepository } from "../INotificacaoRepository";

class NotificacaoRepository implements INotificacaoRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async list(): Promise<notificacao[]> {
    const notificacao = await this.prisma.notificacao.findMany();
    return notificacao;
  }
}

export { NotificacaoRepository };
