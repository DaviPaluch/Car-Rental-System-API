// ICategoriesRepository.ts

import { notificacao } from "@prisma/client";

// DTO => Data transfer object



interface INotificacaoRepository {
  list(id: string): Promise<notificacao[]>
}

export { INotificacaoRepository }