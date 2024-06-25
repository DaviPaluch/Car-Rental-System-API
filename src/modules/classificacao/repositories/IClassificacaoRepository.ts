// ICategoriesRepository.ts

import { classificacao } from "@prisma/client";

// DTO => Data transfer object
interface ICreateClassificacaoDTO {
  label: string
}


interface IClassificacaoRepository {
  create({ label }: ICreateClassificacaoDTO): Promise<void>
  getById(id: string): Promise<classificacao | null>
  getByName(label: string): Promise<classificacao | null>
  list(): Promise<classificacao[]>
}

export { IClassificacaoRepository, ICreateClassificacaoDTO }