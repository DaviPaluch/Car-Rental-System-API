import { CarRepositoryInMemory, Car } from "@modules/car/repositories/in-memory/CarRepositoryInMemory"
import { ListCarUseCase } from "./ListCarUseCase"

let listCarUseCase: ListCarUseCase
let carRepositoryInMemory: CarRepositoryInMemory

describe("List Cars", () => {

  beforeEach(() => {
    carRepositoryInMemory = new CarRepositoryInMemory()
    listCarUseCase = new ListCarUseCase(carRepositoryInMemory)
  })

  it("should be able to list all available cars", async () => {

    const car = await carRepositoryInMemory.create({
      "name": "Camaro",
      "desc": "Old",
      "daily_rate": 150,
      "license_plate": "AAAAAA",
      "fine_amount": 100.00,
      "brand": "Ford",
      "classificacaoId": "1234"
    })


    const cars = await listCarUseCase.execute({})

    // console.log(cars)

    expect(cars).toEqual([car])
  })

  it("shout be able to list all available cars by brand", async () => {
    const car = await carRepositoryInMemory.create({
      "name": "Corsel",
      "desc": "Novo",
      "daily_rate": 150,
      "license_plate": "AAAAAA",
      "fine_amount": 100.00,
      "brand": "Ford",
      "classificacaoId": "1234"
    })

    const cars = await listCarUseCase.execute({
      brand: "Ford"
    })

    // console.log(cars)

    expect(cars).toEqual([car])
  })

  it("shout be able to list all available cars by name", async () => {
    const car = await carRepositoryInMemory.create({
      "name": "Corsel",
      "desc": "Velho",
      "daily_rate": 150,
      "license_plate": "AAAAAA",
      "fine_amount": 100.00,
      "brand": "Ford",
      "classificacaoId": "1234"
    })

    const cars = await listCarUseCase.execute({
      name: "Corsel"
    })

    console.log(cars)

    expect(cars).toEqual([car])
  })
})