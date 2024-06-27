import { inject, injectable } from "tsyringe"
import { IAvatarRepository } from "@modules/avatar/repositories/IAvatarRepository"

interface IRequest {
  userId: string,
  nameFile: string,
  avatarFile: string,
  typeFile: string
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("AvatarRepository")
    private avatarRepository: IAvatarRepository
  ) {

  }
  async execute({ userId, nameFile, avatarFile, typeFile }: IRequest): Promise<void> {
    const user = await this.avatarRepository.create({ userId, nameFile, avatarFile, typeFile })
  }
}
export { UpdateUserAvatarUseCase }