// categories.routes.ts
import { Router } from "express";
import { ListClassificacaoController } from "../modules/classificacao/useCases/listClassificacao/ListClassificacaoController";
import { GetClassificacaoController } from "../modules/classificacao/useCases/getClassificacao/GetClassificacaoController";
import { CreateClassificacaoController } from "../modules/classificacao/useCases/createClassificacao/CreateClassificacaoController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const classificacaoRoutes = Router();
const getClassificacaoController = new GetClassificacaoController()
const listClassificacaoController = new ListClassificacaoController()
const createClassificacaoController = new CreateClassificacaoController()

classificacaoRoutes.use(ensureAuthenticated)
classificacaoRoutes.get("/", getClassificacaoController.handle)
classificacaoRoutes.post("/", createClassificacaoController.handle)
classificacaoRoutes.get("/list", listClassificacaoController.handle)


export { classificacaoRoutes } 