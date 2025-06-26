import React from 'react';
import './Location.css'
export default function Location() {
  return (
    <section className="location-map"><h3><span className="highlight">▍</span>Location</h3>
      <iframe src="https://www.google.com/maps/embed?..." title="Car Location" />
    </section>
  );
}