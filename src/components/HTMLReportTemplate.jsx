import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, coy, oneDark, dracula, nord, nightOwl, shadesOfPurple, synthwave84, materialDark, atomDark, solarizedlight, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import gub_logo from '../assets/GUBLogo.png';

const getThemeStyles = (themeName) => {
  switch (themeName) {
    case 'one-dark':
      return { bg: '#282c34', color: '#abb2bf', border: '#3e4451', headColor: '#61afef', highlighter: oneDark };
    case 'vscode-light':
      return { bg: '#f9f9f9', color: '#333333', border: '#dddddd', headColor: '#005cc5', highlighter: coy };
    case 'r-studio':
      return { bg: '#ffffff', color: '#333333', border: '#e0e0e0', headColor: '#2b5797', highlighter: coy };
    case 'dracula':
      return { bg: '#282a36', color: '#f8f8f2', border: '#44475a', headColor: '#bd93f9', highlighter: dracula };
    case 'nord':
      return { bg: '#2e3440', color: '#d8dee9', border: '#4c566a', headColor: '#88c0d0', highlighter: nord };
    case 'night-owl':
      return { bg: '#011627', color: '#d6deeb', border: '#1d3b53', headColor: '#addb67', highlighter: nightOwl };
    case 'shades-of-purple':
      return { bg: '#2d2b55', color: '#ffffff', border: '#4a4a8a', headColor: '#9dff65', highlighter: shadesOfPurple };
    case 'synthwave84':
      return { bg: '#262335', color: '#36f9f6', border: '#4d4d4d', headColor: '#ff7edb', highlighter: synthwave84 };
    case 'material-dark':
      return { bg: '#263238', color: '#eeffff', border: '#37474f', headColor: '#80cbc4', highlighter: materialDark };
    case 'atom-dark':
      return { bg: '#1d1f21', color: '#c5c8c6', border: '#373b41', headColor: '#81a2be', highlighter: atomDark };
    case 'solarized-light':
      return { bg: '#fdf6e3', color: '#657b83', border: '#eee8d5', headColor: '#268bd2', highlighter: solarizedlight };
    case 'classic-prism':
      return { bg: '#f5f2f0', color: '#000000', border: '#e0e0e0', headColor: '#0077aa', highlighter: prism };
    case 'vscode-dark':
    default:
      return { bg: '#1e1e1e', color: '#d4d4d4', border: '#333333', headColor: '#569cd6', highlighter: vscDarkPlus };
  }
};

