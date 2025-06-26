// src/Components2/FAQs.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FAQs.css';

const initialFaqData = [
  {
    question: 'How do I search for properties on Hornyfyd?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
  },
  {
    question: 'What documents do I need to sell my property through Hornyfyd?',
    answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...'
  },
  {
    question: 'How can I contact an Hornyfyd agent?',
    answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse...'
  },
  {
    question: 'How can I contact an Hornyfyd agent?',
    answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse...'
  },
  {
    question: 'How can I contact an Hornyfyd agent?',
    answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse...'
  },
  {
    question: 'How can I contact an Hornyfyd agent?',
    answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse...'
  },
];

const FAQs = () => {
  const [faqs] = useState(initialFaqData);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/addfaq');
  };

  return (
    <div className="faq-page">
      <div className="faq-header-topbar">
        <div className="faq-title-section">
          <h2>FAQs</h2>
          <p>List of FAQs</p>
        </div>

        <div className="faq-right-actions">
          <button
            className="add-faq-button"
            onClick={handleNavigation}
          >
            Add FAQs
          </button>
        </div>
      </div>

      <div className='dummy'>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div className="faq-card" key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
              <div className="faq-actions">
                <button className="edit-btn" disabled>Edit</button>
                <button className="delete-btn" disabled>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;