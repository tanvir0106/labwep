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
import BackgroundEffect from '../components/BackgroundEffect';
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
    objectives: '- To understand how LabWep simplifies the lab report generation process.\n- To explore the features of LaTeX-styled document formatting.\n- To learn how to integrate Python code snippets and dynamic data tables.',
    introduction: 'LabWep is a specialized lab report generator designed for students to create high-quality, professional reports with ease. It combines the power of LaTeX-style aesthetics with a user-friendly interface, allowing users to focus on content while the application handles the complex layout and formatting. Whether you are documenting algorithms, data analysis, or laboratory experiments, LabWep ensures a polished and consistent output every time.',
    examples: [
      {
        type: 'code',
        title: 'Simple Welcome Note in Python',
        language: 'python',
        theme: 'vscode-dark',
        codeBlocks: [{
          codeTitle: 'Welcome Script',
          code: '# A simple Python script to welcome you to LabWep\ndef welcome_message():\n    name = "User"\n    message = f"Hello {name}, Welcome to LabWep! Your professional report is ready."\n    print(message)\n\nwelcome_message()',
        }],
        outputText: 'Hello User, Welcome to LabWep! Your professional report is ready.'
      },
      {
        type: 'table',
        title: 'Sample Data Table',
        columns: ['Feature', 'Benefit', 'Status'],
        rows: [
          ['LaTeX Styling', 'Professional Look', 'Active'],
          ['Rich Text', 'Easy Formatting', 'Active'],
          ['Code Highlighting', 'Readable Snippets', 'Active']
        ]
      }
    ],
    conclusion: 'In summary, LabWep provides a robust environment for academic documentation. By using this tool, students can ensure their lab reports are presented in a clear, organized, and professionally formatted manner, significantly enhancing the quality of their submissions.'
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

  const addDocumentExample = () => {
    setFormData(prev => ({
      ...prev,
      examples: [...(prev.examples || []), {
        type: 'document', title: 'New Document Block', content: ''
      }]
    }));
  };

  const removeExample = (index) => {
    setFormData(prev => ({ ...prev, examples: prev.examples.filter((_, i) => i !== index) }));
  };

  const handleExampleFieldChange = (index, field, value) => {
    const newExamples = [...formData.examples];
    
    // All themes are now available for all languages, so we don't need to force a theme change
    // when the user switches languages, allowing them to keep their preferred theme.

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
        filename:     `${studentId}__${formData.courseCode}_lab${formData.reportNo}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        enableLinks:  true,
        html2canvas:  { scale: 2, useCORS: true, logging: false },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().set(opt).from(element).toPdf().get('pdf').then((pdf) => {
        const totalPages = pdf.internal.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i);
          pdf.setFontSize(9);
          pdf.setTextColor(160, 160, 160);
          
          const pageWidth = pdf.internal.pageSize.getWidth();
          const pageHeight = pdf.internal.pageSize.getHeight();
          
          // Add branding on the left
          const brandingText = 'Composed by labwep (labwep.vercel.app)';
          pdf.text(brandingText, 20, pageHeight - 10);
          // Make it clickable with an invisible link annotation over the exact text area
          pdf.link(20, pageHeight - 13, 65, 5, { url: 'https://labwep.vercel.app/' });
          
          // Add page number on the right
          const pageText = `Page ${i} of ${totalPages}`;
          pdf.text(pageText, pageWidth - 40, pageHeight - 10);
        }
      }).save().then(() => {
        setIsGenerating(false);
        setShowModal(true);
      });
    }, 100);
  };

  const formContent = (
    <div className="max-w-4xl mx-auto relative z-10">
      <header className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-2 uppercase text-gradient">labwep</h1>
        <p className="text-slate-400 text-sm sm:text-base font-medium">Fill in the details to generate your GUB LaTeX-styled Lab Report PDF.</p>
      </header>

      <div className="glass-card p-4 sm:p-8 rounded-3xl overflow-hidden mb-8">
        <form onSubmit={(e) => e.preventDefault()}>
          <UniversityInfo formData={formData} handleChange={handleChange} />
          <LabDetails formData={formData} handleChange={handleChange} handleStudentChange={handleStudentChange} addStudent={addStudent} removeStudent={removeStudent} />
          <ContentSections formData={formData} handleChange={handleChange} />
          <ExamplesSection 
            formData={formData} addCodeExample={addCodeExample} addTableExample={addTableExample} addDocumentExample={addDocumentExample}
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
    </div>
  );

  const downloadBtn = (
    <button onClick={handleDownloadPDF} disabled={isGenerating} className={`${btnPrimary} ${isGenerating ? 'opacity-70 cursor-wait' : ''}`}>
      <Download size={16} /> {isGenerating ? 'Generating...' : 'Export PDF'}
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
    <div className="flex flex-col flex-1 overflow-hidden font-sans relative w-full h-full bg-mesh-gradient">
      <BackgroundEffect />

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
        <div className={`flex-1 overflow-y-auto p-4 sm:p-8 border-r border-white/5 min-h-0 relative z-10 ${mobileTab === 'form' ? 'block' : 'hidden lg:block lg:max-w-[50%]'}`}>
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
