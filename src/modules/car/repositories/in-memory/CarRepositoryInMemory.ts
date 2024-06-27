import { v4 as uuidv4 } from 'uuid';
import { ICarRepository, ICreateCarDTO } from "../ICarRepository";
import { car } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

interface Car {
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

class CarRepositoryInMemory implements ICarRepository {

  car: Car[] = [];

  create({ }: ICreateCarDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<{ id: string; name: string; desc: string; daily_rate: number; available: boolean; license_plate: string; fine_amount: Decimal; brand: string; classificacaoId: string; created_at: Date; }> {
    throw new Error('Method not implemented.');
  }
  getByName(label: string): Promise<{ id: string; name: string; desc: string; daily_rate: number; available: boolean; license_plate: string; fine_amount: Decimal; brand: string; classificacaoId: string; created_at: Date; }> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<{ id: string; name: string; desc: string; daily_rate: number; available: boolean; license_plate: string; fine_amount: Decimal; brand: string; classificacaoId: string; created_at: Date; }[]> {
    throw new Error('Method not implemented.');
  }




}

export { CarRepositoryInMemory }