// CategoriesRepository.ts

import { PrismaClient, avatar } from "@prisma/client";
import { IAvatarRepository, ICreateAvatarDTO } from "../IAvatarRepository";

class AvatarRepository implements IAvatarRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async getById(userId): Promise<avatar> {
    const avatar = await this.prisma.avatar.findUnique({ where: { userId } });
    return avatar;
  }

  async create({ userId, nameFile, avatarFile, typeFile }: ICreateAvatarDTO): Promise<void> {
    await this.prisma.avatar.upsert({
      where: {
        userId: userId, // Assumindo que userId é único na tabela avatar
      },
      update: {
        nameFile: nameFile,
        avatarFile: avatarFile,
        typeFile: typeFile,
      },
      create: {
        userId: userId,
        nameFile: nameFile,
        avatarFile: avatarFile,
        typeFile: typeFile,
      },
    });
  }
}
export { AvatarRepository };
