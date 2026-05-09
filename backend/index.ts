import express, { Request, Response } from "express";

const app = express();

app.get("/", (_: Request, res: Response) => {
  res.send("Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
