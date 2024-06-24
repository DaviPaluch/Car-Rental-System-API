// ICategoriesRepository.ts

import { setor } from "@prisma/client";

// DTO => Data transfer object



interface ISetorRepository {
  list(): Promise<setor[]>
}

export { ISetorRepository }