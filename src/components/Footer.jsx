import React from 'react';
import tanvirImg from '../assets/Tanvir.png';

/* ── Inline SVG social icons ── */
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const Footer = ({ isExpanded = false }) => {
  return (
    <footer className="w-full mt-auto flex-shrink-0 z-[50] relative">
      <div 
        className="w-full bg-indigo-900 border-t border-indigo-800 text-white shadow-[0_-10px_30px_rgba(0,0,0,0.2)] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] grid overflow-hidden relative z-0"
        style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
      >
        <div className="min-h-0 overflow-hidden">
          <div 
             className={`pt-10 pb-4 px-6 sm:px-12 max-w-7xl mx-auto transition-opacity duration-700 ease-in-out ${isExpanded ? 'opacity-100 delay-150' : 'opacity-0 delay-0'}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10 mb-8">
               {/* Brand Column */}
               <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden border-2 border-indigo-400 bg-indigo-800 shadow-md">
                      <img src={tanvirImg} alt="Tanvir Hassan" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h2 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-indigo-50 tracking-tight">Tanvir Hassan</h2>
                      <p className="text-indigo-300 text-sm font-medium mt-0.5">Developer & Designer · GUB ADS</p>
                    </div>
                  </div>
                  <p className="text-indigo-200 text-sm leading-relaxed max-w-sm mt-4">
                    Empowering students and professionals to rapidly build beautifully formatted, IDE-quality lab reports with zero friction.
                  </p>
               </div>

               {/* Quick Links Column */}
               <div>
                  <h3 className="font-semibold text-lg mb-5 text-indigo-50 relative inline-block">
                    Resources
                    <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-indigo-500 rounded-full"></span>
                  </h3>
                  <ul className="space-y-3 text-sm text-indigo-200 font-medium">
                    <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="text-indigo-500 group-hover:text-indigo-400 transition-colors">›</span> Output Templates</a></li>
                    <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="text-indigo-500 group-hover:text-indigo-400 transition-colors">›</span> Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="text-indigo-500 group-hover:text-indigo-400 transition-colors">›</span> Open Source License</a></li>
                  </ul>
               </div>

               {/* Socials Column */}
               <div>
                  <h3 className="font-semibold text-lg mb-5 text-indigo-50 relative inline-block">
                    Connect
                    <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-indigo-500 rounded-full"></span>
                  </h3>
                  <div className="flex flex-col gap-3 text-sm font-medium">
                    <a href="https://github.com/tanvir0106" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-indigo-200 hover:text-white hover:bg-white/10 p-2 -ml-2 rounded-lg transition-all duration-200 group">
                      <span className="group-hover:scale-110 transition-transform"><GithubIcon /></span> <span>GitHub / tanvir0106</span>
                    </a>
                    <a href="https://www.linkedin.com/in/tanvir0106/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-indigo-200 hover:text-white hover:bg-white/10 p-2 -ml-2 rounded-lg transition-all duration-200 group">
                      <span className="group-hover:scale-110 transition-transform"><LinkedinIcon /></span> <span>LinkedIn</span>
                    </a>
                    <div className="flex gap-4 text-indigo-300 mt-2 px-1">
                      <a href="https://www.facebook.com/0106tanvir/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:-translate-y-1 transition-transform p-1 hover:bg-white/10 rounded"><FacebookIcon /></a>
                      <a href="https://www.instagram.com/tanvirhassan_106/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:-translate-y-1 transition-transform p-1 hover:bg-white/10 rounded"><InstagramIcon /></a>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* ── ALWAYS VISIBLE BOTTOM BAR (MINIMAL) ── */}
      <div className={`h-[48px] px-4 sm:px-8 flex items-center justify-between border-t border-indigo-900 bg-indigo-950/95 backdrop-blur-md transition-colors duration-500 w-full relative z-10 mx-auto shadow-2xl`}>
         <div className="flex items-center gap-3">
           <div className={`w-6 h-6 rounded-full overflow-hidden border border-indigo-400/50 transition-opacity duration-300 ${isExpanded ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
             <img src={tanvirImg} alt="Tanvir Hassan" className="w-full h-full object-cover" />
           </div>
           <p className={`text-[10px] sm:text-xs text-indigo-300 transition-transform duration-500 ${isExpanded ? '-translate-x-9' : ''}`}>
             © {new Date().getFullYear()} <span className="font-semibold text-indigo-100 ml-1 tracking-wide">GUB ADS LabGen</span>
           </p>
         </div>

         {/* MIDDLE SOCIAL LINKS */}
         <div className="hidden sm:flex items-center gap-4 text-indigo-400">
           <a href="https://github.com/tanvir0106" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="GitHub"><GithubIcon /></a>
           <a href="https://www.linkedin.com/in/tanvir0106/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="LinkedIn"><LinkedinIcon /></a>
           <a href="https://www.facebook.com/0106tanvir/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Facebook"><FacebookIcon /></a>
           <a href="https://www.instagram.com/tanvirhassan_106/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Instagram"><InstagramIcon /></a>
         </div>

         <p className="text-[10px] sm:text-xs text-indigo-400 font-medium whitespace-nowrap">
            Built by <span className="text-indigo-200">Tanvir Hassan</span>
         </p>
      </div>
    </footer>
  );
};

export default Footer;
