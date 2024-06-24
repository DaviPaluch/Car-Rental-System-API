// ICategoriesRepository.ts

import { classificacao } from "@prisma/client";

// DTO => Data transfer object



interface IClassificacaoRepository {
  getById(id: string): Promise<classificacao>
  list(): Promise<classificacao[]>
}

export { IClassificacaoRepository }