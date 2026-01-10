import React, { useState, useEffect } from 'react';
import { View } from '../App';

interface ScopingRequest {
  id: string;
  companyName: string;
  projectType: string;
  description: string;
  timestamp: string;
  status: 'pending' | 'in-progress' | 'completed';
}

const ScopingRequests: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  const [requests, setRequests] = useState<ScopingRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'in-progress' | 'completed'>('all');

  useEffect(() => {
    // For now, we'll use mock data. In a real app, this would fetch from an API
    const mockRequests: ScopingRequest[] = [
      {
        id: '1',
        companyName: 'TechGabon SARL',
        projectType: 'site-web',
        description: 'Nous souhaitons créer un site web moderne pour notre entreprise de technologie. Le site doit présenter nos services, notre équipe et permettre aux clients de nous contacter facilement.',
        timestamp: '2024-01-15T10:30:00Z',
        status: 'pending'
      },
      {
        id: '2',
        companyName: 'BGFIBank',
        projectType: 'application-mobile',
        description: 'Développement d\'une application mobile bancaire pour nos clients. L\'app doit permettre les opérations courantes comme consultation de solde, virements et paiement de factures.',
        timestamp: '2024-01-14T14:20:00Z',
        status: 'in-progress'
      },
      {
        id: '3',
        companyName: 'E-commerce Gabon',
        projectType: 'e-commerce',
        description: 'Plateforme e-commerce complète avec gestion des stocks, paiement en ligne et livraison. Nous vendons des produits locaux et importés.',
        timestamp: '2024-01-13T09:15:00Z',
        status: 'completed'
      }
    ];

    setTimeout(() => {
      setRequests(mockRequests);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredRequests = requests.filter(request =>
    filter === 'all' || request.status === filter
  );

  const updateStatus = (id: string, newStatus: ScopingRequest['status']) => {
    setRequests(prev =>
      prev.map(req =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'in-progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'En attente';
      case 'in-progress': return 'En cours';
      case 'completed': return 'Terminé';
      default: return status;
    }
  };

  const getProjectTypeText = (type: string) => {
    switch (type) {
      case 'site-web': return 'Site Web';
      case 'application-mobile': return 'Application Mobile';
      case 'e-commerce': return 'E-commerce';
      case 'logiciel-sur-mesure': return 'Logiciel sur Mesure';
      case 'consulting-digital': return 'Consulting Digital';
      case 'audit-securite': return 'Audit Sécurité';
      case 'autre': return 'Autre';
      default: return type;
    }
  };

  if (loading) {
    return (
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-brand-indigo/30 border-t-brand-indigo rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400">Chargement des demandes...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="max-w-4xl mb-12">
          <h1 className="text-4xl lg:text-6xl font-display font-extrabold mb-6">Demandes de <span className="text-brand-indigo">Cadrage</span></h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Gérez toutes les demandes de cadrage soumises via le formulaire du site.
          </p>
        </header>

        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all ${filter === 'all' ? 'bg-brand-indigo text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              Toutes ({requests.length})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-6 py-2 rounded-full transition-all ${filter === 'pending' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              En attente ({requests.filter(r => r.status === 'pending').length})
            </button>
            <button
              onClick={() => setFilter('in-progress')}
              className={`px-6 py-2 rounded-full transition-all ${filter === 'in-progress' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              En cours ({requests.filter(r => r.status === 'in-progress').length})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-6 py-2 rounded-full transition-all ${filter === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
            >
              Terminées ({requests.filter(r => r.status === 'completed').length})
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {filteredRequests.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Aucune demande trouvée pour ce filtre.</p>
            </div>
          ) : (
            filteredRequests.map(request => (
              <div key={request.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{request.companyName}</h3>
                        <p className="text-brand-cyan font-medium">{getProjectTypeText(request.projectType)}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(request.status)}`}>
                        {getStatusText(request.status)}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-4 leading-relaxed">{request.description}</p>

                    <p className="text-sm text-gray-500">
                      Reçu le {new Date(request.timestamp).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 lg:min-w-[200px]">
                    <select
                      value={request.status}
                      onChange={(e) => updateStatus(request.id, e.target.value as ScopingRequest['status'])}
                      aria-label={`Changer le statut de la demande pour ${request.companyName}`}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo text-white text-sm"
                    >
                      <option value="pending">En attente</option>
                      <option value="in-progress">En cours</option>
                      <option value="completed">Terminé</option>
                    </select>

                    <button className="px-4 py-2 bg-brand-indigo hover:bg-brand-indigo/80 text-white text-sm font-medium rounded-xl transition-all">
                      Contacter le client
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-20 text-center">
          <button onClick={() => onNavigate('home')} className="text-brand-cyan font-bold hover:underline">← Retour à l'accueil</button>
        </div>
      </div>
    </div>
  );
};

export default ScopingRequests;
