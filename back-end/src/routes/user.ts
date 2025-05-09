import express from "express";

import {
  checkUsername,
  createUser,
  deleteUserbyId,
  getUsers,
  updateUserbyId,
} from "../controllers/user";

export const userRouter = express.Router();
userRouter
  .post("/", createUser as any)
  .post("/check",checkUsername as any)
  .get("/", getUsers as any)
  .put("/:userid", updateUserbyId as any)
  .delete("/:userid", deleteUserbyId as any);
