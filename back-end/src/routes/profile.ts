import express from "express";
import { createProfile, getProfilebyUserId } from "../controllers/profile";
import { verifytoken } from "../middleware/auth";
export const profileRouter = express.Router();
profileRouter
  .get("/view", verifytoken as any, getProfilebyUserId as any)
  .post("/create", verifytoken as any, createProfile as any);
