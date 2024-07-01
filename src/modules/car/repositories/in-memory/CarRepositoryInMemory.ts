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

  async create(data: ICreateCarDTO): Promise<{ id: string; name: string; desc: string; daily_rate: number; available: boolean; license_plate: string; fine_amount: Decimal; brand: string; classificacaoId: string; created_at: Date; }> {
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

    return car
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
  async findAvailable(
    classificationId?: string,
    brand?: string,
    name?: string
  ): Promise<{ id: string; name: string; desc: string; daily_rate: number; available: boolean; license_plate: string; fine_amount: Decimal; brand: string; classificacaoId: string; created_at: Date; }[]> {
    const all = this.cars
      .filter((car) => car.available === true)
      .filter((car) => {
        if (car.available === true ||
          ((brand && car.brand === brand) ||
            (classificationId && car.classificacaoId === classificationId) ||
            (name && car.name === name))
        ) {
          return car
        }
        return null
      })
    return all
  }




}

export { CarRepositoryInMemory, Car }