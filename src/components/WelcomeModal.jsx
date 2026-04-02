import React from 'react';
import tanvirImg from '../assets/Tanvir.png';

/* ── Inline SVG social icons ── */
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const WelcomeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity duration-300">
      <div 
        className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 sm:p-10 max-w-[480px] w-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative flex flex-col items-center text-center transform transition-all scale-100 animate-in fade-in zoom-in duration-500 border border-white/20"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors bg-gray-100 hover:bg-gray-200 p-2 rounded-full outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="relative group mb-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-28 h-28 rounded-full border-4 border-white overflow-hidden shadow-2xl bg-indigo-50">
            <img src={tanvirImg} alt="Tanvir Hassan" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">Welcome to labwep!</h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed px-4">
          Hi! I'm <span className="font-bold text-indigo-600">Tanvir Hassan</span>. I built this tool to make your lab report creation process as fast and professional as possible. Glad to have you here!
        </p>

        <div className="w-full space-y-6">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Let's Connect</span>
            <div className="flex gap-4 w-full justify-center">
              <a href="https://github.com/tanvir0106" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-indigo-600 hover:-translate-y-1 transition-all p-3 bg-gray-100 hover:bg-indigo-50 rounded-2xl shadow-sm border border-gray-100 hover:border-indigo-100"
                 title="GitHub"
              >
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/tanvir0106/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-blue-600 hover:-translate-y-1 transition-all p-3 bg-gray-100 hover:bg-blue-50 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-100"
                 title="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a href="https://www.facebook.com/0106tanvir/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-blue-500 hover:-translate-y-1 transition-all p-3 bg-gray-100 hover:bg-blue-50 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-100"
                 title="Facebook"
              >
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/tanvirhassan_106/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-pink-600 hover:-translate-y-1 transition-all p-3 bg-gray-100 hover:bg-pink-50 rounded-2xl shadow-sm border border-gray-100 hover:border-pink-100"
                 title="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
          
          <button 
            onClick={onClose} 
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98] outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Start Creating Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
