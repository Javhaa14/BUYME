import express from "express";
import { createProfile, getProfilebyUsername } from "../controllers/profile";
export const profileRouter = express.Router();
profileRouter
  .get("/view/:userId", getProfilebyUsername as any)
  .post("/:userId", createProfile as any);
