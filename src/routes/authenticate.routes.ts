// categories.routes.ts
import { Router } from "express";
import { AuthenticateUserController } from "../modules/user/useCases/authenticateUser/AuthenticateUserController";


const authRoutes = Router();
const getAuthenticateUserController = new AuthenticateUserController()


authRoutes.patch("/", getAuthenticateUserController.handle)



export { authRoutes } 