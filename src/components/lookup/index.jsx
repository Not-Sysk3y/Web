import React, { useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import './Home2.css'; // Import CSS file for styling

const Lookup = () => {
    const { currentUser } = useAuth();
    const [textBoxValue, setTextBoxValue] = useState('');
    const [selectedTypes, setSelectedTypes] = useState({
        email: false,
        name: false,
        phone: false,
        user: false,
        ssn: false,
        ip: false,
        password: false,
        doxbin: false,
    });
    const [result, setResult] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [apiKeyStatus, setApiKeyStatus] = useState('');
    const [apiKeyAdded, setApiKeyAdded] = useState(false);
    const [apiKeyLocked, setApiKeyLocked] = useState(false);
    const [apiKeyActivated, setApiKeyActivated] = useState(false);

    // Function to handle text box change
    const handleTextBoxChange = (event) => {
        setTextBoxValue(event.target.value);
    };

    // Function to handle checkbox change
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        const updatedSelectedTypes = { ...selectedTypes };

        // Uncheck all other checkboxes
        Object.keys(updatedSelectedTypes).forEach(type => {
            if (type !== name) {
                updatedSelectedTypes[type] = false;
            }
        });

        // Update the selected checkbox
        updatedSelectedTypes[name] = checked;
        setSelectedTypes(updatedSelectedTypes);
    };

    // Function to handle API key activation
    const handleApiKeyActivation = async () => {
        if (!apiKey) {
            // If no API key is entered, clear the stored API key
            setApiKey('');
            return;
        }
        try {
            // Check if the entered API key is valid
            const apiUrl = `http://191.101.1.182:5000/chk_api_key?api_key=${apiKey}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            if (data.valid) {
                // If API key is valid, set it, update status, and lock the API key input box
                setApiKey(apiKey);
                setApiKeyAdded(true);
                setApiKeyStatus('api key added');
                setApiKeyLocked(true);
                setApiKeyActivated(true); // Set apiKeyActivated to true
            } else {
                // If API key is invalid, show error message
                setApiKeyStatus('invalid key');
            }
        } catch (error) {
            console.error("Error checking API key:", error);
            setApiKeyStatus('error');
        }
    };

    // Function to handle search button click
    const handleSearch = async () => {
        try {
            const selectedType = Object.keys(selectedTypes).filter(type => selectedTypes[type]).join(',');
            const apiUrl = `https://www.breachwarden.xyz/search?api_key=${apiKey}&type=${selectedType}&q=${textBoxValue}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            setResult(JSON.stringify(data, null, 2));
        } catch (error) {
            setResult("Error: " + error);
        }
    };

    return (
        <div>
            <div className='container33'>
                <h1 className="pricing-heading"><b><u>Breach Warden Lookup</u></b></h1>
                <div className="search-container">
                    <input
                        type="text"
                        value={textBoxValue}
                        onChange={handleTextBoxChange}
                        placeholder="Enter text..."
                        readOnly={apiKeyAdded && !apiKeyLocked}
                    />
                    <div className="checkboxes">
                        {Object.keys(selectedTypes).map(type => (
                            <label key={type}>
                                <input
                                    type="checkbox"
                                    name={type}
                                    checked={selectedTypes[type]}
                                    onChange={handleCheckboxChange}
                                    disabled={apiKeyAdded && !apiKeyLocked}
                                />
                                {type.toUpperCase()}
                            </label>
                        ))}
                    </div>
                    <button onClick={handleSearch} disabled={apiKeyAdded && !apiKeyLocked}>Search</button>
                </div>
                <div className="results-container">
                    <textarea
                        value={result}
                        readOnly
                        placeholder="Results will be displayed here..."
                    />
                </div>
            </div>
            <div className='container33'>
                <div className="api-key-container">
                    <input
                        type="text"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        placeholder="Enter API Key..."
                        style={{ color: apiKeyActivated ? 'white' : 'inherit' }} // Set color based on apiKeyActivated state
                        className={apiKeyAdded ? "api-key-input api-key-added" : "api-key-input"}
                        readOnly={apiKeyLocked}
                    />
                    <button onClick={handleApiKeyActivation}>Activate</button>
                    <p>{apiKeyStatus}</p>
                </div>
            </div>
        </div>
    );
};

export default Lookup;
