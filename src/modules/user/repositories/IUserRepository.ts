import { user } from "@prisma/client";

interface ICreateUserDTO {
  name: string;
  email: string;
  password_hash: string;
}


interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>
  findByEmail(email: string): Promise<user>
  fingById(id: string): Promise<user>
}

export { ICreateUserDTO, IUserRepository }