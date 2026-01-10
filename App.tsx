
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Weather from './components/Weather';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

// Nouvelles Pages
import VisionMission from './pages/VisionMission';
import Expertises from './pages/Expertises';
import StartProject from './pages/StartProject';
import Blog from './pages/Blog';
import Catalogue from './pages/Catalogue';
import ServiceDetail from './pages/ServiceDetail';
import ProjectDetail from './pages/ProjectDetail';
import ROICalculator from './pages/ROICalculator';
import AdminDashboard from './pages/AdminDashboard';
import DiscussionHub from './pages/DiscussionHub';
import AuditTool from './pages/AuditTool';
import ScopingRequests from './pages/ScopingRequests';

export type View = 'home' | 'vision' | 'expertises' | 'start' | 'blog' | 'catalogue' | 'service-detail' | 'project-detail' | 'roi-calculator' | 'admin' | 'discussion-hub' | 'audit-tool' | 'scoping-requests';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedId]);

  const handleNavigateToService = (id: string) => {
    setSelectedId(id);
    setCurrentView('service-detail');
  };

  const handleNavigateToProject = (id: string) => {
    setSelectedId(id);
    setCurrentView('project-detail');
  };

  const renderView = () => {
    switch (currentView) {
      case 'vision': return <VisionMission onNavigate={setCurrentView} />;
      case 'expertises': return <Expertises onNavigate={setCurrentView} />;
      case 'start': return <StartProject onNavigate={setCurrentView} />;
      case 'blog': return <Blog onNavigate={setCurrentView} />;
      case 'catalogue': return <Catalogue onNavigate={setCurrentView} />;
      case 'roi-calculator': return <ROICalculator onNavigate={setCurrentView} />;
      case 'admin': return <AdminDashboard onNavigate={setCurrentView} />;
      case 'discussion-hub': return <DiscussionHub onNavigate={setCurrentView} />;
      case 'audit-tool': return <AuditTool onNavigate={setCurrentView} />;
      case 'scoping-requests': return <ScopingRequests onNavigate={setCurrentView} />;
      case 'service-detail': return <ServiceDetail id={selectedId!} onNavigate={setCurrentView} />;
      case 'project-detail': return <ProjectDetail id={selectedId!} onNavigate={setCurrentView} />;
      default: return (
        <>
          <Hero onNavigate={setCurrentView} />
          <Weather />
          <About onNavigate={setCurrentView} />
          <Services onServiceClick={handleNavigateToService} />
          <Portfolio onProjectClick={handleNavigateToProject} />
          <Team />
          <Testimonials />
          <Contact />
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />
      <main>
        {renderView()}
      </main>
      <Footer onNavigate={setCurrentView} />
      <ChatBot />
    </div>
  );
}

export default App;
