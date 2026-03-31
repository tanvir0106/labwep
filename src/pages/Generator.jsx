import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { Download, PenLine, Eye, ZoomIn, ZoomOut } from 'lucide-react';
import Footer from '../components/Footer';
import UniversityInfo from '../components/form/UniversityInfo';
import LabDetails from '../components/form/LabDetails';
import ContentSections from '../components/form/ContentSections';
import ExamplesSection from '../components/form/ExamplesSection';
import ConclusionSection from '../components/form/ConclusionSection';
import HTMLReportTemplate from '../components/HTMLReportTemplate';
import ThankYouModal from '../components/ThankYouModal';
import { btnPrimary } from '../utils/styles';

const Generator = () => {
  const [formData, setFormData] = useState({
    universityName: 'Green University of Bangladesh',
    departmentName: 'Department of AI and Data Science (ADS)',
    semester: 'Spring 2026',
    programName: 'B.Sc. in ADS (Day)',
    reportNo: '00',
    reportTitle: 'Welcome to ADS Lab',
    courseTitle: 'Introduction to AI and Data Science',
    courseCode: 'ADS 101',
    section: '251 D1',
    submissionDate: new Date().toLocaleDateString('en-GB').replace(/\//g, '-'),
    teacherName: 'Rakib Abdullah',
    students: [
      { name: 'Tanvir Hassan', id: '251035007' }
    ],
    objectives: '- To understand the concept of Stack and Queue data structures.\n- To implement Stack using Python.\n- To implement Queue using Python.',
    introduction: 'Stack and Queue are linear data structures that follow specific ordering principles. Stack follows LIFO (Last In First Out) principle, while Queue follows FIFO (First In First Out) principle. In this lab, we will manually implement both data structures.',
    examples: [
      {
        type: 'code',
        title: 'Write pseudocode for Stack and Queue.',
        language: 'python',
        theme: 'vscode-dark',
        codeBlocks: [{
          codeTitle: 'Implementing Stack in Python',
          code: 'class Stack:\n    def __init__(self):\n        self.items = []\n        \n    def push(self, item):\n        self.items.append(item)\n        print(f"Pushed: {item}")\n        \n    def is_empty(self):\n        return len(self.items) == 0',
        }],
        outputText: ''
      },
      {
        type: 'table',
        title: 'Make your table',
        columns: ['Col-1', 'Col-2', 'Col-3'],
        rows: [
          ['Row-1', 'Row-2', 'Row-3'],
          ['Row-4', 'Row-5', 'Row-6'],
          ['Row-7', 'Row-8', 'Row-9']
        ]
      }
    ],
    conclusion: 'In this lab, we successfully implemented several Python classes to understand the core concepts. By creating classes, we learned how to define attributes and methods to model real-life objects.'
  });

  const [mobileTab, setMobileTab] = useState('form');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const reportRef = useRef(null);
  
  const initialZoom = typeof window !== 'undefined' && window.innerWidth < 1024 ? 0.45 : 0.8;
  const [zoom, setZoom] = useState(initialZoom);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStudentChange = (index, field, value) => {
    const newStudents = [...formData.students];
    newStudents[index][field] = value;
    setFormData(prev => ({ ...prev, students: newStudents }));
  };

  const addStudent = () => {
    setFormData(prev => ({ ...prev, students: [...prev.students, { name: '', id: '' }] }));
  };

  const removeStudent = (index) => {
    setFormData(prev => ({ ...prev, students: prev.students.filter((_, i) => i !== index) }));
  };

  const addCodeExample = () => {
    setFormData(prev => ({
      ...prev,
      examples: [...(prev.examples || []), {
        type: 'code', title: '', language: 'python', theme: 'vscode-dark',
        codeBlocks: [{ codeTitle: '', code: '' }], outputText: ''
      }]
    }));
  };

  const addTableExample = () => {
    setFormData(prev => ({
      ...prev,
      examples: [...(prev.examples || []), {
        type: 'table', title: 'New Table', columns: ['Col 1', 'Col 2'],
        rows: [['', ''], ['', '']]
      }]
    }));
  };

  const removeExample = (index) => {
    setFormData(prev => ({ ...prev, examples: prev.examples.filter((_, i) => i !== index) }));
  };

  const handleExampleFieldChange = (index, field, value) => {
    const newExamples = [...formData.examples];
    newExamples[index][field] = value;
    setFormData(prev => ({ ...prev, examples: newExamples }));
  };

  const addNestedCodeBlock = (eIdx) => {
    const newExamples = [...formData.examples];
    if (!newExamples[eIdx].codeBlocks) newExamples[eIdx].codeBlocks = [];
    newExamples[eIdx].codeBlocks.push({ codeTitle: '', code: '' });
    setFormData(prev => ({ ...prev, examples: newExamples }));
  };

  const removeNestedCodeBlock = (eIdx, bIdx) => {
    const newExamples = [...formData.examples];
    newExamples[eIdx].codeBlocks = newExamples[eIdx].codeBlocks.filter((_, i) => i !== bIdx);
    setFormData(prev => ({ ...prev, examples: newExamples }));
  };

  const handleNestedCodeChange = (eIdx, bIdx, field, value) => {
    const newExamples = [...formData.examples];
    newExamples[eIdx].codeBlocks[bIdx][field] = value;
    setFormData(prev => ({ ...prev, examples: newExamples }));
  };

  const handleImageUpload = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => { handleExampleFieldChange(index, 'outputImage', reader.result); };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index) => {
    handleExampleFieldChange(index, 'outputImage', null);
  };

  const addTableColumn = (eIdx) => {
    const newExamples = [...formData.examples];
    newExamples[eIdx].columns.push(`Col ${newExamples[eIdx].columns.length + 1}`);
    newExamples[eIdx].rows = newExamples[eIdx].rows.map(row => [...row, '']);
    setFormData(prev => ({ ...prev, examples: newExamples }));
  };

  const removeTableColumn = (eIdx) => {
    const newExamples = [...formData.examples];
    if (newExamples[eIdx].columns.length > 1) {
      newExamples[eIdx].columns.pop();
      newExamples[eIdx].rows = newExamples[eIdx].rows.map(row => row.slice(0, -1));
      setFormData(prev => ({ ...prev, examples: newExamples }));
    }
  };

  const addTableRow = (eIdx) => {
    const newExamples = [...formData.examples];
    newExamples[eIdx].rows.push(new Array(newExamples[eIdx].columns.length).fill(''));
    setFormData(prev => ({ ...prev, examples: newExamples }));
  };

  const removeTableRow = (eIdx, rIdx) => {
    const newExamples = [...formData.examples];
    if (newExamples[eIdx].rows.length > 1) {
      newExamples[eIdx].rows = newExamples[eIdx].rows.filter((_, i) => i !== rIdx);
      setFormData(prev => ({ ...prev, examples: newExamples }));
    }
  };

  const handleTableHeadChange = (eIdx, cIdx, val) => {
    const newExamples = [...formData.examples];
    newExamples[eIdx].columns[cIdx] = val;
    setFormData(prev => ({ ...prev, examples: newExamples }));
  };

  const handleTableCellChange = (eIdx, rIdx, cIdx, val) => {
    const newExamples = [...formData.examples];
    newExamples[eIdx].rows[rIdx][cIdx] = val;
    setFormData(prev => ({ ...prev, examples: newExamples }));
  };

  const handleDownloadPDF = async () => {
    if (!reportRef.current) return;
    setIsGenerating(true);
    
    // Slight delay to allow DOM updates or animations strictly settle before capturing
    setTimeout(() => {
      const element = reportRef.current;
      const studentId = formData.students[0]?.id || 'Student';
      const opt = {
        margin:       [0, 0],
        filename:     `Lab_Report_${formData.reportNo}_${studentId}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        enableLinks:  true,
        html2canvas:  { scale: 2, useCORS: true, logging: false },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().set(opt).from(element).save().then(() => {
        setIsGenerating(false);
        setShowModal(true);
      });
    }, 100);
  };

  const formContent = (
    <div className="max-w-4xl mx-auto">
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-1 sm:mb-2">Lab Report Generator</h1>
        <p className="text-gray-500 text-sm sm:text-base">Fill in the details to generate your GUB LaTeX-styled Lab Report PDF.</p>
      </header>

      <form onSubmit={(e) => e.preventDefault()}>
        <UniversityInfo formData={formData} handleChange={handleChange} />
        <LabDetails formData={formData} handleChange={handleChange} handleStudentChange={handleStudentChange} addStudent={addStudent} removeStudent={removeStudent} />
        <ContentSections formData={formData} handleChange={handleChange} />
        <ExamplesSection 
          formData={formData} addCodeExample={addCodeExample} addTableExample={addTableExample}
          removeExample={removeExample} handleExampleFieldChange={handleExampleFieldChange}
          addNestedCodeBlock={addNestedCodeBlock} removeNestedCodeBlock={removeNestedCodeBlock}
          handleNestedCodeChange={handleNestedCodeChange} handleImageUpload={handleImageUpload}
          removeImage={removeImage} addTableColumn={addTableColumn} removeTableColumn={removeTableColumn}
          addTableRow={addTableRow} removeTableRow={removeTableRow} handleTableHeadChange={handleTableHeadChange}
          handleTableCellChange={handleTableCellChange}
        />
        <ConclusionSection formData={formData} handleChange={handleChange} />
      </form>
    </div>
  );

  const downloadBtn = (
    <button onClick={handleDownloadPDF} disabled={isGenerating} className={`${btnPrimary} ${isGenerating ? 'opacity-70 cursor-wait' : ''}`}>
      <Download size={16} /> {isGenerating ? 'Generating...' : 'Download'}
    </button>
  );

  const previewPane = (
    <div className="flex-1 bg-[#525659] flex flex-col relative overflow-hidden min-h-0 h-full w-full">
      <div className="p-3 sm:p-4 bg-gray-800/90 backdrop-blur-sm border-b border-gray-700 flex justify-between items-center absolute top-0 w-full z-10 shadow-md">
        <div className="flex items-center gap-1 sm:gap-2">
          <button onClick={() => setZoom(z => Math.max(z - 0.1, 0.2))} className="p-1.5 sm:p-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition" title="Zoom Out">
             <ZoomOut size={16} />
          </button>
          <span className="text-white text-xs sm:text-sm font-medium w-10 sm:w-12 text-center">
             {Math.round(zoom * 100)}%
          </span>
          <button onClick={() => setZoom(z => Math.min(z + 0.1, 2.0))} className="p-1.5 sm:p-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition" title="Zoom In">
             <ZoomIn size={16} />
          </button>
        </div>
        <div className="hidden lg:block">{downloadBtn}</div>
      </div>
      
      <div className="flex-1 overflow-auto pt-[70px] sm:pt-[90px] w-full min-h-0 relative flex flex-col items-center">
         <div 
           className="origin-top transition-transform duration-200 shrink-0"
           style={{ transform: `scale(${zoom})`, width: '210mm' }}
         >
           <div className="shadow-[0_0_20px_rgba(0,0,0,0.3)] mb-[100px] mt-4 sm:mt-0 transition-opacity">
             <HTMLReportTemplate ref={reportRef} data={formData} />
           </div>
         </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col flex-1 overflow-hidden font-sans relative w-full h-full">
      {/* Mobile Header Tabs */}
      <div className="lg:hidden flex-shrink-0 flex items-center justify-between bg-white border-b border-gray-200 px-4 py-2 shadow-sm z-20">
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setMobileTab('form')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold rounded-md transition-all duration-200 ${mobileTab === 'form' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-600'}`}
          >
            <PenLine size={14} /> Form
          </button>
          <button
            onClick={() => setMobileTab('preview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold rounded-md transition-all duration-200 ${mobileTab === 'preview' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-600'}`}
          >
            <Eye size={14} /> Preview
          </button>
        </div>
        {downloadBtn}
      </div>

      <div className="flex flex-1 overflow-hidden min-h-0 w-full">
        {/* Form Container */}
        <div className={`flex-1 overflow-y-auto p-4 sm:p-8 bg-gray-50 border-r border-gray-200 min-h-0 ${mobileTab === 'form' ? 'block' : 'hidden lg:block lg:max-w-[50%]'}`}>
          {formContent}
        </div>

        {/* Preview Container */}
        <div className={`flex-1 overflow-hidden min-h-0 bg-[#525659] ${mobileTab === 'preview' ? 'block w-full' : 'hidden lg:block'}`}>
          {previewPane}
        </div>
      </div>

      {/* Universal thin footer spanning exact absolute bottom of Generator layout globally */}
      <Footer isExpanded={false} />
      
      {/* Thank you note */}
      <ThankYouModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Generator;
