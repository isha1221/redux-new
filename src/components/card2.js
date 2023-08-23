import React from 'react';
import { Button, Card, CardContent, Typography,Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const BillCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  padding: '30px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap:'10px',
  alignSelf: 'stretch',
  borderRadius: '10px',
  background: 'rgba(199, 218, 227, 0.37)',
  height: '369px',
  width: '348px',
  marginTop:'20px',
  marginLeft:'200px'
}));

const BillDetailText = styled(Typography)(({ theme }) => ({
   
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '100%',
  marginBottom:'10px'
}));

const Row = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}));

const LeftText = styled(Typography)(({ theme }) => ({
   
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '22.4px',
}));

const RightText = styled(Typography)(({ theme }) => ({
   
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '100%',
}));



const DownloadButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  padding: '8px 22px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  borderRadius: '4px',
  border: '1px solid var(--red, #982737)',
  color: '#982737'
}));

const ViewBillText = styled(Typography)(({ theme }) => ({
  color: 'var(--body, #6C6C6C)',
  textAlign: 'center',
   
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  width: '354px',
  marginTop:'10px'
}));

const App = () => {
  return (
    <BillCard>
      <BillDetailText sx={{ fontWeight: '700' }}>Bill Details</BillDetailText>
      <Row>
        <LeftText sx={{ fontWeight: '400' }}>Balance forward:</LeftText>
        <RightText>0.00</RightText>
      </Row>
      <Row style={{ marginTop: '10px' }}>
        <LeftText sx={{ color: 'gray' }}>Previous Balance:</LeftText>
        <RightText sx={{ color: 'gray' }}>457.38</RightText>
      </Row>
      <Row style={{ marginTop: '3px' }}>
        <LeftText sx={{ color: 'gray' }}>Payments/Adjustments:</LeftText>
        <RightText sx={{ color: 'gray' }}>457.38</RightText>
      </Row>
      <Row style={{ marginTop: '15px' }}>
        <LeftText>Current charges:</LeftText>
        <RightText>457.38</RightText>
      </Row>
      <hr style={{backgroundColor:'gray', height:'1px', width: '354px'}}></hr>
      <Row style={{ marginTop: '10px' }}>
        <LeftText>Total charges:</LeftText>
        <RightText>457.38</RightText>
      </Row>
      <Link href="/"><DownloadButton style={{ marginTop: '30px' }} variant="outlined" primary='white'>
        DOWNLOAD BILL (PDF)
      </DownloadButton></Link>
      <ViewBillText>For detailed charges and program credits select view detailed bill.</ViewBillText>
    </BillCard>
  );
};

export default App;


