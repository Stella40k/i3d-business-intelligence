import { Router } from "express";

import healthRoutes from "./health.routes.js";
import { 
    clienteRoutes,
    pedidoRoutes,

} from "../modules/comercial/index.js";

const router = Router();

//health
router.use("/health", healthRoutes);

//comercial
router.use("/clientes", clienteRoutes)
router.use("/pedidos", pedidoRoutes);

export default router;