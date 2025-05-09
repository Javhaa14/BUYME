import express, { json } from "express";
import { userRouter } from "./routes/user";
import { authRouter } from "./routes/auth";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(json());
app.use(cors());
app.use(cookieParser());
app.use("/user", userRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(9999, () => {
  console.log("running at  http://localhost:9999/");
});
