import React from 'react';
import './App.css'; // Make sure to create and style this CSS file as per your design requirements


const MainContent: React.FC = () => {
  return (
    
    /*<div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">*/
      <div className="main-content">
        <header className="header">
          <h1>IELTS Listening Practice</h1>
        </header>
        <div className="skills-section">
          <div className="skill">
              <h3><a href="/pick-from-a-list">Pick From A List</a></h3>
              <p><a href="/pick-from-a-list">Develop your ability to select correct options from a list in IELTS listening tasks.</a></p>
          </div>
          <div className="skill">
              <h3><a href="/multiple-choice">Multiple Choice</a></h3>
              <p><a href="/multiple-choice">Practice your multiple choice skills with various IELTS listening tests.</a></p>
          </div>
          <div className="skill">
            <h3><a href="/sentence-completion">Sentence Completion</a></h3>
            <p><a href="/sentence-completion">Enhance your ability to complete sentences by listening to IELTS recordings.</a></p>
          </div>
          <div className="skill">
            <h3><a href="/matching">Matching Information</a></h3>
            <p><a href="/matching">Improve your matching skills with tailored IELTS listening exercises.</a></p>
          </div>
          
          <div className="skill">
            <h3><a href="/sort-answer">Short Answer</a></h3>
            <p><a href="/sort-answer">Hone your short answer skills by practicing with specific IELTS listening questions.</a></p>
          </div>
          
        </div>
      </div>
    /*</div>*/
  );
};

export default MainContent;
