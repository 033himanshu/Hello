import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";

import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import { connectDB } from "./lib/db.js";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT;


app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
})