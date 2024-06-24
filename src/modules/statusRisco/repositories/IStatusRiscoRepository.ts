// ICategoriesRepository.ts

import { status_risco } from "@prisma/client";

// DTO => Data transfer object



interface IStatusRiscoRepository {
  list(): Promise<status_risco[]>
}

export { IStatusRiscoRepository }