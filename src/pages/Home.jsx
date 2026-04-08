import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import WelcomeModal from '../components/WelcomeModal';
import BackgroundEffect from '../components/BackgroundEffect';
import { useState, useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);

  useEffect(() => {
    // Show welcome modal once per session
    const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcome_labwep');
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setIsWelcomeOpen(true);
        sessionStorage.setItem('hasSeenWelcome_labwep', 'true');
      }, 1200); // Slight delay for better UX
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="flex-1 overflow-y-auto flex flex-col bg-mesh-gradient font-sans w-full relative">
      <BackgroundEffect />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-xl rounded-2xl mb-6 shadow-2xl border border-white/20">
            <FileText className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-4 uppercase text-gradient">
            labwep
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-300 font-medium mb-10 leading-relaxed">
            Create professional, flawlessly formatted Lab Reports instantly. Tailor your sections, add dynamic code blocks, and output directly to PDF.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate('/generator')}
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 active:scale-95 w-full sm:w-auto"
            >
              Start Generating <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        {/* Features preview */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div data-aos="fade-up" data-aos-delay="100" className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 font-black text-xl border border-blue-500/30">1</div>
            <h3 className="text-xl font-bold text-#011627 mb-3 tracking-tight">Input Details</h3>
            <p className="text-#011627 leading-relaxed">Easily enter your university, course, and student details into intuitive form fields.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-6 font-black text-xl border border-purple-500/30">2</div>
            <h3 className="text-xl font-bold text-#011627 mb-3 tracking-tight">Add Content</h3>
            <p className="text-#011627 leading-relaxed">Insert custom code snippets, dynamically sized tables, and robust explanations or images.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-pink-400 mb-6 font-black text-xl border border-pink-500/30">3</div>
            <h3 className="text-xl font-bold text-#011627 mb-3 tracking-tight">Export PDF</h3>
            <p className="text-#011627 leading-relaxed">Download a pristine PDF matching professional university formatting guidelines instantly.</p>
          </div>
        </div>
      </main>
      
      <div className="w-full flex-shrink-0 relative z-20">
        <Footer isExpanded={true} />
      </div>

      <WelcomeModal isOpen={isWelcomeOpen} onClose={() => setIsWelcomeOpen(false)} />
    </div>
  );
};

export default Home;
