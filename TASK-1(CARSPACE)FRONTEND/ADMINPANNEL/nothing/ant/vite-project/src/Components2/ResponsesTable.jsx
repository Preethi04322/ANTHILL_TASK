import React, { useState } from 'react';
import './ResponsesTable.css';

const defaultResponses = Array(8).fill({
  id: '#01',
  name: 'Amelia Tuner',
  email: 'amelia@gmail.com',
  testDrive: 'Yes',
  phone: '(406) 555–0120',
  description: 'Interested in test drive.',
  carSearched: 'View',
});

const ResponsesTable = () => {
  const [responses, setResponses] = useState(defaultResponses);
  const [searchTerm, setSearchTerm] = useState('');

  const handleRefresh = () => {
    setResponses([...defaultResponses]);
    setSearchTerm('');
    alert('Responses refreshed!');
  };

  const handleView = (res) => {
    alert(`Details:\n\nName: ${res.name}\nEmail: ${res.email}\nPhone: ${res.phone}\nTest Drive: ${res.testDrive}\nDescription: ${res.description}`);
  };

  const filteredResponses = responses.filter(res =>
    res.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    res.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="search-add-row">
          <input
            type="text"
            placeholder="🔍 Search"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="refresh-button" onClick={handleRefresh}>Refresh</button>
        </div>

      <div className="responses-wrapper">
        {/* Move search bar and refresh inside card */}
        

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>#ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Test drive</th>
                <th>Phone Number</th>
                <th>Description</th>
                <th>Car Searched</th>
              </tr>
            </thead>
            <tbody>
              {filteredResponses.map((res, index) => (
                <tr key={index}>
                  <td>{res.id}</td>
                  <td>{res.name}</td>
                  <td>{res.email}</td>
                  <td>{res.testDrive}</td>
                  <td>{res.phone}</td>
                  <td>{res.description}</td>
                  <td>
                    <span className="view-link" onClick={() => handleView(res)}>View</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResponsesTable;
