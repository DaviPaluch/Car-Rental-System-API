import { Router } from "express";
import { classificacaoRoutes } from '../routes/classificacao.routes'
import { userRoutes } from "./user.routes";
import { authRoutes } from "./authenticate.routes";
import { carRoutes } from "./cars.routes";

const router = Router()

router.use("/classificacao", classificacaoRoutes)
router.use("/user", userRoutes)
router.use("/auth", authRoutes)
router.use("/car", carRoutes)

export { router }