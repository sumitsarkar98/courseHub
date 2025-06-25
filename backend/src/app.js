import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";

import cors from "cors";

const app = express();

// setup cors
app.use(
  cors({
    origin: "http://localhost:5173", // or "*" for all origins (less secure)
    credentials: true,
  })
);

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse cookies
app.use(cookieParser());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);

export default app;
