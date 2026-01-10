export class GeminiService {
  async sendMessage(history: { role: 'user' | 'assistant', text: string }[], message: string): Promise<string> {
    try {
      const response = await fetch('http://localhost:3002/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          history,
          message
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.response || "Je suis désolé, je n'ai pas pu générer de réponse pour le moment.";
    } catch (error) {
      console.error("Chat API Error:", error);
      return "Une erreur est survenue lors de la communication avec mon intelligence centrale. Veuillez réessayer.";
    }
  }
}

export const gemini = new GeminiService();
