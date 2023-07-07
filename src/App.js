import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '/components/LandingPage/index';
import PassengerRights from '/Users/dullasiphone/delaydollar/src/components/PassengerRights/index.js';
import TermsAndConditions from '/Users/dullasiphone/delaydollar/src/components/TermsAndConditions/index.js';
import Navbar from './components/Navbar/index';

function App() {
  const [fullName, setFullName] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      fullName,
      ticketNumber,
      flightNumber,
      contact,
    };

    console.log('Submitting form with user data:', userData);

    try {
      const response = await fetch('http://localhost:5001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log('Received response from server:', data);

      if (response.ok) {
        console.log('User registered successfully');
        setFullName('');
        setTicketNumber('');
        setFlightNumber('');
        setContact('');
      } else {
        console.error('Failed to register user:', data.error);
      }
    } catch (error) {
      console.error('Error during fetch operation:', error.message);
    }
  };

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/passenger-rights" element={<PassengerRights />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

