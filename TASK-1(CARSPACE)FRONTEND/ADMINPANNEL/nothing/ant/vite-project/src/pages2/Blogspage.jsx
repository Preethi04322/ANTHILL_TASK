import React from 'react';
import './BlogsPage.css';
import { useNavigate } from 'react-router-dom';

const blogData = [
  {
    title: 'How do I search for properties on Homyfy?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
  {
    title: 'What documents do I need to sell my property through Homyfy?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
  {
    title: 'How can I contact an Homyfy agent?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
];

const BlogsPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/addblog');

  return (
    <div className="blogs-content">
      <div className="blogs-header">
        <div>
          <h2>Blogs</h2>
          <p className="subtitle">List of Blogs</p>
        </div>
        <button onClick={handleClick} className="add-btn">Add Blogs</button>
      </div>

      <div className="blog-grid">
        {[...Array(2)].map((_, row) =>
          blogData.map((blog, index) => (
            <div className="blog-card" key={row * blogData.length + index}>
              <h4>{blog.title}</h4>
              <p>{blog.content}</p>
              <div className="card-buttons">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
