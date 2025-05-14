import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
export const getProfilebyUserId = async (req: Request, res: Response) => {
  const decodedUser = (req as any).user;

  if (!decodedUser || !decodedUser.id) {
    return res
      .status(400)
      .send({ success: false, message: "Invalid token or user ID" });
  }

  try {
    const profile = await prisma.profile.findUnique({
      where: { userId: decodedUser.id }, // 👈 Corrected this line
    });

    if (!profile) {
      return res
        .status(404)
        .send({ success: false, message: "Profile not found" });
    }

    return res.status(200).send({ success: true, profile });
  } catch (error: any) {
    return res.status(500).send({ success: false, message: error.message });
  }
};
export const createProfile = async (req: Request, res: Response) => {
  const decodedUser = (req as any).user;
  const {
    name,
    about,
    avatarImage,
    socialMEdiaURL,
    backgroundImage,
    successMessage,
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
        userId: decodedUser.id,
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
