// user.routes.ts
import { Router } from "express";
import { CreateCarController } from "@modules/car/useCases/createCar/CreateCarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ListAvailableCarController } from "@modules/car/useCases/listAvailableCar/ListAvailableCarsController";

const carRoutes = Router();

const createCarController = new CreateCarController()
const listAvailableCarController = new ListAvailableCarController()


carRoutes.post("/", ensureAuthenticated, ensureAdmin, createCarController.handle)
carRoutes.get("/available", listAvailableCarController.handle)


export { carRoutes }