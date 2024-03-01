import React, { useState } from 'react';
import '../stdNotes/StdNotes.css'; // Import CSS file for styling

const StdNotes = () => {
  // Sample notes data with module and chapter information
  const [notes, setNotes] = useState([
    // Module 1
    { id: 1, module: 'Module 1', chapter: 'Chapter 1',pdf:"../",link:"https://byjus.com/ncert-solutions-class-10-maths/chapter-1-real-numbers/"},
    { id: 2, module: 'Module 1', chapter: 'Chapter 2',pdf:"",link:"https://byjus.com/ncert-solutions-class-10-maths/chapter-2-polynomials/"},
    { id: 3, module: 'Module 1', chapter: 'Chapter 3',pdf:"",link:"https://byjus.com/ncert-solutions-class-10-maths/chapter-3-linear-equations-in-two-variables/"},
    { id: 4, module: 'Module 1', chapter: 'Chapter 4',pdf:"",link:"https://byjus.com/ncert-solutions-class-10-maths/chapter-4-quadratic-equations/"},
    { id: 5, module: 'Module 1', chapter: 'Chapter 5',pdf:"",link:"https://byjus.com/ncert-solutions-class-10-maths/chapter-5-arithmetic-progressions/"},
    // Module 2
    { id: 6, module: 'Module 2', chapter: 'Chapter 1', title: 'Note 6', pdf:"",link:"https://byjus.com/ncert-solutions-class-10-maths/chapter-6-triangles/"},
    { id: 7, module: 'Module 2', chapter: 'Chapter 2', title: 'Note 7', pdf:"",link:"https://byjus.com/ncert-solutions-class-10-maths/chapter-7-coordinate-geometry/"},
    { id: 8, module: 'Module 2', chapter: 'Chapter 3', title: 'Note 8', pdf:"",link:"https://byjus.com/ncert-solutions-class-10-maths/chapter-8-introduction-to-trigonometry/"},
    { id: 9, module: 'Module 2', chapter: 'Chapter 4', title: 'Note 9', pdf:"",link:"https://byjus.com/ncert-solutions-class-10-maths/chapter-9-some-applications-of-trigonometry/"},
    { id: 10, module: 'Module 2', chapter: 'Chapter 5', title: 'Note 10',pdf:"",link:"https://byjus.com/ncert-solutions-class-10-maths/chapter-10-circles/"}
  ]);

  // Function to filter chapters by module
  const getChaptersByModule = (module) => {
    return notes.filter(note => note.module === module);
  };

 
  return (
    <div className="student-portal-container">
      {/* Header */}
      <header className="header">
        <h1>Download Notes and Materials</h1>
      </header>
<h2 className="section-heading">Modules</h2>
      {/* Main Content Area */}
      <main className="main-content">
        
        {/* Display modules */}
        <div className="modules-list">
          {/* Module 1 */}
          <div className="module">
            <h3 className="module-title">Module 1</h3>
            <ul className="chapter-list">
              {/* Display list of chapters for Module 1 */}
              {getChaptersByModule('Module 1').map(note => (
                <li key={note.id} className="chapter-item">
                  {note.chapter}
                  {/* Add download button for each chapter */}
                  <a href={note.pdf}>
                  <button className="download-button">Notes</button>
                  </a>
                  <a href={note.link}>
                  <button className="download-button">Materials</button>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Module 2 */}
          <div className="module">
            <h3 className="module-title">Module 2</h3>
            <ul className="chapter-list">
              {/* Display list of chapters for Module 2 */}
              {getChaptersByModule('Module 2').map(note => (
                <li key={note.id} className="chapter-item">
                  {note.chapter}
                  {/* Add download button for each chapter */}
                  <a href={note.pdf}>
                  <button className="download-button">Notes</button>
                  </a>
                  <a href={note.link}>
                  <button className="download-button">Materials</button>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

    </div>
  );
};

export default StdNotes;