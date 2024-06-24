// categories.routes.ts
import { Router, Request, Response } from "express";
import { ListSetorController } from "../modules/setor/useCases/listSetor/ListSetorController"; 
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const setorRoutes = Router();

const listSetorController = new ListSetorController()

//classificacaoRoutes.use(ensureAuthenticated)

setorRoutes.get("/list", listSetorController.handle)


export { setorRoutes }