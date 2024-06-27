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

    await createCarUseCase.execute({ label })

    const classificacaoCreated = await carRepositoryInMemory.getByName(label)

    console.log(classificacaoCreated)

    expect(classificacaoCreated).toHaveProperty("id")
  })

  it("should not be able to create a new car with same name", async () => {

    expect(async () => {
      const label = "classificacao teste"

      //É esperado que seja salvo
      await createCarUseCase.execute({ label })
      //É esperado que não seja criado uma classificacao com o mesmo nome
      await createCarUseCase.execute({ label })
    }).rejects.toBeInstanceOf(AppError)
  })
})