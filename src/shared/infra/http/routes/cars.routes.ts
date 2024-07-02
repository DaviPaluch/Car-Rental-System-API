// user.routes.ts
import { Router } from "express";
import multer from "multer";
import { CreateCarController } from "@modules/car/useCases/createCar/CreateCarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import uploadConfig from "@config/upload";
import { ListAvailableCarController } from "@modules/car/useCases/listAvailableCar/ListAvailableCarsController";
import { UploadCarImageController } from "@modules/car/useCases/uploadCarImage/UploadCarImageController";

const carRoutes = Router();

const upload = multer(uploadConfig.upload("./tmp/cars"))

const createCarController = new CreateCarController()
const listAvailableCarController = new ListAvailableCarController()
const uploadCarImageController = new UploadCarImageController()


carRoutes.post("/", ensureAuthenticated, ensureAdmin, createCarController.handle)
carRoutes.post("/images/:carId", ensureAuthenticated, ensureAdmin, upload.array("images"), uploadCarImageController.handle)
carRoutes.get("/available", listAvailableCarController.handle)

export { carRoutes }