import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import {
  Share2,
  Save
} from 'lucide-react';
import NotificationAndProfile from '../Components/NotificationAndProfile'; 
import './greetings.css'
import { useNavigate } from 'react-router-dom';

function Greetings() {
  const navigate=useNavigate();
  const handleClick = () => navigate('/addgreetings');
  const [greetings, setGreetings] = useState([
    {
      id: 1,
      title: 'Happy Holi',
      description:
        'Joyful Holi! Wishing you a day filled with vibrant colors, sweet moments, and unforgettable memories. Happy Holi to you and your loved ones!',
      image: '',
    },
    {
      id: 2,
      title: 'Happy Diwali',
      description:
        'Warm wishes on Diwali. May this festival of lights bring happiness, health, and wealth to you and your family.',
      image: '',
    },
  ]);

  const [newGreeting, setNewGreeting] = useState({
    title: '',
    description: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGreeting({ ...newGreeting, [name]: value });
  };

 

  const handleSave = () => {
  
    if (!newGreeting.title.trim()) return;
    const updated = [...greetings, { ...newGreeting, id: Date.now() }];
    setGreetings(updated);
    setNewGreeting({ title: '', description: '', image: '' });
  };

  return (
    <div className="container">
      {/* ────────── Main Content ────────── */}
      <main className="main">
        {/* ───── Topbar with Notification and Profile ───── */}
        <div className="topbar-right">
          <NotificationAndProfile />
        </div>

        {/* ───── Page Header ───── */}
        <header className="header">
          <h2>Greetings</h2>
          <p>Use Send Greetings feature to share personalized messages and cherished memories!</p>
        </header>

        {/* ───── Add Greeting Form ───── */}
        <section className="form-card">
          <h3>Add a new Greeting</h3>
          <div className="form-grid">
            <div className="form-column">
              <label htmlFor="title">Greeting Name</label>
              <input
                id="title"
                type="text"
                name="title"
                placeholder="Greeting Name"
                value={newGreeting.title}
                onChange={handleInputChange}
              />
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="5"
                value={newGreeting.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-column">
              <label htmlFor="image">Paste image url</label>
              <textarea
                id="image"
                name="image"
                placeholder="Paste image url"
                rows="5"
                value={newGreeting.image}
                onChange={handleInputChange}
              />

              <div className="button-group">
                <button className="share">
                  <Share2 size={16} /> Share
                </button>
                <button className="save" onClick={handleSave}>
                  <Save size={16} /> Save
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Saved Greetings Section ───── */}
        <section className="saved-greetings">
          <div className="greetings-header-row">
            <h3>Saved Greetings</h3>
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            />
          </div>

          {greetings.map((greet) => (
            <div className="greeting-card" key={greet.id}>
              <div className="image-placeholder" />
              <div>
                <h4>{greet.title}</h4>
                <p>{greet.description}</p>
              </div>
              <div className="actions">
                <button disabled>Edit</button>
                <button onClick={handleClick} className="send">Send</button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Greetings;
