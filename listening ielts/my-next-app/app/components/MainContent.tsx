import React from 'react';
import './App.css'; // Make sure to create and style this CSS file as per your design requirements

const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <header className="header">
        <h1>IELTS Listening Practice</h1>
        <h2>Web Design Inspiration 2023</h2>
      </header>
      <div className="skills-section">
        <div className="skill">
          <h3>Multiple Choice</h3>
          <p>Practice your multiple choice skills with various IELTS listening tests.</p>
        </div>
        <div className="skill">
          <h3>Sentence Completion</h3>
          <p>Enhance your ability to complete sentences by listening to IELTS recordings.</p>
        </div>
        <div className="skill">
          <h3>Matching Information</h3>
          <p>Improve your matching skills with tailored IELTS listening exercises.</p>
        </div>
        <div className="skill">
          <h3>Short Answer</h3>
          <p>Hone your short answer skills by practicing with specific IELTS listening questions.</p>
        </div>
        <div className="skill">
          <h3>Pick From A List</h3>
          <p>Develop your ability to select correct options from a list in IELTS listening tasks.</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
