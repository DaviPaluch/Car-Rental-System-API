// categories.routes.ts
import { Router } from "express";
import { CreateRiscoController } from "../modules/risco/useCases/createRisco/CreateRiscoController";


const riscoRoutes = Router();
const getRiscoController = new CreateRiscoController()


riscoRoutes.post("/", getRiscoController.handle)



export { riscoRoutes } 