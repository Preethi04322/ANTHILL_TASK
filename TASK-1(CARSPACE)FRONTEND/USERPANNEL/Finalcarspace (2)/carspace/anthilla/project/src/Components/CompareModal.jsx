"use client"

import { Navigate } from "react-router-dom"
import "./CompareModal.css"

const CompareModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const handleClear = () => {
    // Clear selected cars logic here
    
  }

  const handleAdd = () => {
    // Add cars logic here
    
  }

  const handleCompare = () => {
    // Compare cars logic here
    
  }

  return (
    
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Compare</h2>
          <button className="clear-btn" onClick={handleClear}><a href="/home">
            Clear
            </a>
          </button>
        </div>

        <div className="modal-body">
          <div className="empty-state">
            <div className="empty-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" />
                <polyline points="9,22 9,12 15,12 15,22" />
              </svg>
            </div>
            <p className="empty-message">You haven't selected any cars.</p>
            <p className="empty-submessage">Please select minimum 2 Cars to compare</p>
          </div>
        </div>

        <div className="modal-footer">
          <button className="add-btn" onClick={handleAdd}>
            Add
          </button>
          <button className="compare-btn" onClick={handleCompare}><a href="/carcompare">
            Compare
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CompareModal
