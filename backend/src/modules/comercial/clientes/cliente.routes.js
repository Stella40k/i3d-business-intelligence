import {Router} from "express";
import clienteController from "./cliente.controller.js";

const router = Router();

router.post("/", clienteController.create);
router.get("/", clienteController.findAll);
router.get("/:id", clienteController.findById);

export default router;