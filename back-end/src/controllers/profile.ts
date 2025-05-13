import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
export const getProfilebyUsername = async (req: Request, res: Response) => {
  const { username }: any = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { name: username } });
    if (user) {
      return res.status(200).send({
        success: true,
        user: user,
      });
    }
    return res
      .status(404)
      .send({
        success: false,
        mes: "User not found",
      })
      .end();
  } catch (error: any) {
    return res
      .status(400)
      .send({
        success: false,
        message: error.message,
      })
      .end();
  }
};
export const createProfile = async (req: Request, res: Response) => {
  //   const { userId }: any = req.params;
  const {
    name,
    about,
    avatarImage,
    socialMEdiaURL,
    backgroundImage,
    successMessage,
    userId,
  }: any = req.body;
  try {
    const response = await prisma.profile.create({
      data: {
        name,
        about,
        avatarImage,
        socialMEdiaURL,
        backgroundImage,
        successMessage,
        userId,
      },
    });
    return res
      .status(200)
      .send({
        success: true,
        mes: response,
      })
      .end();
  } catch (error: any) {
    return res
      .status(400)
      .send({
        success: false,
        message: error.message,
      })
      .end();
  }
};
