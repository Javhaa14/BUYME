import express from "express";

import {
  checkUsername,
  createUser,
  deleteUserbyId,
  getUserById,
  getUsers,
  updateUserbyId,
} from "../controllers/user";
import { verifytoken } from "../middleware/auth";

export const userRouter = express.Router();
userRouter
  .post("/", createUser as any)
  .post("/check", checkUsername as any)
  .get("/", getUsers as any)
  .get("/byid", verifytoken as any, getUserById as any)
  .put("/:userid", updateUserbyId as any)
  .delete("/:userid", deleteUserbyId as any);
