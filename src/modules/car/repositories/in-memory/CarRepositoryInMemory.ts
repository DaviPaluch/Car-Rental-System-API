import { v4 as uuidv4 } from 'uuid';
import { ICarRepository, ICreateCarDTO } from "../ICarRepository";
import { Decimal } from '@prisma/client/runtime/library';

class Car {
  id: string;
  name: string;
  desc: string;
  daily_rate: number;
  available: boolean;
  license_plate: string;
  fine_amount: Decimal;
  brand: string;
  classificacaoId: string;
  created_at: Date;

  constructor() {
    this.id = uuidv4();
    this.available = true;
    this.created_at = new Date();
  }
}

class CarRepositoryInMemory implements ICarRepository {

  cars: Car[] = [];

  async create(data: ICreateCarDTO): Promise<void> {
    const car = new Car()

    Object.assign(car, {
      name: data.name,
      desc: data.desc,
      daily_rate: data.daily_rate,
      license_plate: data.license_plate,
      fine_amount: data.fine_amount,
      brand: data.brand,
      classificacaoId: data.classificacaoId,
    });
    this.cars.push(car);
  }
  async getById(id: string): Promise<{ id: string; name: string; desc: string; daily_rate: number; available: boolean; license_plate: string; fine_amount: Decimal; brand: string; classificacaoId: string; created_at: Date; }> {
    throw new Error('Method not implemented.');
  }
  async getByLicencePlate(license_plate: string): Promise<{ id: string; name: string; desc: string; daily_rate: number; available: boolean; license_plate: string; fine_amount: Decimal; brand: string; classificacaoId: string; created_at: Date; }> {
    const car = this.cars.find((car) => car.license_plate === license_plate)
    return car
  }
  async list(): Promise<{ id: string; name: string; desc: string; daily_rate: number; available: boolean; license_plate: string; fine_amount: Decimal; brand: string; classificacaoId: string; created_at: Date; }[]> {
    throw new Error('Method not implemented.');
  }




}

export { CarRepositoryInMemory }