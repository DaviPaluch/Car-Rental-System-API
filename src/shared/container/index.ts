import { container } from "tsyringe";
import { IClassificacaoRepository } from "../../modules/classificacao/repositories/IClassificacaoRepository";
import { ClassificacaoRepository } from "../../modules/classificacao/repositories/implementations/ClassificacaoRepository";
import { IUserRepository } from "../../modules/user/repositories/IUserRepository";
import { UserRepository } from "../../modules/user/repositories/implementations/UserRepository";
import { AvatarRepository } from "../../modules/avatar/repositories/implementations/AvatarRepository";
import { IAvatarRepository } from "../../modules/avatar/repositories/IAvatarRepository";

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