// CreateCategoryUseCase.ts

import { status_risco } from "@prisma/client";
import { IStatusRiscoRepository } from "../../repositories/IStatusRiscoRepository";
import { inject, injectable } from "tsyringe";

interface IRequest { }

@injectable()
class ListStatusRiscoUseCase {

  constructor(
    @inject("StatusRiscoRepository")
    private statusRiscoRepository: IStatusRiscoRepository) { }

  async execute({ }: IRequest): Promise<status_risco[] | null> {
    const list = await this.statusRiscoRepository.list();
    return list
  }
}

export { ListStatusRiscoUseCase };
