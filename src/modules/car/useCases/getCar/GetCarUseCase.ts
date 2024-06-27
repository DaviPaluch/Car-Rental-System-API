// CreateCategoryUseCase.ts

import { classificacao } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IClassificacaoRepository } from "../../repositories/ICarRepository";
interface IRequest { id: string }

@injectable()
class GetClassificacaoUseCase {

  constructor(
    @inject("ClassificacaoRepository")
    private classificacaoRepository: IClassificacaoRepository) { }

  async execute({ id }: IRequest): Promise<classificacao | null> {
    const getById = await this.classificacaoRepository.getById(id);
    return getById
  }
}

export { GetClassificacaoUseCase };
