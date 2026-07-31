import { Router } from "express";

import healthRoutes from "./health.routes.js";
import { clienteRoutes } from "../modules/comercial/index.js";

const router = Router();

//health
router.use("/health", healthRoutes);

//comercial
router.use("/clientes", clienteRoutes)
export default router;