const HTMLReportTemplate = React.forwardRef(({ data }, ref) => {
  const parseList = (text) => text.split('\n').filter((item) => item.trim() !== '');
  
  return (
    <div ref={ref} className="bg-white text-black font-sans leading-relaxed" style={{ width: '210mm', minHeight: '297mm', padding: '0', boxSizing: 'border-box' }}>
      
      {/* ── Title Page ── */}
      <div className="flex flex-col items-center text-center" style={{ padding: '2.5cm 2cm 1cm 3cm', minHeight: '297mm', boxSizing: 'border-box', position: 'relative' }}>
        <img src={gub_logo} alt="GUB Logo" style={{ width: '140px', marginBottom: '20px' }} />
        
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Helvetica, Arial, sans-serif', marginBottom: '5px' }}>
          {data.universityName || 'Green University of Bangladesh'}
        </h1>
        <h2 style={{ fontSize: '14px', fontWeight: 'bold', fontFamily: 'Helvetica, Arial, sans-serif', marginBottom: '15px' }}>
          {data.departmentName || 'Department of AI and Data Science (ADS)'}
        </h2>
        
        <p style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '2px' }}>
          Semester: {data.semester || 'Spring 2026'}
        </p>
        <p style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '10px' }}>
          {data.programName || 'B.Sc. in ADS (Day)'}
        </p>
        
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '15px', marginBottom: '15px' }}>
          Lab Report - {data.reportNo || '00'}
        </h3>
        <hr style={{ width: '100%', borderTop: '1.5px solid #000', margin: '5px 0' }} />
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '5px 0' }}>
          {data.reportTitle || 'Welcome to ADS Lab'}
        </h2>
        <hr style={{ width: '100%', borderTop: '1.5px solid #000', margin: '5px 0' }} />
        
        <div style={{ width: '80%', marginTop: '15px', marginBottom: '15px', textAlign: 'left', fontSize: '12px' }}>
          <div style={{ display: 'flex', marginBottom: '4px' }}>
            <span style={{ fontWeight: 'bold', width: '120px' }}>Course Title:</span>
            <span>{data.courseTitle || 'Data Structures and Algorithms Lab'}</span>
          </div>
          <div style={{ display: 'flex', marginBottom: '4px' }}>
            <span style={{ fontWeight: 'bold', width: '120px' }}>Course Code:</span>
            <span>{data.courseCode || 'ADS 204'}</span>
          </div>
          <div style={{ display: 'flex', marginBottom: '4px' }}>
            <span style={{ fontWeight: 'bold', width: '120px' }}>Section:</span>
            <span>{data.section || '251 D1'}</span>
          </div>
        </div>
        
        <h4 style={{ fontSize: '13px', fontWeight: 'bold', textDecoration: 'underline', marginTop: '10px', marginBottom: '10px' }}>
          Students Details
        </h4>
        
        <table style={{ width: '70%', borderCollapse: 'collapse', border: '1px solid black', borderBottom: 'none', borderRight: 'none', marginBottom: '15px', fontSize: '11px' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '1px solid black', borderRight: '1px solid black', padding: '5px', width: '50%' }}>Name</th>
              <th style={{ borderBottom: '1px solid black', borderRight: '1px solid black', padding: '5px', width: '50%' }}>ID</th>
            </tr>
          </thead>
          <tbody>
            {(data.students || []).map((student, idx) => (
              <tr key={idx}>
                <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black', padding: '5px' }}>{student.name}</td>
                <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black', padding: '5px' }}>{student.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div style={{ width: '80%', marginTop: '15px', marginBottom: '15px', textAlign: 'left', fontSize: '12px' }}>
          <div style={{ display: 'flex', marginBottom: '4px' }}>
            <span style={{ fontWeight: 'bold', width: '140px' }}>Submission Date:</span>
            <span>{data.submissionDate || '24-2-26'}</span>
          </div>
          <div style={{ display: 'flex', marginBottom: '4px' }}>
            <span style={{ fontWeight: 'bold', width: '140px' }}>Course Teacher:</span>
            <span style={{ textTransform: 'uppercase' }}>{data.teacherName || 'Rakib Abdullah'}</span>
          </div>
        </div>
        
        <div style={{ fontSize: '12px', color: 'red', marginTop: '20px', marginBottom: '10px', fontWeight: 'bold' }}>
          [For teacher's use only: Don't write anything inside this box]
        </div>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black', borderBottom: 'none', borderRight: 'none', fontSize: '11px' }}>
          <thead>
            <tr>
              <th colSpan="2" style={{ borderBottom: '1px solid black', borderRight: '1px solid black', padding: '5px', backgroundColor: '#f9f9f9' }}>
                Lab Report Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black', padding: '6px', width: '50%', height: '40px', verticalAlign: 'top' }}>
                <span style={{ fontWeight: 'bold' }}>Marks:</span>
              </td>
              <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black', padding: '6px', width: '50%', height: '40px', verticalAlign: 'top' }}>
                <span style={{ fontWeight: 'bold' }}>Signature:</span>
              </td>
            </tr>
            <tr>
              <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black', padding: '6px', width: '50%', height: '40px', verticalAlign: 'top' }}>
                <span style={{ fontWeight: 'bold' }}>Comments:</span>
              </td>
              <td style={{ borderBottom: '1px solid black', borderRight: '1px solid black', padding: '6px', width: '50%', height: '40px', verticalAlign: 'top' }}>
                <span style={{ fontWeight: 'bold' }}>Date:</span>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Subtle Tiny Watermark for Title Page */}
        <div style={{ position: 'absolute', bottom: '0.5cm', right: '1cm', fontSize: '7px', color: '#bbb', fontStyle: 'italic', opacity: '0.8' }}>
          <a href="https://labwep.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Composed by labwep</a>
        </div>
      </div>

      {/* html2pdf explicit page break */}
      <div className="html2pdf__page-break"></div>

      {/* ── Content Pages ── */}
      <div style={{ padding: '2.5cm 2cm 2.5cm 3cm', boxSizing: 'border-box' }}>
        
        {data.objectives && (
          <div style={{ marginBottom: '15px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px' }}>1. Objectives</h2>
            <ul style={{ paddingLeft: '20px', fontSize: '11.5px', textAlign: 'justify', lineHeight: '1.6', margin: 0 }}>
              {parseList(data.objectives).map((item, idx) => (
                <li key={idx} style={{ marginBottom: '4px' }}>{item.replace(/^[-*•]\s*/, '')}</li>
              ))}
            </ul>
          </div>
        )}

        {data.introduction && (
          <div style={{ marginBottom: '15px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px', marginTop: '15px' }}>2. Introduction</h2>
            {data.introduction.split('\n').map((para, idx) => (
              <p key={idx} style={{ fontSize: '11.5px', textAlign: 'justify', lineHeight: '1.6', marginBottom: '6px' }}>{para}</p>
            ))}
          </div>
        )}

        {/* ── Examples Section ── */}
        {(data.examples || []).length > 0 && (
          <div style={{ marginTop: '15px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px' }}>3. Examples</h2>
            {(data.examples || []).map((example, idx) => (
              <div key={idx} style={{ marginBottom: '20px', pageBreakInside: 'avoid' }}>
                {example.title && (
                  <h3 style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '6px' }}>3.{idx + 1} {example.title}</h3>
                )}

                {/* Code Type Details */}
                {example.type === 'code' && (
                  <>
                    {(example.codeBlocks || []).map((block, bIdx) => {
                      const langAlias = example.language === 'r' ? 'r' : 'python';
                      const themeOptions = getThemeStyles(example.theme);
                      
                      return (
                        <div key={bIdx} style={{ backgroundColor: themeOptions.bg, color: themeOptions.color, border: `1px solid ${themeOptions.border}`, padding: '12px', borderRadius: '4px', marginBottom: '10px', fontSize: '10px', fontFamily: '"Courier New", Courier, monospace' }}>
                          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', borderBottom: `1px solid ${themeOptions.border}`, paddingBottom: '6px' }}>
                            <span style={{ fontWeight: 'bold', color: themeOptions.headColor }}>{'</> '} {example.language === 'python' ? 'Python' : 'R Language'}</span>
                          </div>
                          {block.codeTitle && (
                            <div style={{ fontWeight: 'bold', marginBottom: '8px', color: themeOptions.headColor }}>{block.codeTitle}</div>
                          )}
                          <SyntaxHighlighter 
                            language={langAlias} 
                            style={themeOptions.highlighter}
                            customStyle={{ margin: 0, padding: 0, background: 'transparent', fontSize: '10px', overflowX: 'auto', whiteSpace: 'pre-wrap' }}
                            wrapLongLines={true}
                          >
                            {block.code || ''}
                          </SyntaxHighlighter>
                        </div>
                      );
                    })}

                    {example.outputText && (
                      <div style={{ marginTop: '10px' }}>
                        <h4 style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>Output:</h4>
                        <p style={{ fontSize: '11px', whiteSpace: 'pre-wrap', fontFamily: 'monospace', textAlign: 'justify' }}>{example.outputText}</p>
                      </div>
                    )}
                    {example.outputImage && (
                      <div style={{ marginTop: '10px', textAlign: 'center' }}>
                        <h4 style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '4px', textAlign: 'left' }}>Output:</h4>
                        <img src={example.outputImage} alt="Output" style={{ maxWidth: '85%', height: 'auto', border: '1px solid #ddd', display: 'block', margin: '10px auto' }} />
                      </div>
                    )}
                  </>
                )}

                {/* Table Type Details */}
                {example.type === 'table' && (
                  <div style={{ width: '100%', marginTop: '10px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black', borderBottom: 'none', borderRight: 'none', fontSize: '10px' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f9f9f9' }}>
                          {example.columns.map((col, cIdx) => (
                            <th key={cIdx} style={{ borderBottom: '1px solid black', borderRight: '1px solid black', padding: '6px', textAlign: 'center' }}>{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {example.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} style={{ borderBottom: '1px solid black', borderRight: '1px solid black', padding: '6px', textAlign: 'center' }}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── Conclusion Section ── */}
        {data.conclusion && (
          <div style={{ marginTop: '15px', pageBreakInside: 'avoid' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px' }}>4. Conclusion</h2>
            <p style={{ fontSize: '11.5px', textAlign: 'justify', lineHeight: '1.6' }}>{data.conclusion}</p>
          </div>
        )}

        {/* Subtle Tiny Watermark for Content Page */}
        <div style={{ marginTop: '20px', textAlign: 'right', fontSize: '7px', color: '#bbb', fontStyle: 'italic', opacity: '0.8' }}>
          <a href="https://labwep.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Composed by labwep</a>
        </div>
      </div>

    </div>
  );
});

export default HTMLReportTemplate;
