// "use client"

// import { useState } from "react"
// import "./GetInTouch.css"

// const GetInTouch = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     description: "",
//   })

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     // Handle form submission here
//   }

//   return (
//     <div className="get-in-touch">
//       <div className="touch-content">
//         <div className="touch-form-section">
//           <div className="touch-header">
//             <h2>
//               <span className="red-line">|</span>Get in Touch
//             </h2>
//             <p className="touch-description">
//               We're here to help! Whether you're interested in booking a tour, learning more about our memberships or
//               have general inquiries, feel free to reach out. We'll get back to you as soon as possible.
//             </p>
//           </div>

//           <form className="contact-form" onSubmit={handleSubmit}>
//             <div className="form-row">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="form-input"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone number"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="form-input"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <textarea
//                 name="description"
//                 placeholder="Description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 className="form-textarea"
//                 rows="5"
//                 required
//               />
//             </div>

//             <button type="submit" className="submit-btn">
//               Send My Inquiry
//             </button>
//           </form>
//         </div>

//         <div className="touch-image-section">
//           <div className="background-overlay"></div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default GetInTouch

"use client";

import { useState } from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Show the popup
    setShowPopup(true);

    // Hide the popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);

    // Optionally reset form
    setFormData({ name: "", phone: "", description: "" });
  };

  return (
    <div className="get-in-touch">
      <div className="touch-content">
        <div className="touch-form-section">
          <div className="touch-header">
            <h2>
              <span className="red-line">|</span>Get in Touch
            </h2>
            <p className="touch-description">
              We're here to help! Whether you're interested in booking a tour, learning more about our memberships or
              have general inquiries, feel free to reach out. We'll get back to you as soon as possible.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
                className="form-textarea"
                rows="5"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send My Inquiry
            </button>
          </form>

          {/* Popup */}
          {showPopup && (
            <div className="popup-message">
              ✅ Your message has been sent!
            </div>
          )}
        </div>

        <div className="touch-image-section">
          <div className="background-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
