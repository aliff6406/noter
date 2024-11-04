import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/api/home", (req: Request, res: Response) => {
  res.send({ message: "Express + TypeScript Server" });
});

app.listen(PORT, () => {
  console.log(`🚀[server]: Server is running at http://localhost:${PORT}`);
});
