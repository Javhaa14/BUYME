import express from "express";

import {
  createUser,
  deleteUserbyId,
  getUsers,
  updateUserbyId,
} from "../controllers/user";

export const userRouter = express.Router();
userRouter
  .post("/", createUser as any)
  .get("/", getUsers as any)
  .put("/:userid", updateUserbyId as any)
  .delete("/:userid", deleteUserbyId as any);
