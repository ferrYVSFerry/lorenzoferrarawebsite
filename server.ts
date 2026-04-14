import express from "express";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/send-email", async (req, res) => {
    try {
      const { name, surname, email, projectDetails } = req.body;

      if (!name || !surname || !email || !projectDetails) {
        return res.status(400).json({ error: "Tutti i campi sono obbligatori." });
      }

      const resendApiKey = process.env.RESEND_API_KEY;
      if (!resendApiKey) {
        console.error("RESEND_API_KEY is not set.");
        return res.status(500).json({ error: "Configurazione server mancante per l'invio email." });
      }

      const resend = new Resend(resendApiKey);

      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>", // Replace with verified domain if available, or keep default testing domain
        to: ["info@lorenzoferrara.shop"],
        subject: `Nuova richiesta sito web da ${name} ${surname}`,
        html: `
          <h3>Nuova richiesta per sito web</h3>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Cognome:</strong> ${surname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h4>Dettagli del progetto:</h4>
          <p>${projectDetails.replace(/\n/g, "<br/>")}</p>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(400).json({ error: error.message });
      }

      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error("Server error:", error);
      res.status(500).json({ error: "Errore interno del server." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
