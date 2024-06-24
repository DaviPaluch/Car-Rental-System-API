// ICategoriesRepository.ts

import { avatar } from "@prisma/client";

// DTO => Data transfer object
interface ICreateAvatarDTO {
  userId: string,
  nameFile: string,
  avatarFile: string,
  typeFile: string
}

interface IAvatarRepository {
  getById(id: string): Promise<avatar>
  create({ userId, nameFile, avatarFile, typeFile }: ICreateAvatarDTO): Promise<void>
}

export { IAvatarRepository, ICreateAvatarDTO }