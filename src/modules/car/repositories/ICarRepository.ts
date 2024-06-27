// ICategoriesRepository.ts

import { car } from "@prisma/client";

// DTO => Data transfer object
interface ICreateCarDTO {
  name: string;
  desc: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  classificacaoId: string;
}


interface ICarRepository {
  create({ }: ICreateCarDTO): Promise<void>
  getById(id: string): Promise<car | null>
  getByLicencePlate(license_plate: string): Promise<car>
  list(): Promise<car[]>
}

export { ICarRepository, ICreateCarDTO }