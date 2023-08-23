// import * as React from 'react';

// import { Typography, Box, Paper, Grid, TextField, Container, Button } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';

// import Toolbar from '@mui/material/Toolbar';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';

// export default function PayCard() {
//     const [showPassword, setShowPassword] = React.useState(false);
//     const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');
//     const [rememberMe, setRememberMe] = React.useState(false);
//     const [formCompleted, setFormCompleted] = React.useState(false);
  
//     const handleClickShowPassword = () => setShowPassword((show) => !show);
  
//     const handleMouseDownPassword = (event) => {
//       event.preventDefault();
//     };
  
//     const handleRememberMeChange = (event) => {
//       setRememberMe(event.target.checked);
//     };
  
//     const handleFormSubmit = () => {
//       const isFormValid = email !== '' && password !== '';
//       setFormCompleted(isFormValid);
//     };
  
//     React.useEffect(() => {
//       const isFormValid = email !== '' && password !== '';
//       setFormCompleted(isFormValid);
//     }, [email, password]);
  
//     return (
//         <Card sx={{display: 'flex',
//             width: '354px',
//             padding: '30px',
//             height:'100%',
//             maxHeight:'379px',
//             flexDirection: 'column',
//             alignItems: 'flex-start',
//             gap: '30px',
//             alignSelf: 'stretch'}}></Card>
//     );}
import React from 'react';
import { Button, Card, CardContent, Container, Paper, Typography,Link } from '@mui/material';
import { styled, withTheme } from '@mui/material/styles';
import bg_image3 from "../assets/main4.png";
const bill_amount=457.38;

const StCard = styled(Card)(({ theme }) => ({
    
    padding: theme.spacing(3),
    borderRadius: "10px",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${bg_image3})`,
      backgroundPosition: "50%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "inherit",
      borderRadius: '10px',

      zIndex: -1,
      
    },
  }));

const MainCard = styled(Card)(({ theme }) => ({
    margin: theme.spacing(3),
    height:'204px',maxHeight:"204px",
    backgroundColor:'transparent',
    boxShadow:'none'
  
  
}));

const TextContainer = styled(Container)(({ theme }) => ({
  height: '204px',
  width: '294px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
  
  padding: theme.spacing(2),
  
}));

const PayButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  width: '294px',
  
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
  backgroundColor: '#982737', // Setting the background color to the desired color
  color: 'white', // Setting the text color to white
  '&:hover': {
    backgroundColor: 'lightgrey',color:'black' // Setting the background color for the hover state
  },
 
  boxShadow: theme.shadows[2],
}));

const CardText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
 
}));

const App = () => {
  return (
    
    <StCard sx={{ height: '379px', width: '354px',borderRadius: '10px',backgroundColor:'rgba(187,221,240,0.5)',marginLeft:'30px',marginTop:'20px'
    }}>
       {/* <img className="img3" src={bg_image3} alt="" /> */}
      <MainCard>
        <CardText variant="body1">Amount Due</CardText>
        <CardText variant="h4">AED {bill_amount}</CardText>
        <CardText variant="body2">Bill Date: Feb 15, 2020</CardText>
        <Paper elevation={0} sx={{height:'20px',backgroundColor:'transparent'}}></Paper>
        <CardText variant="body1">Due Date</CardText>
        <CardText variant="h5">Mar 01, 2020</CardText>
      </MainCard>
      <TextContainer sx={{backgroundColor:'transparent'}}>
        <CardText variant="body1"><Link href="/signin"><PayButton variant="contained" primary='white' sx={{height:"42px",marginTop:'30px',backgroundColor:'#982737'}}>
        PAY BILL
      </PayButton></Link><Typography variant='h2' sx={{color: 'var(--body, #6C6C6C)',
          textAlign: 'center',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHight: 'normal',width:'294px',marginTop:'15px'}}>Last payment of AED 425.44 received Feb 19, 2020</Typography></CardText>  
      </TextContainer>
      
    </StCard>
  );
};

export default App;
