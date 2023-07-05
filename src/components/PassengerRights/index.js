import React from 'react';
import { Typography, Box } from '@mui/material';
import backgroundImage from "/Users/dullasiphone/delaydollar/src/assets/miss.jpg";

function PassengerRights() {
  return (
    <Box m={4} 
      sx={{
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // white with 70% opacity
        borderRadius: '10px', // rounded corners
        padding: '20px',
        overflow: 'hidden', // hide the :before pseudo-element outside of the box
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover', // make the image cover the entire container
          backgroundPosition: 'center', // center the image
          backgroundRepeat: 'no-repeat', // prevent image repetition
          filter: 'blur(10px)', // apply a blur effect to the pseudo-element
          transform: 'scale(1.1)', // scale up the pseudo-element to hide the blur edge
          zIndex: -1, // put the pseudo-element below the content
        }
      }}
    >
      <Typography variant="h4">Know your Passenger Rights</Typography>
      <Typography variant="body1">
        <div>
          <ul>
            <li sx={{fontSize: '1rem'}}>Business Relevant
              <ul>
                <li sx={{fontSize: '1rem'}}>Types of disruption</li>
                <li sx={{fontSize: '1rem'}}>Eligibility criteria</li>
                <li sx={{fontSize: '1rem'}}>Compensation</li>
                <li sx={{fontSize: '1rem'}}>Claiming Process</li>
                <li sx={{fontSize: '1rem'}}>Time Limit for Claims</li>
              </ul>
            </li>
            <li sx={{fontSize: '1rem'}}>Rights but Non-Relevant to Business
              <ul>
                <li sx={{fontSize: '1rem'}}>Additional Rights</li>
                <li sx={{fontSize: '1rem'}}>Right to Care (End / Mention)</li>
              </ul>
            </li>
          </ul>
        </div>
      </Typography>
    </Box>
  );
}

export default PassengerRights;
