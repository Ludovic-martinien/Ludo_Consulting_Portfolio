import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import nodemailer from 'nodemailer';

const app = express();
const port = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini
const apiKey = process.env.API_KEY;
if (!apiKey) {
  console.error('API_KEY not found in environment variables');
  process.exit(1);
}
const genAI = new GoogleGenAI({ apiKey });
console.log('API_KEY loaded:', apiKey.substring(0, 10) + '...');
console.log('Gemini API initialized successfully');

// Email transporter
const emailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// AI Context
const AI_CONTEXT = `Tu es Ludo Assistant, l'intelligence artificielle de Ludo_Consulting, une entreprise spécialisée dans le développement web, mobile et les services informatiques au Gabon.

RÈGLES IMPORTANTES :
- Réponds toujours en français
- Sois professionnel, amical et utile
- Spécialise-toi dans les domaines suivants :
  * Développement web (React, Next.js, Node.js)
  * Applications mobiles (React Native, Flutter)
  * Intelligence artificielle et automatisation
  * Cybersécurité et protection des données
  * Formation en programmation
  * Services informatiques (maintenance, installation)
- Si la question n'est pas liée à nos services, redirige poliment vers nos domaines d'expertise
- Propose toujours des solutions concrètes et réalisables
- Mentionne nos tarifs quand approprié (sites web: 150k-300k XAF, apps mobiles: 500k-1M XAF, etc.)

SERVICES DE LUDO_CONSULTING :
- Création de sites web modernes et responsives
- Développement d'applications mobiles
- Formation en développement web et mobile
- Maintenance informatique et réparation
- Installation de logiciels et systèmes d'exploitation
- Création de logos et cartes de visite
- Rédaction de CV et lettres de motivation
- Services de composition musicale personnalisée
- Et bien d'autres services informatiques

Ton objectif : Aider les clients gabonais à digitaliser leur business et améliorer leur présence en ligne.`;

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { history = [], message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Modèle Gemini STABLE
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash'
    });

    // Construction correcte du contenu
    const contents = [
      {
        role: 'user',
        parts: [{ text: AI_CONTEXT }]
      },
      ...history.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      })),
      {
        role: 'user',
        parts: [{ text: message }]
      }
    ];

    const result = await model.generateContent({
      contents
    });

    const response = result.response.text();

    res.json({ response });

  } catch (error) {
    console.error('Gemini API Error:', error);
    res.status(500).json({
      error: "Une erreur est survenue lors de la communication avec mon intelligence centrale. Veuillez réessayer."
    });
  }
});

// Scoping request endpoint
app.post('/api/scoping-request', async (req, res) => {
  try {
    const { companyName, projectType, description } = req.body;

    if (!companyName || !projectType || !description) {
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'ludo.consulting3@gmail.com',
      subject: `Nouvelle demande de cadrage - ${companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">Nouvelle demande de cadrage</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Informations de l'entreprise</h3>
            <p><strong>Nom de l'entreprise:</strong> ${companyName}</p>
            <p><strong>Type de projet:</strong> ${projectType}</p>
            <p><strong>Description:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #6366f1;">${description.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            Cette demande a été soumise via le formulaire de cadrage du site web Ludo_Consulting.
          </p>
        </div>
      `
    };

    await emailTransporter.sendMail(mailOptions);

    res.json({ message: 'Demande de cadrage envoyée avec succès' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi de la demande' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
