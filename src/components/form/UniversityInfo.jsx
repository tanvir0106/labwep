import React from 'react';
import { GraduationCap } from 'lucide-react';
import { sectionCls, sectionH2, labelCls, inputCls } from '../../utils/styles';

const UniversityInfo = ({ formData, handleChange }) => {
  return (
    <div className={sectionCls}>
      <h2 className={sectionH2}><GraduationCap size={20} className="text-indigo-600" /> University &amp; Course Info</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className={labelCls}>University Name</label>
          <input type="text" name="universityName" className={inputCls} value={formData.universityName} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className={labelCls}>Department</label>
          <input type="text" name="departmentName" className={inputCls} value={formData.departmentName} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelCls}>Semester</label>
          <input type="text" name="semester" className={inputCls} value={formData.semester} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelCls}>Program</label>
          <input type="text" name="programName" className={inputCls} value={formData.programName} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelCls}>Course Title</label>
          <input type="text" name="courseTitle" className={inputCls} value={formData.courseTitle} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelCls}>Course Code</label>
          <input type="text" name="courseCode" className={inputCls} value={formData.courseCode} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelCls}>Section</label>
          <input type="text" name="section" className={inputCls} value={formData.section} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelCls}>Course Teacher</label>
          <input type="text" name="teacherName" className={inputCls} value={formData.teacherName} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default UniversityInfo;
