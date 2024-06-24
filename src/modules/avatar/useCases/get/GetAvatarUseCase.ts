// CreateCategoryUseCase.ts

import { avatar } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IAvatarRepository } from "../../repositories/IAvatarRepository";
interface IRequest { id: string }

@injectable()
class GetClassificacaoUseCase {

  constructor(
    @inject("AvatarRepository")
    private avatarRepository: IAvatarRepository) { }

  async execute({ id }: IRequest): Promise<avatar | null> {
    const getById = await this.avatarRepository.getById(id);
    return getById
  }
}

export { GetClassificacaoUseCase };
