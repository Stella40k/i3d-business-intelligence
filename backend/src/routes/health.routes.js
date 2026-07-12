import {Router} from "express";
import { healthCheck } from "../controllers/health/index.js";

const router = Router();

router.get("/", healthCheck);

export default router;