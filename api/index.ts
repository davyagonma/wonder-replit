import express from "express";
import { VercelRequest, VercelResponse } from '@vercel/node';
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// 👉 importe tes routes ici

// Enrollment requests
  app.post("/api/enrollment", async (req, res) => {
    try {
      const validatedData = insertEnrollmentRequestSchema.parse(req.body);
      const enrollmentRequest = await storage.createEnrollmentRequest(validatedData);
      res.json({ success: true, data: enrollmentRequest });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: "Données invalides", details: error.errors });
      } else {
        res.status(500).json({ success: false, error: "Erreur serveur" });
      }
    }
  });

  app.get("/api/enrollment", async (req, res) => {
    try {
      const requests = await storage.getEnrollmentRequests();
      res.json({ success: true, data: requests });
    } catch (error) {
      res.status(500).json({ success: false, error: "Erreur serveur" });
    }
  });

  // Contact messages
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const contactMessage = await storage.createContactMessage(validatedData);
      res.json({ success: true, data: contactMessage });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, error: "Données invalides", details: error.errors });
      } else {
        res.status(500).json({ success: false, error: "Erreur serveur" });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ success: true, data: messages });
    } catch (error) {
      res.status(500).json({ success: false, error: "Erreur serveur" });
    }
  });

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express on Vercel 🚀" });
});

// Export en handler Vercel
export default (req: VercelRequest, res: VercelResponse) => {
  app(req as any, res as any);
};
