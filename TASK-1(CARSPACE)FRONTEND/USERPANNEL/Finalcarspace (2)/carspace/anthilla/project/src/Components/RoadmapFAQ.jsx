"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import "./RoadmapFAQ.css"

const faqData = [
  {
    id: 1,
    question: "How flexible are Carspace's membership plans?",
    answer:
      "Frequently asked questions answered by industry experts. We ensure that you get the best and most accurate information and advice to help you make the right decision for your business.",
  },
  {
    id: 2,
    question: "What kind of training and networking opportunities does Carspace provide?",
    answer:
      "We offer comprehensive training programs, workshops, and networking events to help our members grow their business and connect with industry professionals.",
  },
  {
    id: 3,
    question: "Can I tour the Carspace before committing to a membership?",
    answer:
      "We encourage potential members to visit our facilities and take a guided tour to see if our space meets their needs before making any commitments.",
  },
  {
    id: 4,
    question: "Is Carspace suitable for remote teams and distributed workforces?",
    answer:
      "Yes, our flexible membership options and modern facilities are designed to accommodate remote teams, distributed workforces, and hybrid work arrangements.",
  },
  {
    id: 5,
    question: "What measures does Carspace take for environmental sustainability?",
    answer:
      "We are committed to environmental sustainability through energy-efficient systems, recycling programs, and eco-friendly practices throughout our facilities.",
  },
  {
    id: 6,
    question: "Still has questions?",
    answer:
      "Feel free to contact our support team for any additional questions or concerns. We're here to help you find the perfect workspace solution.",
  },
]

const RoadmapFAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([1])) // First item open by default

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className="roadmap-faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2>
            <span className="red-line">|</span>Your Roadmap to Carspace Clarity
          </h2>
          <p className="faq-description">
            They work about questions visitors by you provide. We ensure that you get the best and most accurate
            information and advice to help you make the right decision for your business.
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((item) => (
            <div key={item.id} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.has(item.id)}
              >
                <span className="question-text">{item.question}</span>
                <span className="toggle-icon">{openItems.has(item.id) ? <Minus size={20} /> : <Plus size={20} />}</span>
              </button>

              {openItems.has(item.id) && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RoadmapFAQ
