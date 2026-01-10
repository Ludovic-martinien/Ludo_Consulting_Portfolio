
import React, { useState, useRef, useEffect } from 'react';
import { View } from '../App';
import { gemini } from '../services/geminiService';

const DiscussionHub: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  const [messages, setMessages] = useState<any[]>([
    { role: 'assistant', text: "Bienvenue dans le Hub de Conception Ludo_Consulting. Je suis votre architecte technique IA. Décrivez-moi votre idée de projet, et nous allons ensemble définir son architecture, sa stack technique et sa roadmap." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsTyping(true);

    const history = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text }]
    }));

    const systemPrompt = "Tu es un architecte technique senior chez Ludo_Consulting. Ton but est de brainstormer avec le client sur son projet. Propose des technologies modernes (React, Node, IA, Cloud), aide à définir le MVP et pose des questions pertinentes pour affiner le besoin.";
    
    // Custom context for Gemini
    const response = await gemini.sendMessage(history as any, userText);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
  };

  return (
    <div className="pt-32 pb-10 min-h-screen bg-brand-dark flex flex-col">
      <div className="container mx-auto px-6 flex-1 flex flex-col">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-display font-extrabold mb-2">Hub de <span className="text-brand-indigo">Conception</span></h1>
            <p className="text-gray-400 text-sm">Session interactive de brainstorming technologique.</p>
          </div>
          <button onClick={() => onNavigate('home')} className="text-xs text-gray-500 hover:text-white transition-colors">Quitter la session</button>
        </header>

        <div className="flex-1 glass-card rounded-[40px] border border-white/5 overflow-hidden flex flex-col mb-6 min-h-[500px]">
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-6 rounded-3xl ${
                  m.role === 'user' 
                  ? 'bg-brand-indigo text-white rounded-tr-none' 
                  : 'bg-white/5 text-gray-200 rounded-tl-none border border-white/5'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-6 py-4 rounded-3xl rounded-tl-none flex gap-2">
                  <div className="w-2 h-2 bg-brand-cyan rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-brand-cyan rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-brand-cyan rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-6 border-t border-white/5 bg-brand-dark/30">
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Ex: Je veux créer une application de livraison avec IA prédictive..."
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-cyan transition-all"
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              <button 
                disabled={isTyping || !input.trim()}
                className="bg-brand-cyan text-brand-dark font-bold px-8 rounded-2xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiscussionHub;
