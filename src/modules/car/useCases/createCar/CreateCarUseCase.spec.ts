import { CarRepositoryInMemory } from "@modules/car/repositories/in-memory/CarRepositoryInMemory"
import { CreateCarUseCase } from "./CreateCarUseCase"
import { AppError } from "@shared/err/AppError"

let createCarUseCase: CreateCarUseCase
let carRepositoryInMemory: CarRepositoryInMemory

describe("Create Car", () => {

  beforeEach(() => {
    carRepositoryInMemory = new CarRepositoryInMemory()
    createCarUseCase = new CreateCarUseCase(carRepositoryInMemory)
  })

  it("should be able to create a new car", async () => {

    const label = "classificacao teste"

    await createCarUseCase.execute({
      name: "Corsel",
      desc: "Acabado",
      daily_rate: 200000000,
      license_plate: "AAA-999",
      brand: "Ford",
      classificacaoId: "10",
      fine_amount: 60
    })

    const classificacaoCreated = await carRepositoryInMemory.getByLicencePlate("AAA-999")

    console.log(classificacaoCreated)

    expect(classificacaoCreated).toHaveProperty("id")
  })

  it("should not be able to create a car with exists license plate", () => {
    expect(async () => {

    })
  })
})