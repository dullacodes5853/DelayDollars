import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const TextContainer = styled(Box)({
  backgroundColor: 'rgba(255, 255, 255, 0.7)', // white with 70% opacity
  borderRadius: '10px', // rounded corners
  padding: '20px',
});

function PassengerRights() {
  return (
    <>
      <TextContainer m={4}>
        <Typography variant="h2" gutterBottom>
          Passenger Rights
        </Typography>
        <Typography variant="h6" paragraph>
          <strong>Introduction:</strong> As air travel continues to rise, flight disruptions have become a common inconvenience. LB
           However, about 85% of passengers are not aware of their rights during these disruptions. LB
           The Canadian Transportation Agency introduced the Air Passenger Protection Regulations (APPR) in 2019 to safeguard passengers. Yet, the complex claiming process and a lack of understanding prevent passengers from obtaining the compensation they are due. Our mission is to empower the air passengers by ensuring they get their rightful compensation.
        </Typography>
        <Typography variant="h4" paragraph>
          <strong>Breakdown of details:</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Breakdown of details:</strong>
          <div>
            <ul>
              <li>Business Relevant</li>
              <ul>
                <li>Types of disruption</li>
                <li>Eligibility criteria</li>
                <li>Compensation</li>
                <li>Claiming Process</li>
                <li>Time Limit for Claims</li>
              </ul>
              <li>Rights but Non-Relevant to Business</li>
              <ul>
                <li>Additional Rights</li>
                <li>Right to Care (End / Mention)</li>
              </ul>
            </ul>
          </div>
        </Typography>
      </TextContainer>
    </>
  );
}

export default PassengerRights;
