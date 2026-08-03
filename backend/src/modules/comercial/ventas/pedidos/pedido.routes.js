import {Router} from "express";
import pedidoController  from "./pedido.controller.js";

const router = Router()
router.post("/", pedidoController.create);
router.get("/", pedidoController.findAll);
router.get("/:id", pedidoController.findById);
router.put("/:id", pedidoController.update);
router.delete("/:id", pedidoController.delete);

export default router;