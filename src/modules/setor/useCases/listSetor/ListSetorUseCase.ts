// CreateCategoryUseCase.ts

import { setor } from "@prisma/client";
import { ISetorRepository } from "../../repositories/ISetorRepository";
import { inject, injectable } from "tsyringe";

interface IRequest { }

@injectable()
class ListSetorUseCase {

  constructor(
    @inject("SetorRepository")
    private setorRepository: ISetorRepository) { }

  async execute({ }: IRequest): Promise<setor[] | null> {
    const list = await this.setorRepository.list();
    return list
  }
}

export { ListSetorUseCase };
