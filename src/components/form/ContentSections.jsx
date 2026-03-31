import React from 'react';
import { BookOpen } from 'lucide-react';
import { sectionCls, sectionH2, labelCls, textareaCls } from '../../utils/styles';

const ContentSections = ({ formData, handleChange }) => {
  return (
    <div className={sectionCls}>
      <h2 className={sectionH2}><BookOpen size={20} className="text-indigo-600" /> Content Sections</h2>
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex flex-col gap-2">
          <label className={labelCls}>Objectives (Bulleted)</label>
          <textarea name="objectives" className={textareaCls} value={formData.objectives} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelCls}>Introduction</label>
          <textarea name="introduction" className={textareaCls} value={formData.introduction} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default ContentSections;
