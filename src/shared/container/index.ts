import { container } from "tsyringe";
import { IClassificacaoRepository } from "../../modules/classificacao/repositories/IClassificacaoRepository";
import { IUserRepository } from "../../modules/user/repositories/IUserRepository";
import { UserRepository } from "../../modules/user/infra/prisma/repositories/UserRepository";
import { IAvatarRepository } from "../../modules/avatar/repositories/IAvatarRepository";
import { ClassificacaoRepository } from "@modules/classificacao/infra/prisma/repositories/ClassificacaoRepository";
import { AvatarRepository } from "@modules/avatar/infra/prisma/repositories/AvatarRepository";

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