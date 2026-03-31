import React from 'react';
import { FlaskConical, Plus, Trash2 } from 'lucide-react';
import { sectionCls, sectionH2, labelCls, inputCls, btnSmall } from '../../utils/styles';

const LabDetails = ({ formData, handleChange, handleStudentChange, addStudent, removeStudent }) => {
  return (
    <div className={sectionCls}>
      <h2 className={sectionH2}><FlaskConical size={20} className="text-indigo-600" /> Lab Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="flex flex-col gap-2">
          <label className={labelCls}>Lab Report Number</label>
          <input type="text" name="reportNo" className={inputCls} value={formData.reportNo} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelCls}>Submission Date</label>
          <input type="text" name="submissionDate" className={inputCls} value={formData.submissionDate} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className={labelCls}>Lab Report Title</label>
          <input type="text" name="reportTitle" className={inputCls} value={formData.reportTitle} onChange={handleChange} />
        </div>
      </div>

      {/* Student Details */}
      <div className="mt-5 sm:mt-6">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <label className="text-sm sm:text-base font-medium text-gray-900">Student Details</label>
          <button type="button" onClick={addStudent} className={btnSmall}>
            <Plus size={14} /> Add Student
          </button>
        </div>
        {formData.students.map((student, idx) => (
          <div key={idx} className="flex gap-2 mb-2">
            <input type="text" placeholder="Name" className={inputCls} value={student.name} onChange={(e) => handleStudentChange(idx, 'name', e.target.value)} />
            <input type="text" placeholder="ID" className={`${inputCls} w-[38%] sm:w-[40%]`} value={student.id} onChange={(e) => handleStudentChange(idx, 'id', e.target.value)} />
            <button type="button" onClick={() => removeStudent(idx)} className="bg-transparent border-none text-red-500 cursor-pointer px-1 sm:px-2 flex-shrink-0">
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabDetails;
