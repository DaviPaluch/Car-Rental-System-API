// CreateCategoryUseCase.ts

import { notificacao } from "@prisma/client";
import { NotificacaoRepository } from "../../repositories/implementations/NotificacaoRepository";
import { inject, injectable } from "tsyringe";

interface IRequest { }

@injectable()
class ListNotificacaoUseCase {

  constructor(
    @inject("NotificacaoRepository")
    private notificacaoRepository: NotificacaoRepository) { }

  async execute({ }: IRequest): Promise<notificacao[] | null> {
    const list = await this.notificacaoRepository.list();
    return list
  }
}

export { ListNotificacaoUseCase };
