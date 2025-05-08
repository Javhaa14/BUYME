import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../utils/prisma";
import { hash } from "crypto";
export const createUser = async (req: Request, res: Response) => {
  const { email, password, name }: any = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);

    const response = await prisma.user.create({
      data: {
        email,
        name,
        password: hashed,
      },
    });
    return res
      .send({
        success: true,
        mes: response,
      })
      .end();
  } catch (error: any) {
    return res
      .send({
        success: false,
        message: error.message,
      })
      .end();
  }
};
export const getUsers = async (req: Request, res: Response) => {
  try {
    const response = await prisma.user.findMany();
    return res
      .send({
        success: true,
        mes: response,
      })
      .end();
  } catch (error: any) {
    console.log(error, "ERROOR");
    res
      .status(400)
      .send({
        success: false,
        message: error.message,
      })
      .end();
  }
};
export const updateUserbyId = async (req: Request, res: Response) => {
  const { userid } = req.params;
  const { email, password, name }: any = req.body;
  try {
    const response = await prisma.user.update({
      where: { id: parseInt(userid) },
      data: { email, password, name },
    });
    return res
      .send({
        success: true,
        mes: response,
      })
      .end();
  } catch (error: any) {
    console.log(error, "ERROOR");
    res
      .status(400)
      .send({
        success: false,
        message: error.message,
      })
      .end();
  }
};
export const deleteUserbyId = async (req: Request, res: Response) => {
  const { userid } = req.params;
  try {
    const response = await prisma.user.delete({
      where: { id: parseInt(userid) },
    });
    return res
      .send({
        success: true,
        mes: response,
      })
      .end();
  } catch (error: any) {
    console.log(error, "ERROOR");
    res
      .status(400)
      .send({
        success: false,
        message: error.message,
      })
      .end();
  }
};
