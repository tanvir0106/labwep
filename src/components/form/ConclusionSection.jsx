import React from 'react';
import { FileText } from 'lucide-react';
import { sectionCls, sectionH2, textareaCls } from '../../utils/styles';

const ConclusionSection = ({ formData, handleChange }) => {
  return (
    <div className={sectionCls}>
      <h2 className={sectionH2}><FileText size={20} className="text-indigo-600" /> Conclusion</h2>
      <div className="flex flex-col gap-2">
        <textarea name="conclusion" className={textareaCls} value={formData.conclusion} onChange={handleChange} />
      </div>
    </div>
  );
};

export default ConclusionSection;
