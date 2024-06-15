import React, { useState } from 'react';
import '../../styles/navbar.css';

const Navbar = ({ handleHomeClick }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    // Reset form inputs
    setUserName('');
    setEmail('');
    setQuery('');
    setPhoneNumber('');
  };

  const handleSend = () => {
    // Logic to handle sending data (you can implement this)
    // After sending, close the popup
    closePopup();
  };

  const handleHome = () => {
    handleHomeClick(false); // Set playStatus to false when Home is clicked
  };

  return (
    <div className='nav'>
      <div className='nav-logo' onClick={handleHome}>Tranquil AI</div>
      <ul className='nav-menu'>
        <li onClick={handleHome}>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact' onClick={openPopup}>Contact Us</li>
      </ul>

      {isPopupOpen && (
        <div className='popup'>
          <div className='popup-content'>
            <span className='close' onClick={closePopup}>&times;</span>
            <h2>Contact Us</h2>
            <form>
              <input
                type='text'
                placeholder='Your Name'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className='form-input'
              />
              <input
                type='email'
                placeholder='Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='form-input'
              />
              <textarea
                placeholder='Your Query'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className='form-textarea'
              />
              <input
                type='tel'
                placeholder='Your Phone Number'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className='form-input'
              />
              <button type='button' onClick={handleSend} className='form-button'>Send</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
