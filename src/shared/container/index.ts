import { container } from "tsyringe";
import { IClassificacaoRepository } from "../../modules/classificacao/repositories/IClassificacaoRepository";
import { IUserRepository } from "../../modules/user/repositories/IUserRepository";
import { UserRepository } from "../../modules/user/infra/prisma/repositories/UserRepository";
import { IAvatarRepository } from "../../modules/avatar/repositories/IAvatarRepository";
import { ClassificacaoRepository } from "@modules/classificacao/infra/prisma/repositories/ClassificacaoRepository";
import { AvatarRepository } from "@modules/avatar/infra/prisma/repositories/AvatarRepository";
import { ICarRepository } from "@modules/car/repositories/ICarRepository";
import { CarRepository } from "@modules/car/infra/prisma/repositories/CarRepository";

container.registerSingleton<IClassificacaoRepository>(
  "ClassificacaoRepository",
  ClassificacaoRepository
);
container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepository
);
container.registerSingleton<IAvatarRepository>(
  "AvatarRepository",
  AvatarRepository
);
container.registerSingleton<ICarRepository>(
  "CarRepository",
  CarRepository
);