import { container } from "tsyringe";
import { IClassificacaoRepository } from "../../src/modules/classificacao/repositories/IClassificacaoRepository";
import { ClassificacaoRepository } from "../../src/modules/classificacao/repositories/implementations/ClassificacaoRepository";
import { IRiscoRepository } from "../../src/modules/risco/repositories/IRiscoRepository";
import { RiscoRepository } from "../../src/modules/risco/repositories/implementations/RiscoRepository";

// CategoriesRepository
container.registerSingleton<IClassificacaoRepository>(
  "ClassificacaoRepository",
  ClassificacaoRepository
);
container.registerSingleton<IRiscoRepository>(
  "RiscoRepository",
  RiscoRepository
);