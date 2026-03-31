import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 overflow-y-auto flex flex-col bg-gray-50 font-sans w-full">
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-4 bg-indigo-100 rounded-full mb-6">
            <FileText className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            GUB Lab Report Generator
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-8">
            Create professional, flawlessly formatted Lab Reports instantly. Tailor your sections, add dynamic code blocks, and output directly to PDF.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate('/generator')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-indigo-600 border border-transparent rounded-xl hover:bg-indigo-700 hover:shadow-lg transition-all duration-200 active:translate-y-px w-full sm:w-auto"
            >
              Start Generating <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        {/* Features preview */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div data-aos="fade-up" data-aos-delay="100" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 font-bold">1</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Input Details</h3>
            <p className="text-gray-500">Easily enter your university, course, and student details into intuitive form fields.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 font-bold">2</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Add Content</h3>
            <p className="text-gray-500">Insert custom code snippets, dynamically sized tables, and robust explanations or images.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4 font-bold">3</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Export PDF</h3>
            <p className="text-gray-500">Download a pristine PDF matching professional university formatting guidelines instantly.</p>
          </div>
        </div>
      </main>
      
      <div className="w-full flex-shrink-0 relative z-20">
        <Footer isExpanded={true} />
      </div>
    </div>
  );
};

export default Home;
