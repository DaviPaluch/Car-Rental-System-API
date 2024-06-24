// CreateCategoryUseCase.ts

import { classificacao } from "@prisma/client";
import { ClassificacaoRepository } from "../../repositories/implementations/ClassificacaoRepository";
import { inject, injectable } from "tsyringe";

interface IRequest { }

@injectable()
class ListClassificacaoUseCase {

  constructor(
    @inject("ClassificacaoRepository")
    private classificacaoRepository: ClassificacaoRepository) { }

  async execute({ }: IRequest): Promise<classificacao[] | null> {
    const list = await this.classificacaoRepository.list();
    return list
  }
}

export { ListClassificacaoUseCase };
