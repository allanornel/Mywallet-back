import { Router } from "express";
import {
  getMoviment,
  postMoviment,
} from "../controllers/movimentController.js";
import { validaHeader } from "../middlewares/userMiddleware.js";

const movimentRouter = Router();

movimentRouter.post("/moviment", validaHeader, postMoviment);
movimentRouter.get("/moviment", validaHeader, getMoviment);

export default movimentRouter;
