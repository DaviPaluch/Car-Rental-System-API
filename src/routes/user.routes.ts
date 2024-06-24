// user.routes.ts
import { Router } from "express";
import multer from "multer";
import { CreateUserCrontroller } from "../modules/user/useCases/createUser/createUserController";
import { UpdateUserAvatarController } from "../modules/avatar/useCases/updateUserAvatar/updateUserAvatarController";
import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const userRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

console.log(uploadAvatar)

const createUserCrontroller = new CreateUserCrontroller()
const updateUserAvatarController = new UpdateUserAvatarController()

userRoutes.post("/", createUserCrontroller.handle)
userRoutes.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"), updateUserAvatarController.handle)

export { userRoutes } 