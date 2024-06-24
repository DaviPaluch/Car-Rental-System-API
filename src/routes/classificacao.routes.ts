// categories.routes.ts
import { Router, Request, Response } from "express";
import { ListClassificacaoController } from "../modules/classificacao/useCases/listClassificacao/ListClassificacaoController";
import { GetClassificacaoController } from "../modules/classificacao/useCases/get/GetClassificacaoController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const classificacaoRoutes = Router();
const getClassificacaoController = new GetClassificacaoController()
const listClassificacaoController = new ListClassificacaoController()

//classificacaoRoutes.use(ensureAuthenticated)
classificacaoRoutes.get("/", getClassificacaoController.handle)
classificacaoRoutes.get("/list", listClassificacaoController.handle)


export { classificacaoRoutes } 