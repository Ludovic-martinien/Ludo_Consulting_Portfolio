
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  tech: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}
