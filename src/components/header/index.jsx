import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';
import './Header.css'; // Import the CSS file

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();
    const [activeTab, setActiveTab] = useState('Lookup');

    // Function to handle tab change
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    // Render the header only if userLoggedIn is true
    if (!userLoggedIn) {
        return null;
    }

    return (
        <nav className='header1'>
            <div className="tabs-container">
                <div className="tabs">
                    <Link to="/home" className={activeTab === 'Home' ? 'active' : ''} onClick={() => handleTabChange('Home')}>Home</Link>
                    <Link to="/pricing" className={activeTab === 'Pricing' ? 'active' : ''} onClick={() => handleTabChange('Pricing')}>Pricing</Link>
                    <Link to="/updates" className={activeTab === 'Updates' ? 'active' : ''} onClick={() => handleTabChange('Updates')}>Updates</Link>
                    <Link to="/lookup" className={activeTab === 'Lookup' ? 'active' : ''} onClick={() => handleTabChange('Lookup')}>Lookup</Link>
                    <Link to="/docs" className={activeTab === 'Docs' ? 'active' : ''} onClick={() => handleTabChange('Docs')}>Docs</Link>
                </div>
            </div>
            <div className="login">
                <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-white text-sm py-1 px-2 bg-transparent border border-white rounded'>Logout</button>
            </div>
        </nav>
    );
};

export default Header;
