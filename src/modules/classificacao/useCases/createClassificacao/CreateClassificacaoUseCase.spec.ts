import { AppError } from "../../../../err/AppError"
import { ClassificacaoRepositoryInMemory } from "../../repositories/in-memory/ClassificacaoRepositoryInMemory"
import { CreateClassificacaoUseCase } from "./CreateClassificacaoUseCase"

let createClassificacaoUseCase: CreateClassificacaoUseCase
let classificacaoRepositoryInMemory: ClassificacaoRepositoryInMemory

describe("Create Category", () => {

  beforeEach(() => {
    classificacaoRepositoryInMemory = new ClassificacaoRepositoryInMemory()
    createClassificacaoUseCase = new CreateClassificacaoUseCase(classificacaoRepositoryInMemory)
  })

  it("should be able to create a new classification", async () => {

    const label = "classificacao teste"

    await createClassificacaoUseCase.execute({ label })

    const classificacaoCreated = await classificacaoRepositoryInMemory.getByName(label)

    console.log(classificacaoCreated)

    expect(classificacaoCreated).toHaveProperty("id")
  })

  it("should not be able to create a new classification with same name", async () => {

    expect(async () => {
      const label = "classificacao teste"

      //É esperado que seja salvo
      await createClassificacaoUseCase.execute({ label })
      //É esperado que não seja criado uma classificacao com o mesmo nome
      await createClassificacaoUseCase.execute({ label })
    }).rejects.toBeInstanceOf(AppError)
  })
})