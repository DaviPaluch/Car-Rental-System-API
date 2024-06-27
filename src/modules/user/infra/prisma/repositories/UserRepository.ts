import { PrismaClient, user } from "@prisma/client";
import { ICreateUserDTO, IUserRepository, } from "../../../repositories/IUserRepository";

class UserRepository implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({ name, email, password_hash }: ICreateUserDTO): Promise<void> {
    await this.prisma.user.create({
      data: {
        name,
        email,
        password_hash
      }
    })
    return null
  }

  async findByEmail(email: string): Promise<user> {
    const user = await this.prisma.user.findUnique({ where: { email } })
    return user
  }

  async fingById(id: string): Promise<user> {
    const user = await this.prisma.user.findUnique({ where: { id } })
    return user
  }

}

export { UserRepository }