import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const PassengerRightsContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  padding: '2rem',
  color: 'white',
  backgroundImage: `url('/Users/dullasiphone/delaydollar/src/assets/miss.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  "&::before": {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: -1,
  },
}));

function PassengerRights() {
  return (
    <PassengerRightsContainer>
      <Typography variant="h4" gutterBottom>Know your Passenger Rights</Typography>
      <Typography variant="body1" component="div">
        <ul>
          <li>
            Business Relevant
            <ul>
              <li>Types of disruption</li>
              <li>Eligibility criteria</li>
              <li>Compensation</li>
              <li>Claiming Process</li>
              <li>Time Limit for Claims</li>
            </ul>
          </li>
          <li>
            Rights but Non-Relevant to Business
            <ul>
              <li>Additional Rights</li>
              <li>Right to Care (End / Mention)</li>
            </ul>
          </li>
        </ul>
      </Typography>
    </PassengerRightsContainer>
  );
}

export default PassengerRights;