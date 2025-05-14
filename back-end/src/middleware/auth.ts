import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const secret_key: string = process.env.SECRET_KEY as string;
interface CustomPayload extends jwt.JwtPayload {
  userId: string;
  email: string;
}
export const verifytoken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, secret_key) as CustomPayload;
    console.log("Decoded JWT:", decoded); // 👈 Add this
    // 👇 Add the user to a custom property
    (req as any).user = {
      id: decoded.userId,
      email: decoded.email,
    };

    next();
  } catch (error: any) {
    console.error("JWT error:", error.message);
    res.status(403).send({ message: "Invalid or expired token" });
  }
};

// export const resettoken = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.status(403).send({ message: "Forbidden: No token provided" });
//   }

//   try {
//     const decoded = jwt.verify(token, secret_key);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     console.error("JWT error:", error.message);
//     res.status(403).send({ message: "Invalid or expired token" });
//   }
// };
