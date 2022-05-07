import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js";
import movimentRouter from "./routes/movimentRouter.js";
dotenv.config();

const app = express();
app.use(json());
app.use(cors());

app.use(authRouter);
app.use(movimentRouter);

app.listen(process.env.PORT);
