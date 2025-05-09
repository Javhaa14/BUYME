import { Request, Response } from "express";
import dotenv from "dotenv";
import { prisma } from "../../utils/prisma";
import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();
const secret = process.env.SECRET_KEY;

export const Login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res
        .status(404)
        .send({
          success: false,
          mes: "Email or password wrong",
        })
        .end();
    }
    const isMatch = compareSync(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .send({
          success: false,
          mes: "Email or password wrong",
        })
        .end();
    }
    const token = jwt.sign(user, secret as any, { expiresIn: "1h" });
    return res
      .cookie("token", token, {
        maxAge: 60 * 1000 * 10,
        secure: false,
      })
      .status(200)
      .send({
        success: true,
        mes: "Successfully logged in",
      })
      .end();
  } catch (error) {
    return res.send({ message: "Cannot log in" });
  }
};
