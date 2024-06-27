// CreateCategoryUseCase.ts
import "reflect-metadata"
import { inject, injectable } from "tsyringe";
import { ICarRepository } from "../../repositories/ICarRepository";
import { AppError } from "@shared/err/AppError";

interface IRequest { label: string }

@injectable()
class CreateCarUseCase {

  constructor(
    @inject("ClassificacaoRepository")
    private classificacaoRepository: ICarRepository) { }

  async execute({ label }: IRequest): Promise<void> {
    const exists = await this.classificacaoRepository.getByName(label)
    if (exists) { throw new AppError("Categoria já existente") }
    await this.classificacaoRepository.create({ label });
  }
}

export { CreateCarUseCase };
