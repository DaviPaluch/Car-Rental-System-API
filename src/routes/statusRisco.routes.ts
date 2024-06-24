// categories.routes.ts
import { Router, Request, Response } from "express";
import { ListStatusRiscoController } from "../modules/statusRisco/useCases/listStatusRisco/ListStatusRiscoController"; 
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const statusRiscoRoutes = Router();
const listStatusRiscoController = new ListStatusRiscoController()

//classificacaoRoutes.use(ensureAuthenticated)

statusRiscoRoutes.get("/list", listStatusRiscoController.handle)


export { statusRiscoRoutes } 