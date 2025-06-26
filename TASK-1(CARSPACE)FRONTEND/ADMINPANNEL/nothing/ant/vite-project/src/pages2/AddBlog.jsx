import React, { useState } from "react";
import "./AddBlog.css";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    blogName: "",
    writerName: "",
    publishDate: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleClear = () => {
    setFormData({
      blogName: "",
      writerName: "",
      publishDate: "",
      description: "",
      image: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Blog:", formData);
  };

  return (
    // <div className="blog-container">
      <form className="blog-form" onSubmit={handleSubmit}>
        <h2>Add/Update Blogs</h2>
        <div className="red-dot"></div>

        <input
          type="text"
          name="blogName"
          placeholder="Blog name"
          value={formData.blogName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="writerName"
          placeholder="Writer Name"
          value={formData.writerName}
          onChange={handleChange}
        />

        <div className="input-icon">
          <input
            type="date"
            name="publishDate"
            value={formData.publishDate}
            onChange={handleChange}
          />
          {/* <span className="icon">&#128197;</span> */}
        </div>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <div className="input-icon">
          <input
            type="file"
            name="image"
            onChange={handleChange}
          />
          <span className="icon">&#128228;</span>
        </div>

        <div className="button-group">
          <button type="submit" className="save">Save</button>
          <button type="button" className="clear" onClick={handleClear}>Clear</button>
        </div>
      </form>
    // </div>
  );
};

export default AddBlog;
 