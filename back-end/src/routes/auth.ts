import express from "express";
import { Login } from "../controllers/auth/sign-in.controller";
export const authRouter = express.Router();
authRouter.post("/", Login as any);
