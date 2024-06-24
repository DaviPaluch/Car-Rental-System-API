// categories.routes.ts
import { Router } from "express";
import { AuthenticateUserController } from "../modules/user/useCases/authenticateUser/AuthenticateUserController";

const authRoutes = Router();
const getAuthenticateUserController = new AuthenticateUserController()

authRoutes.get("/", getAuthenticateUserController.handle)

export { authRoutes }