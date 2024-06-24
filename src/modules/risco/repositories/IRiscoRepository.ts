// ICategoriesRepository.ts

import { risco } from "@prisma/client";

// DTO => Data transfer object
interface ICreateRiscoDTO {
  estrategia_resolucaoId: string;
  userId: string;
  setorId: string;
  status_riscoId: string;
  classificacaoId: string;
  titulo: string;
  desc: string;
  descImpacto: string
}

interface IRiscoRepository {
  // findByName(name: string): Promise<risco | null>
  list(): Promise<risco[]>
  create({
    estrategia_resolucaoId,
    userId,
    setorId,
    status_riscoId,
    classificacaoId,
    titulo,
    desc,
    descImpacto
  }: ICreateRiscoDTO): Promise<void>
}

export { IRiscoRepository, ICreateRiscoDTO }
