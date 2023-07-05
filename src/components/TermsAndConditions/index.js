import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from 'src/assets/miss.jpg';

const Background = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100vw',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  filter: 'blur(8px)',
  zIndex: -1,
});

const TextContainer = styled(Box)({
  backgroundColor: 'rgba(255, 255, 255, 0.7)', // white with 70% opacity
  borderRadius: '10px', // rounded corners
  padding: '20px',
});

function TermsAndConditions() {
  return (
    <>
      <Background />
      <TextContainer m={4}>
        <Typography variant="h2" gutterBottom>
          Terms & Conditions
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Services:</strong> DelayDollars Corporation assists customers in seeking compensation from airlines due to flight disruptions. These disruptions include cancellations, delays, denied boarding, and missed connections.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Eligibility:</strong> Services are available to customers who have experienced a flight disruption under the jurisdiction of the Air Passenger Protection Regulations in Canada, the Montreal Convention rules set by the International Civil Aviation Organization, the European Parliament and Council Regulation (EC) No 261/2004, and the terms and conditions listed in the airline's Tariff.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Fees:</strong> Our services are provided on a no-win, no-fee basis. If we successfully recover compensation on your behalf, we will retain a commission fee of 20% of the recovered amount.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Power of Attorney:</strong> By engaging our services, you grant DelayDollars Corporation the authority to represent you in your compensation claim against the airline.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Communication:</strong> DelayDollars Corporation will keep you informed about the progress of your claim via email or other agreed-upon methods of communication. You agree to inform and forward all communication received by the Airline Company with regards to your claim within 14 days of receipt. In the event the airline processes the compensation directly to you, you are obliged to pay DelayDollars Corporation 20% of the compensation amount as agreed, via a method of payment mutually agreed upon, within 14 days of receipt.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Withdrawal and Termination:</strong> You have the right to withdraw and/or reassign your claim at any time after signing and submitting the Form. DelayDollars Corporation may also withdraw from the Compensation Service under circumstances that prevent the successful completion of your claim. In these cases, DelayDollars Corporation shall notify you and close your claim within 14 days. No fee will apply.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Your Obligations:</strong> You agree to provide all necessary information and documents required for us to represent you. You must ensure that all information provided is accurate and true to the best of your knowledge.
        </Typography>
        <Typography variant="body1" paragraph>
         <strong>Liability:</strong> Our liability for any loss or damage you suffer is limited to the amount you are entitled to recover as compensation for your flight disruption, and under no circumstances shall DelayDollars Corporation be responsible for indirect or consequential losses.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Privacy Policy:</strong> DelayDollars Corporation respects your privacy and will use the personal data provided by you only for the purpose of assisting you with your claim. We will not share your data with third parties without your consent, except as necessary to process your claim.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Changes to these Terms:</strong> DelayDollars Corporation may modify these terms and conditions at any time. Any changes will be communicated to you in advance and will become effective upon your acceptance.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Governing Law and Jurisdiction:</strong> These terms and conditions are governed by the laws of Canada, and disputes will be subject to the exclusive jurisdiction of the courts of Canada.
        </Typography>
      </TextContainer>
    </>
  );
}

export default TermsAndConditions;
