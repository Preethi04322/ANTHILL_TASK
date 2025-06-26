import React, { useState } from 'react';

export default function FilterSidebar({ onFilterChange }) {
    const [activeTab, setActiveTab] = useState('used');
    const [openSections, setOpenSections] = useState({});
    const [zipCode, setZipCode] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [error, setError] = useState('');

    const toggleSection = (section) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    const handleSearch = () => {
        const zipRegex = /^[0-9]{5,6}$/;
        if (zipCode && !zipRegex.test(zipCode)) {
            setError('Please enter a valid 5 or 6 digit zip code.');
            return;
        }
        setError('');
        onFilterChange({ activeTab, make, model, zipCode });
    };

    const handleReset = () => {
        setMake('');
        setModel('');
        setZipCode('');
        setError('');
        setActiveTab('used');
        setOpenSections({});
        onFilterChange({
            activeTab: 'used',
            make: '',
            model: '',
            zipCode: '',
        });
    };

    return (
        <div className="filter-sidebar">
            {/* Tabs */}
            <div className="tabs">
                <button
                    className={activeTab === 'new' ? 'active' : ''}
                    onClick={() => setActiveTab('new')}
                >
                    New cars
                </button>
                <button
                    className={activeTab === 'used' ? 'active' : ''}
                    onClick={() => setActiveTab('used')}
                >
                    Used cars
                </button>
            </div>

            {/* Filters */}
            <select value={make} onChange={(e) => setMake(e.target.value)}>
                <option value="">Make</option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>Ford</option>
                <option>Audi</option>
                <option>BMW</option>
            </select>

            <select value={model} onChange={(e) => setModel(e.target.value)}>
                <option value="">Model</option>
                <option>Corolla</option>
                <option>Civic</option>
                <option>F-150</option>
                <option>Q5</option>
                <option>X5</option>
            </select>

            <input
                type="text"
                placeholder="Zip code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
            />

            {error && <p style={{ color: 'red', fontSize: '13px' }}>{error}</p>}

            <button className="search-btn" onClick={handleSearch}>Search</button>
            <button className="reset-btn" onClick={handleReset}>Reset Filters</button>

            {/* Optional Expandable Sections */}
            {[
                'Price & Payment',
                'Mileage',
                'Years',
                'Online shopping options',
                'Exterior color',
                'Interior color',
                'Drive train',
                'Transmission',
            ].map((section) => (
                <div key={section} className="accordion">
                    <div className="accordion-title" onClick={() => toggleSection(section)}>
                        {section}
                        <span style={{ float: 'right' }}>{openSections[section] ? '▲' : '▼'}</span>
                    </div>
                    {openSections[section] && (
                        <div className="accordion-content">
                            {section === 'Price & Payment' && (
                                <>
                                    <input type="number" placeholder="Min price" />
                                    <input type="number" placeholder="Max price" />
                                    <input type="number" placeholder="Monthly payment" />
                                </>
                            )}
                            {section === 'Mileage' && (
                                <>
                                    <input type="number" placeholder="Min mileage" />
                                    <input type="number" placeholder="Max mileage" />
                                </>
                            )}
                            {section === 'Years' && (
                                <>
                                    <select><option>From</option>{[2025, 2024, 2023, 2022].map(y => <option key={y}>{y}</option>)}</select>
                                    <select><option>To</option>{[2025, 2024, 2023, 2022].map(y => <option key={y}>{y}</option>)}</select>
                                </>
                            )}
                            {section === 'Online shopping options' && (
                                <>
                                    <label><input type="checkbox" /> Home delivery</label><br />
                                    <label><input type="checkbox" /> Virtual appointment</label>
                                </>
                            )}
                            {section === 'Exterior color' && (
                                <select>
                                    <option>Select Color</option>
                                    <option>Black</option>
                                    <option>White</option>
                                    <option>Red</option>
                                    <option>Blue</option>
                                </select>
                            )}
                            {section === 'Interior color' && (
                                <select>
                                    <option>Select Color</option>
                                    <option>Black</option>
                                    <option>Beige</option>
                                    <option>Gray</option>
                                    <option>Brown</option>
                                </select>
                            )}
                            {section === 'Drive train' && (
                                <>
                                    <label><input type="radio" name="drivetrain" /> FWD</label><br />
                                    <label><input type="radio" name="drivetrain" /> RWD</label><br />
                                    <label><input type="radio" name="drivetrain" /> AWD</label>
                                </>
                            )}
                            {section === 'Transmission' && (
                                <>
                                    <label><input type="radio" name="transmission" /> Automatic</label><br />
                                    <label><input type="radio" name="transmission" /> Manual</label>
                                </>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
