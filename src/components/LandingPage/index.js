import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import './landingpage.css';
import airportImage from '../../assets/airport.jpg'; // <-- Import image

function LandingPage() {
  const [fullName, setFullName] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('info');

  const handleSubmit = async (event) => {
    console.log("Form submitted");
    event.preventDefault();

    const userData = {
      fullName,
      ticketNumber,
      flightNumber,
      contact,
    };

    console.log('Submitting form with user data:', userData);

    try {
      console.log('Sending POST request to http://localhost:5001/register...');
      const response = await fetch('http://localhost:5001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      console.log('Fetch request sent, awaiting response...');
      
      const data = await response.json();

      console.log('Received response from server:', data);

      if (response.ok) {
        console.log('User registered successfully');
        // Clear the form after successful registration
        setFullName('');
        setTicketNumber('');
        setFlightNumber('');
        setContact('');
        setMessage('User registered successfully');
        setMessageType('success');
      } else {
        console.error('Failed to register user:', data.error);
        setMessage('Failed to register user');
        setMessageType('error');
      }
    } catch (error) { 
      console.error('Error during fetch operation:', error.message);
      setMessage('Error: Could not connect to the server');
      setMessageType('error');
    }
  };

  return (
    <div 
      className="landing-page"
      style={{ backgroundImage: `url(${airportImage})` }} // <-- Set image as background
    >
      <h2 className="custom-heading">DelayDollars</h2>
      <p className="p1">Your Payday for Flight Delays!</p>
      {message && <Alert severity={messageType}>{message}</Alert>}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="fullName"
              label="Full Name"
              variant="outlined"
              fullWidth
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="ticketNumber"
              label="Ticket Number"
              variant="outlined"
              fullWidth
              required
              value={ticketNumber}
              onChange={(e) => setTicketNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="flightNumber"
              label="Flight Number"
              variant="outlined"
              fullWidth
              required
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="contact"
              label="Contact"
              variant="outlined"
              fullWidth
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </Grid>
        </Grid> {/* <-- This was missing */}
        <FormControlLabel
          control={<Checkbox name="termsCheck" required />}
          label="I accept the terms and conditions"
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default LandingPage;