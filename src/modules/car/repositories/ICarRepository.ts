// ICategoriesRepository.ts

import { car } from "@prisma/client";

// DTO => Data transfer object
interface ICreateCarDTO {
  id: string;
  name: string;
  desc: string;
  daily_rate: number;
  available: boolean;
  license_plate: string;
  fine_amount: number;
  brand: string;
  classificacaoId: string;
  created_at: Date;
}


interface ICarRepository {
  create({ }: ICreateCarDTO): Promise<void>
  getById(id: string): Promise<car | null>
  // getByName(name: string): Promise<car[]>
  list(): Promise<car[]>
}

export { ICarRepository, ICreateCarDTO }