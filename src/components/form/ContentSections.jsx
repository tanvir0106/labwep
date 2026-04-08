import React from 'react';
import { BookOpen } from 'lucide-react';
import { sectionCls, sectionH2, labelCls } from '../../utils/styles';
import RichTextEditor from '../RichTextEditor';

const ContentSections = ({ formData, handleChange }) => {
  return (
    <div className={sectionCls}>
      <h2 className={sectionH2}><BookOpen size={20} className="text-indigo-600" /> Content Sections</h2>
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex flex-col gap-2 relative">
          <label className={labelCls}>Objectives</label>
          <RichTextEditor 
            value={formData.objectives} 
            onChange={(val) => handleChange({ target: { name: 'objectives', value: val }})} 
            placeholder="Write objectives (use bullets here...)"
          />
        </div>
        <div className="flex flex-col gap-2 relative mt-4">
          <label className={labelCls}>Introduction</label>
          <RichTextEditor 
            value={formData.introduction} 
            onChange={(val) => handleChange({ target: { name: 'introduction', value: val }})} 
            placeholder="Write introduction..."
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSections;
