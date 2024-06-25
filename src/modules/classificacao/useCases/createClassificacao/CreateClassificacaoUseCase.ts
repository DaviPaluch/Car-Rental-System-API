// CreateCategoryUseCase.ts
import "reflect-metadata"
import { inject, injectable } from "tsyringe";
import { IClassificacaoRepository } from "../../repositories/IClassificacaoRepository";
import { AppError } from "../../../../err/AppError";

interface IRequest { label: string }

@injectable()
class CreateClassificacaoUseCase {

  constructor(
    @inject("ClassificacaoRepository")
    private classificacaoRepository: IClassificacaoRepository) { }

  async execute({ label }: IRequest): Promise<void> {
    const exists = await this.classificacaoRepository.getByName(label)
    if (exists) { throw new AppError("Categoria já existente") }
    await this.classificacaoRepository.create({ label });
  }
}

export { CreateClassificacaoUseCase };
