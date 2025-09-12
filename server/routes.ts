import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnrollmentRequestSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
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

  const httpServer = createServer(app);
  return httpServer;
}
