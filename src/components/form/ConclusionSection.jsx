import React from 'react';
import { FileText } from 'lucide-react';
import { sectionCls, sectionH2 } from '../../utils/styles';
import RichTextEditor from '../RichTextEditor';

const ConclusionSection = ({ formData, handleChange }) => {
  return (
    <div className={sectionCls}>
      <h2 className={sectionH2}><FileText size={20} className="text-indigo-600" /> Conclusion</h2>
      <div className="flex flex-col gap-2 relative">
        <RichTextEditor 
          value={formData.conclusion} 
          onChange={(val) => handleChange({ target: { name: 'conclusion', value: val }})} 
          placeholder="Write your conclusion here..."
        />
      </div>
    </div>
  );
};

export default ConclusionSection;
