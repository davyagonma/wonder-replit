import express from "express";
import { VercelRequest, VercelResponse } from '@vercel/node';

const app = express();

// 👉 importe tes routes ici
// import routes from "./server/routes";
// app.use("/api", routes);

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express on Vercel 🚀" });
});

// Export en handler Vercel
export default (req: VercelRequest, res: VercelResponse) => {
  app(req as any, res as any);
};
