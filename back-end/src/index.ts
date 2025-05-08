import express, { json } from "express";
import { userRouter } from "./routes/user";

const app = express();

app.use(json());

app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(9999, () => {
  console.log("running at  http://localhost:9999/");
});
