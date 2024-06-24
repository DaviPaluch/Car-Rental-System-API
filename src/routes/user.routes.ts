// categories.routes.ts
import { Router } from "express";
import { CreateUserCrontroller } from "../modules/user/useCases/createUser/createUserController";


const userRoutes = Router();
const createUserCrontroller = new CreateUserCrontroller()


userRoutes.post("/", createUserCrontroller.handle)



export { userRoutes } 