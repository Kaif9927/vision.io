import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Create nodemailer transporter
      const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER || 'your-email@gmail.com',
          pass: process.env.EMAIL_PASS || 'your-app-password'
        }
      });

      // Send email
      const mailOptions = {
        from: validatedData.email,
        to: 'manabmallick3345@gmail.com',
        subject: `Portfolio Contact: ${validatedData.subject}`,
        html: `
          <h2>New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        `
      };

      await transporter.sendMail(mailOptions);
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof z.ZodError ? "Invalid form data" : "Failed to send message" 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    // For now, return a placeholder response
    // In production, this would serve the actual resume file
    res.json({ 
      message: "Resume download not implemented yet",
      downloadUrl: "#"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
