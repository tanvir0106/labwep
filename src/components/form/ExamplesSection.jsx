import React from 'react';
import { Code, Plus, Trash2 } from 'lucide-react';
import { sectionCls, sectionH2, btnSmall, btnBlue, btnGray, inputCls } from '../../utils/styles';

const ExamplesSection = ({
  formData,
  addCodeExample,
  addTableExample,
  removeExample,
  handleExampleFieldChange,
  addNestedCodeBlock,
  removeNestedCodeBlock,
  handleNestedCodeChange,
  handleImageUpload,
  removeImage,
  addTableColumn,
  removeTableColumn,
  addTableRow,
  removeTableRow,
  handleTableHeadChange,
  handleTableCellChange
}) => {
  return (
    <div className={sectionCls}>
      <div className="flex flex-wrap justify-between items-start gap-2 mb-4 sm:mb-5">
        <h2 className={`${sectionH2} mb-0`}><Code size={20} className="text-indigo-600" /> Examples</h2>
        <div className="flex gap-2 flex-wrap">
          <button type="button" onClick={addCodeExample} className={btnSmall}>
            <Plus size={14} /> Add Code Block
          </button>
          <button type="button" onClick={addTableExample} className={btnBlue}>
            <Plus size={14} /> Add Table
          </button>
        </div>
      </div>

      {(formData.examples || []).map((example, idx) => (
        <div key={idx} className="p-3 sm:p-4 border border-gray-200 rounded-lg mb-4 bg-gray-50 overflow-x-auto">
          {/* Example header row */}
          <div className="flex justify-between mb-2">
            <label className="text-sm sm:text-base font-bold text-gray-900">
              Example {idx + 1} : {example.type === 'code' ? 'Code Block' : 'Table'}
            </label>
            <button type="button" onClick={() => removeExample(idx)} className="bg-transparent border-none text-red-500 cursor-pointer">
              <Trash2 size={18} />
            </button>
          </div>

          {/* ── Code block editor ── */}
          {example.type === 'code' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="text-xs font-medium text-gray-700">Title</label>
                <input type="text" className={inputCls} value={example.title} onChange={(e) => handleExampleFieldChange(idx, 'title', e.target.value)} placeholder="e.g. Write a Python class Account..." />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-gray-700">Language</label>
                <select className={inputCls} value={example.language} onChange={(e) => handleExampleFieldChange(idx, 'language', e.target.value)}>
                  <option value="python">Python</option>
                  <option value="r">R Language</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-gray-700">Code Theme</label>
                <select className={inputCls} value={example.theme} onChange={(e) => handleExampleFieldChange(idx, 'theme', e.target.value)}>
                  <option value="one-dark">One Dark (Image Match)</option>
                  <option value="vscode-dark">VS Code (Dark)</option>
                  <option value="vscode-light">VS Code (Light)</option>
                  <option value="r-studio">R Studio</option>
                </select>
              </div>

              {/* Nested code segments */}
              <div className="flex flex-col gap-2 sm:col-span-2 mt-1 sm:mt-2">
                <div className="flex justify-between mb-2">
                  <label className="text-xs font-bold text-gray-700">Code Segments</label>
                  <button type="button" onClick={() => addNestedCodeBlock(idx)} className={btnSmall}>
                    <Plus size={12} /> Add Segment
                  </button>
                </div>
                {(example.codeBlocks || []).map((block, bIdx) => (
                  <div key={bIdx} className="p-2 border border-dashed border-gray-300 rounded mb-2">
                    <div className="flex justify-between mb-2">
                      <label className="text-[0.7rem] font-medium text-gray-600">Segment {bIdx + 1}</label>
                      <button type="button" onClick={() => removeNestedCodeBlock(idx, bIdx)} className="bg-transparent border-none text-red-500 cursor-pointer">
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <input type="text" className={`${inputCls} mb-2 text-sm`} value={block.codeTitle} onChange={(e) => handleNestedCodeChange(idx, bIdx, 'codeTitle', e.target.value)} placeholder="Sub-Title / Code Summary" />
                    <textarea
                      className="form-textarea w-full px-3 py-2.5 border border-gray-200 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 resize-vertical min-h-[80px] font-mono text-[0.85rem] bg-[#1e1e1e] text-[#d4d4d4]"
                      value={block.code}
                      onChange={(e) => handleNestedCodeChange(idx, bIdx, 'code', e.target.value)}
                      placeholder={`Code (${example.language})`}
                    />
                  </div>
                ))}
              </div>

              {/* Output text */}
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="text-xs font-medium text-gray-700">Output Text (Optional)</label>
                <textarea
                  className="form-textarea w-full px-3 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 resize-vertical min-h-[60px] font-mono"
                  value={example.outputText}
                  onChange={(e) => handleExampleFieldChange(idx, 'outputText', e.target.value)}
                  placeholder="Paste output console text here if an image isn't used."
                />
              </div>

              {/* Output image */}
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="text-xs font-medium text-gray-700">Output Image (Optional)</label>
                {example.outputImage ? (
                  <div className="flex flex-col gap-2 items-start">
                    <img src={example.outputImage} alt="Output preview" className="max-h-[100px] rounded border border-gray-200" />
                    <button type="button" onClick={() => removeImage(idx)} className="bg-transparent border-none text-red-500 cursor-pointer text-sm font-medium">
                      Remove Image
                    </button>
                  </div>
                ) : (
                  <input type="file" accept="image/*" className={inputCls} onChange={(e) => handleImageUpload(idx, e)} />
                )}
              </div>
            </div>
          )}

          {/* ── Table editor ── */}
          {example.type === 'table' && (
            <>
              <div className="flex justify-between mb-3 sm:mb-4">
                <input type="text" className={`${inputCls} font-bold`} value={example.title} onChange={(e) => handleExampleFieldChange(idx, 'title', e.target.value)} placeholder="Table Title" />
              </div>

              <div className="flex gap-2 mb-3 sm:mb-4 flex-wrap">
                <button type="button" onClick={() => addTableColumn(idx)} className={btnSmall}>+ Column</button>
                <button type="button" onClick={() => removeTableColumn(idx)} className={btnGray}>- Column</button>
                <button type="button" onClick={() => addTableRow(idx)} className={btnSmall}>+ Row</button>
              </div>

              <div
                className="grid gap-2 mb-2"
                style={{ gridTemplateColumns: `repeat(${example.columns.length}, minmax(80px, 1fr))` }}
              >
                {/* Column headers */}
                {example.columns.map((col, cIdx) => (
                  <input
                    key={`head-${cIdx}`}
                    type="text"
                    className="w-full px-2 py-2 text-xs sm:text-sm font-bold bg-gray-200 border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                    value={col}
                    onChange={(e) => handleTableHeadChange(idx, cIdx, e.target.value)}
                  />
                ))}
                {/* Rows */}
                {example.rows.map((row, rIdx) => (
                  <React.Fragment key={`row-${rIdx}`}>
                    {row.map((cell, cIdx) => (
                      <div key={`cell-${rIdx}-${cIdx}`} className="relative">
                        <input
                          type="text"
                          className="w-full px-2 py-2 text-xs sm:text-sm bg-white border border-gray-200 rounded-lg outline-none focus:border-indigo-500"
                          value={cell}
                          onChange={(e) => handleTableCellChange(idx, rIdx, cIdx, e.target.value)}
                        />
                        {cIdx === row.length - 1 && (
                          <button
                            type="button"
                            onClick={() => removeTableRow(idx, rIdx)}
                            className="absolute -right-5 top-2 bg-transparent border-none text-red-500 cursor-pointer"
                          >
                            <Trash2 size={13} />
                          </button>
                        )}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExamplesSection;
