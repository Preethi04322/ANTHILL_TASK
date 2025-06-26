import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';
import "./AddFAQ.css";

function AddFAQ() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSave = () => {
    alert("Saved successfully!");
  };

  const handleClear = () => {
    setQuestion("");
    setAnswer("");
  };

  return (
    <div className="faq-container">
      <form className="faq-form">
        <h2>Add/Update FAQs</h2>
        <div className="red-dot"></div>
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <textarea
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <div className="button-group">
          <button type="button" className="save" onClick={handleSave}>
            Save
          </button>
          <button type="button" className="clear" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddFAQ;
