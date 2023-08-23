// import * as React from 'react';
// import bg_image from "./assets/main1.png";
// import { Typography, Box, Paper, Grid, TextField, Container ,Button} from '@mui/material';
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
// import bg_image2 from "./assets/main2.png";
// import Toolbar from '@mui/material/Toolbar';









// // export default function BasicGrid() {
// //   const [showPassword, setShowPassword] = React.useState(false);

// //   const handleClickShowPassword = () => setShowPassword((show) => !show);

// //   const handleMouseDownPassword = (event) => {
// //     event.preventDefault();
  
  
// //   };
// export default function BasicGrid() {
//   const [showPassword, setShowPassword] = React.useState(false);
//   const [rememberMe, setRememberMe] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const handleRememberMeChange = (event) => {
//     setRememberMe(event.target.checked);
//   };
//   return (
//     <Box sx={{maxHeight:'800px'}}>
//       <Grid container sx={{gridRowGap: '0px',maxHeight:'800px'}} >
//         <Grid item xs={6} sx={{maxHeight:"100vh"}}>
//            <img className="img1" src={bg_image} alt="" style={{width:"712px",height:"100vh",maxHeight:"100vh"}}/> 
//         </Grid>
//         <Grid item xs={6}>
//         <Container sx={{marginLeft:'-10px',height:'800px',backgroundColor:'white'}}>
//           <Paper square elevation={0} sx={{display: 'flex',
//             width: '708px',
//             height: '113px',
//            marginLeft:'-25px',
//             justifyContent: 'center',
            
//             alignItems: 'center',background: '#1A455D'}} >  <img className="img2" src={bg_image2} alt="" /></Paper>
          
//             <Box sx={{display: "flex",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//                 marginLeft:'70px',
//                 width:"468px",height:"579px",
//                 alignSelf: "stretch", backgroundColor:"white",marginLeft:'15%'}}>
//                   <Paper elevation={0} sx={{display: 'flex',
//                     width: '728px',
//                     paddingBottom: '0px',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     height: '63px',
//                     flexShrink: '0',
//                     alignSelf: 'stretch'}}></Paper>
//             <Typography variant="body" component="h2" sx={{color: "var(--us-heading, #181818)",
//             fontSize: "36px",
//             fontStyle: "normal",
//             fontWeight: "400",height:"42px",width:"109px",marginBottom:'10px' /* 140% */}}>
//             SignIn
//           </Typography>
//           <Typography variant="body" component="h2" sx={{color: "var(--body, #6C6C6C)",
//             fontSize: "16px",
//             fontStyle: "normal",
//             fontWeight: "400",
//             lineHeight: "22.4px",height:"23px",width:"292px",marginBottom:'30px' /* 140% */}}>
//           Welcome back! Please enter your details.
//           </Typography>
//           {/* <Paper elevation={0} sx={{display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//               height: "30px",
//               alignSelf: "stretch",
//               backgroundColor:"transparent"}}></Paper> */}

              
//           <TextField
//           id="outlined-number"
//           label="Email*"
//           type="email"
//           InputLabelProps={{
//             shrink: true,
//           }} sx={{display: "flex",
//             marginBottom: "30px ",
//             flexDirection: "column",
           
//             alignSelf: "stretch",
//             borderRadius: "4px",
//             border: "1px solid var( rgba(0, 0, 0, 0.23))", height:"24px",width:"444px"}}
//         />
//         <Paper elevation={0} sx={{display: "flex",

// flexDirection: "column",
// alignItems: "flex-start",
// height: "30px",
// alignSelf: "stretch",
// backgroundColor:"transparent"}}></Paper>
      
// <FormControl  variant="outlined"sx={{  display: "flex",
               
//                 flexDirection: "column",    
//                 alignSelf: "stretch",
//                 borderRadius: "4px",
//                 border: "1px solid var( rgba(0, 0, 0, 0.23))",height:"24px",width:"444px",paddingBottom:'40px'}}>
//           <InputLabel htmlFor="outlined-adornment-password" >Password*</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-password"
//             type={ 'password'}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//             label="Password"
//           />
                
                
      
//         </FormControl>
//         <Box sx={{ flexGrow: 1 }}>
     
//         <Toolbar sx={{display: "flex",
// justifyContent: "center",
// alignItems: "center",
// gap: "20vh",
// alignSelf: "stretch" , textDecoration:"none"}}>
          
//           {/* <FormGroup>
//             <FormControlLabel control={<Checkbox/>}sx={{color: 'grey',


// fontSize: '14px',
// fontStyle: 'normal',
// fontWeight: '400',
// lineHeight: '150%', 
// }} label="Remember Me" />
//             </FormGroup> */}
//             <FormGroup>
//         <FormControlLabel
//           control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} />}
//           sx={{
//             color: rememberMe ? '#982737' : 'grey',
//             fontSize: '14px',
//             fontStyle: 'normal',
//             fontWeight: '400',
//             lineHeight: '150%',
//           }}
//           label="Remember Me"
//         />
//       </FormGroup>
//           <Link href="#" underline="none" sx={{color: "#982737",
// textAlign: "right",
// fontFamily: "Roboto",
// fontSize: "14px",
// fontStyle: "normal",
// fontWeight: "400",
// lineHeight: "20.9px",
// // height:"auto",width:"100%"

//  }}>Forgot Password?</Link>
//         </Toolbar> 
//     </Box>
    
//     <Button  variant="text" sx={{display: 'flex',
//                 padding: '8px 22px',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 alignSelf: 'stretch', 
//                 color: 'var(--action-disabled, rgba(0, 0, 0, 0.38))',
//                 fontFeatureSettings:"'clig' off, 'liga' off",
//                 marginTop:'-40px',
//                 /* components/button-large */
//                 fontFamily: 'Roboto',
//                 fontSize: '15px',
//                 fontStyle: 'normal',
//                 fontWeight: '500',
//                 lineHeight: '26px', /* 173.333% */
//                 letterSpacing: '0.46px',
//                 textTransform: 'uppercase', 
//                 marginTop:'20px',borderRadius: '4px',
//                 background: 'var(--action-disabled-background, rgba(0, 0, 0, 0.12))',width:"444px"}}>SIGN IN</Button>

    
               
// <Box sx={{ flexGrow: 1 }}>
     
// <Toolbar sx={{display: "flex",
//          justifyContent: "center",
//          alignItems: "center",
//          alignSelf: "stretch" , textDecoration:"none"}}>
       
//        <Typography sx={{marginLeft:'100px',color: 'var(--grayscale-2, #7D7D7D)',
//          textAlign: 'center',
//          fontFamily: 'Roboto',
//          fontSize: '14px',
//          fontStyle: 'normal',
//          fontWeight: '400',
//          lineHeight: '140%', /* 19.6px */}}>
//            Not registered yet?
//          </Typography>
//                    <Link href="#" underline="none" sx={{color: "#982737",
//                            textAlign: "right",
//                            fontFamily: "Roboto",
//                            fontSize: "14px",
//                            fontStyle: "normal",
//                            fontWeight: "400",
//                            lineHeight: "20.9px",
//                    }}>Sign up here</Link>
//                  </Toolbar>
//              </Box>
 
  
 
//   <Typography sx={{color:'#1A455D',
//             fontFamily: 'Roboto',
//             fontSize: '16px',
//             fontStyle:  'normal',
//             fontWeight: '400',
//             lineHeight: 'normal',
//             }}>
//             Pay without signing in? 
//             </Typography>
            
//             <Toolbar sx={{display: "flex",
//          justifyContent: "center",
//          alignItems: "center",
//          alignSelf: "stretch" , textDecoration:"none"}}>
       
//        <Typography sx={{marginLeft:'-105px',color: 'var(--grayscale-2, #7D7D7D)',
//          textAlign: 'center',
//          fontFamily: 'Roboto',
//          fontSize: '14px',
//          fontStyle: 'normal',
//          fontWeight: '400',
//          lineHeight: '140%', /* 19.6px */}}>
//           To make an online payment without signing in, please 
//          </Typography>
//                    <Link href="#" underline="none" sx={{color: "#982737",
//                            textAlign: "right",
//                            fontFamily: "Roboto",
//                            fontSize: "14px",
//                            fontStyle: "normal",
//                            fontWeight: "400",
//                            lineHeight: "20.9px",
//                    }}>Click here</Link>
                   
//                  </Toolbar>
                 
//             </Box>

          
               

//           </Container>
           

//         </Grid>
//         </Grid>
//     </Box>
          

//   );
// }

// import * as React from 'react';
// import bg_image from "./assets/main1.png";
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
// import bg_image2 from "./assets/main2.png";
// import Toolbar from '@mui/material/Toolbar';

// export default function BasicGrid() {
//   const [showPassword, setShowPassword] = React.useState(false);
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [rememberMe, setRememberMe] = React.useState(false);
//   const [formCompleted, setFormCompleted] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);
//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const handleRememberMeChange = (event) => {
//     setRememberMe(event.target.checked);
//   };

//   const handleFormSubmit = () => {
//     const isFormValid = email !== '' && password !== '';
//     setFormCompleted(isFormValid);
//   };

//   React.useEffect(() => {
//     const isFormValid = email !== '' && password !== '';
//     setFormCompleted(isFormValid);
//   }, [email, password]);

//   return (
//     <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//       <Container>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <img className="img1" src={bg_image} alt="" style={{ width: "100%", height: "auto", maxHeight: "100%" }} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Paper square elevation={0} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#1A455D', height: 113 }}>
//               <img className="img2" src={bg_image2} alt="" />
//             </Paper>
//             <Box sx={{ p: 3 }}>
//               <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
//                 SignIn
//               </Typography>
//               <Typography variant="body1" sx={{ color: "#6C6C6C", textAlign: 'center', mb: 4 }}>
//                 Welcome back! Please enter your details.
//               </Typography>

//               <TextField
//                 label="Email*"
//                 type="email"
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//                 sx={{
//                   width: '100%',
//                   marginBottom: 2,
//                 }}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <FormControl variant="outlined" sx={{ width: '100%', marginBottom: 2 }}>
//                 <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
//                 <OutlinedInput
//                   id="outlined-adornment-password"
//                   type={showPassword ? 'text' : 'password'}
//                   endAdornment={
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={handleClickShowPassword}
//                         onMouseDown={handleMouseDownPassword}
//                         edge="end"
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   }
//                   label="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </FormControl>

//               <FormGroup sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
//                 <FormControlLabel
//                   control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} />}
//                   sx={{
//                     fontSize: '14px',
//                     fontWeight: '400',
//                   }}
//                   label="Remember Me"
//                 />
//                 <Link href="#" underline="none" sx={{ color: "#982737", fontSize: '14px', fontWeight: '400' }}>
//                   Forgot Password?
//                 </Link>
//               </FormGroup>

//               <Button
//                 variant="contained"
//                 sx={{
//                   width: '100%',
//                   padding: '10px 22px',
//                   fontSize: '15px',
//                   fontWeight: '500',
//                   textTransform: 'uppercase',
//                   borderRadius: '4px',
//                   backgroundColor: formCompleted ? '#982737' : 'var(--action-disabled-background, rgba(0, 0, 0, 0.12))',
//                 }}
//                 onClick={handleFormSubmit}
//               >
//                 SIGN IN
//               </Button>

//               <Box sx={{ mt: 2, textAlign: 'center' }}>
//                 <Typography variant="body1" sx={{ color: '#7D7D7D', mb: 1 }}>
//                   Not registered yet?
//                 </Typography>
//                 <Link href="#" underline="none" sx={{ color: "#982737", fontSize: '14px', fontWeight: '400' }}>
//                   Sign up here
//                 </Link>
//               </Box>

//               <Box sx={{ mt: 2, textAlign: 'center' }}>
//                 <Typography variant="body1" sx={{ color: '#1A455D', mb: 1 }}>
//                   Pay without signing in?
//                 </Typography>
//                 <Link href="#" underline="none" sx={{ color: "#982737", fontSize: '14px', fontWeight: '400' }}>
//                   Click here
//                 </Link>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }






//responsive 1
// import * as React from 'react';
// import bg_image from "./assets/main1.png";
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
// import bg_image2 from "./assets/main2.png";
// import Toolbar from '@mui/material/Toolbar';

// export default function BasicGrid() {
//   const [showPassword, setShowPassword] = React.useState(false);
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [rememberMe, setRememberMe] = React.useState(false);
//   const [formCompleted, setFormCompleted] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);
//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const handleRememberMeChange = (event) => {
//     setRememberMe(event.target.checked);
//   };

//   const handleFormSubmit = () => {
//     const isFormValid = email !== '' && password !== '';
//     setFormCompleted(isFormValid);
//   };

//   React.useEffect(() => {
//     const isFormValid = email !== '' && password !== '';
//     setFormCompleted(isFormValid);
//   }, [email, password]);

//   return (
//     <Box sx={{ maxHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <img className="img1" src={bg_image} alt="" style={{ width: "100%", height: "auto", maxHeight: "100%" }} />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Paper square elevation={0} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#1A455D', height: 113 }}>
//               <img className="img2" src={bg_image2} alt="" />
//             </Paper>
//             <Box sx={{ p: 3 }}>
//               <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
//                 SignIn
//               </Typography>
//               <Typography variant="body1" sx={{ color: "#6C6C6C", textAlign: 'center', mb: 4 }}>
//                 Welcome back! Please enter your details.
//               </Typography>

//               <TextField
//                 label="Email*"
//                 type="email"
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//                 sx={{
//                   width: '100%',
//                   marginBottom: 2,
//                 }}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <FormControl variant="outlined" sx={{ width: '100%', marginBottom: 2 }}>
//                 <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
//                 <OutlinedInput
//                   id="outlined-adornment-password"
//                   type={showPassword ? 'text' : 'password'}
//                   endAdornment={
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={handleClickShowPassword}
//                         onMouseDown={handleMouseDownPassword}
//                         edge="end"
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   }
//                   label="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </FormControl>

//               <FormGroup sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
//                 <FormControlLabel
//                   control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} />}
//                   sx={{
//                     fontSize: '14px',
//                     fontWeight: '400',
//                   }}
//                   label="Remember Me"
//                 />
//                 <Link href="#" underline="none" sx={{ color: "#982737", fontSize: '14px', fontWeight: '400' }}>
//                   Forgot Password?
//                 </Link>
//               </FormGroup>

//               <Button
//                 variant="contained"
//                 sx={{
//                   width: '100%',
//                   padding: '10px 22px',
//                   fontSize: '15px',
//                   fontWeight: '500',
//                   textTransform: 'uppercase',
//                   borderRadius: '4px',
//                   backgroundColor: formCompleted ? '#982737' : 'var(--action-disabled-background, rgba(0, 0, 0, 0.12))',
//                 }}
//                 onClick={handleFormSubmit}
//               >
//                 SIGN IN
//               </Button>

//               <Box sx={{ mt: 2, textAlign: 'center' }}>
//                 <Typography variant="body1" sx={{ color: '#7D7D7D', mb: 1 }}>
//                   Not registered yet?
//                 </Typography>
//                 <Link href="#" underline="none" sx={{ color: "#982737", fontSize: '14px', fontWeight: '400' }}>
//                   Sign up here
//                 </Link>
//               </Box>

//               <Box sx={{ mt: 2, textAlign: 'center' }}>
//                 <Typography variant="body1" sx={{ color: '#1A455D', mb: 1 }}>
//                   Pay without signing in?
//                 </Typography>
//                 <Link href="#" underline="none" sx={{ color: "#982737", fontSize: '14px', fontWeight: '400' }}>
//                   Click here
//                 </Link>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// import * as React from 'react';
// import bg_image from "./assets/main1.png";
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
// import bg_image2 from "./assets/main2.png";
// import Toolbar from '@mui/material/Toolbar';

// export default function BasicGrid() {
//   const [showPassword, setShowPassword] = React.useState(false);
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [rememberMe, setRememberMe] = React.useState(false);
//   const [formCompleted, setFormCompleted] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const handleRememberMeChange = (event) => {
//     setRememberMe(event.target.checked);
//   };

//   const handleFormSubmit = () => {
//     const isFormValid = email !== '' && password !== '';
//     setFormCompleted(isFormValid);
//   };

//   React.useEffect(() => {
//     const isFormValid = email !== '' && password !== '';
//     setFormCompleted(isFormValid);
//   }, [email, password]);

//   return (
//     <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={0}>
//           <Grid item xs={12} sm={6}>
//             <img className="img1" src={bg_image} alt="" style={{ width: "100%", height: "auto", maxHeight: "100%" }} />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Paper square elevation={0} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#1A455D', height: 113 }}>
//               <img className="img2" src={bg_image2} alt="" />
//             </Paper>
//             <Box sx={{ p: 3 }}>
//               <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
//                 SignIn
//               </Typography>
//               <Typography variant="body1" sx={{ color: "#6C6C6C", textAlign: 'center', mb: 4 }}>
//                 Welcome back! Please enter your details.
//               </Typography>

//               <TextField
//                 label="Email*"
//                 type="email"
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//                 sx={{
//                   width: '100%',
//                   marginBottom: 2,
//                 }}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <FormControl variant="outlined" sx={{ width: '100%', marginBottom: 2 }}>
//                 <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
//                 <OutlinedInput
//                   id="outlined-adornment-password"
//                   type={showPassword ? 'text' : 'password'}
//                   endAdornment={
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={handleClickShowPassword}
//                         onMouseDown={handleMouseDownPassword}
//                         edge="end"
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   }
//                   label="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </FormControl>

//               <FormGroup sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
//                 <FormControlLabel
//                   control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} />}
//                   sx={{
//                     fontSize: '14px',
//                     fontWeight: '400',
//                   }}
//                   label="Remember Me"
//                 />
//                 <Link href="#" underline="none" sx={{ color: "#982737", fontSize: '14px', fontWeight: '400' }}>
//                   Forgot Password?
//                 </Link>
//               </FormGroup>

//               <Button
//                 variant="contained"
//                 sx={{
//                   width: '100%',
//                   padding: '10px 22px',
//                   fontSize: '15px',
//                   fontWeight: '500',
//                   textTransform: 'uppercase',
//                   borderRadius: '4px',
//                   backgroundColor: formCompleted ? '#982737' : 'var(--action-disabled-background, rgba(0, 0, 0, 0.12))',
//                 }}
//                 onClick={handleFormSubmit}
//               >
//                 SIGN IN
//               </Button>
//               <Box sx={{ flexGrow: 1 }}>
//                 <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center", alignSelf: "stretch", textDecoration: "none" }}>
//                   <Typography sx={{ marginLeft: '100px', color: 'var(--grayscale-2, #7D7D7D)', textAlign: 'center', fontFamily: 'Roboto', fontSize: '14px', fontStyle: 'normal', fontWeight: '400', lineHeight: '140%' }}>
//                     Not registered yet?
//                   </Typography>
//                   <Link href="#" underline="none" sx={{ color: "#982737", textAlign: "right", fontFamily: "Roboto", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "20.9px" }}>Sign up here</Link>
//                 </Toolbar>
//               </Box>

//               <Typography sx={{ color: '#1A455D', fontFamily: 'Roboto', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>
//                 Pay without signing in?
//               </Typography>

//               <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center", alignSelf: "stretch", textDecoration: "none" }}>
//                 <Typography sx={{ marginLeft: '-35%', color: 'var(--grayscale-2, #7D7D7D)', textAlign: 'center', fontFamily: 'Roboto', fontSize: '14px', fontStyle: 'normal', fontWeight: '400', lineHeight: '140%' }}>
//                   To make an online payment without signing in, please
//                 </Typography>
//                 <Link href="#" underline="none" sx={{ color: "#982737", textAlign: "right", fontFamily: "Roboto", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "20.9px" }}>Click here</Link>
//               </Toolbar>

              
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }



import * as React from 'react';
import bg_image from "./assets/main1.png";
import { Typography, Box, Paper, Grid, TextField, Container, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import bg_image2 from "./assets/main2.png";
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { useNavigate } from 'react-router-dom';
// import { setEmail } from "./features/gitUserSlice"

export default function BasicGrid() {
  const [name,setName]=useState("")
  const [email,setEmailIn]=useState("")
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  // const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const [formCompleted, setFormCompleted] = React.useState(false);
  const [pass, setPass] = React.useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(login({
      email: email,
      password: pass,
      loggedIn:true,
    }));
    homePage();
  };
  const navigate = useNavigate();
  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleFormSubmit = () => {
    const isFormValid = email !== '' && pass !== '';
    setFormCompleted(isFormValid);
  };
  const homePage = () => {
    navigate('/main/Git');
  }
  
  const [isValidPass, setIsValidPass] = useState(false);
  const validatePass = (inputPass) => {
    const emailRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;
    return emailRegex.test(inputPass);
  };
  
  const NewPass=(event)=>{
    const newPass = event.target.value;
    setPass(newPass);
    setIsValidPass(validatePass(newPass));
    }



  React.useEffect(() => {
    const isFormValid = isValidPass == true && email !== '' ;
    setFormCompleted(isFormValid);
  }, [email, pass]);
  console.log(name,email);
  return (
    <Box sx={{ minHeight: '97vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
     
        <Grid container sx={{ gridRowGap: '0px', flexDirection: { xs: 'column-reverse', md: 'row' } }}>
          <Grid item xs={12} md={6} sx={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
            <img className="img1" src={bg_image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Paper square elevation={0} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#1A455D', height: 113 }}>
              <img className="img2" src={bg_image2} alt="" />
            </Paper>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: '70px', width: "468px", height: "579px", alignSelf: "stretch", backgroundColor: "white", marginLeft: '15%',p:3 }}>
              <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '30px', alignSelf: 'stretch', backgroundColor: 'transparent' }}></Paper>
              <Typography variant="body" component="h2" sx={{ color: "var(--us-heading, #181818)", fontSize: "36px", fontStyle: "normal", fontWeight: "400", height: "42px", width: "109px", marginBottom: '10px' }}>
                SignIn
              </Typography>
              <Typography variant="body" component="h2" sx={{ color: "var(--body, #6C6C6C)", fontSize: "16px", fontStyle: "normal", fontWeight: "400", lineHeight: "22.4px", height: "23px", width: "292px", marginBottom: '30px' }}>
                Welcome back! Please enter your details.
              </Typography>

              <TextField
                id="outlined-number"
                label="Email*"
                type="email"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  display: "flex",
                  marginBottom: "30px ",
                  flexDirection: "column",
                  alignSelf: "stretch",
                  borderRadius: "4px",
                  border: "1px solid var( rgba(0, 0, 0, 0.23))",
                  height: "24px",
                  width: "444px",
                }}
                value={email}
                onChange={(e) => setEmailIn(e.target.value)}
              />

              <Paper elevation={0} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "30px", alignSelf: "stretch", backgroundColor: "transparent" }}></Paper>

              <FormControl variant="outlined" sx={{ display: "flex", flexDirection: "column", alignSelf: "stretch", borderRadius: "4px", border: "1px solid var( rgba(0, 0, 0, 0.23))", height: "24px", width: "444px", paddingBottom: '40px' }}>
                <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  onChange={
                    NewPass
                    // handleInputChange()
                  }
                  error={!isValidPass}
                  helperText={!isValidPass && 'Please enter a valid Password'}
                  label="Password"
                  value={pass}
                />
              </FormControl>

              <Box sx={{ flexGrow: 1 }}>
                <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20vh", alignSelf: "stretch", textDecoration: "none" }}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} />}
                      sx={{
                        color: rememberMe ? '#982737' : 'grey',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '150%',
                      }}
                      label="Remember Me"
                    />
                  </FormGroup>
                  <Link href="/new" underline="none" sx={{ color: "#982737", textAlign: "right", fontFamily: "Roboto", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "20.9px" }}>NewCard</Link>
                </Toolbar>
              </Box>
              <Link href="/Git">
              <Button
                variant="text"
                sx={{
                  display: 'flex',
                  padding: '8px 22px',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  color: 'var(--action-disabled, rgba(0, 0, 0, 0.38))',
                  fontFeatureSettings: "'clig' off, 'liga' off",
                  marginTop: '-40px',
                  fontFamily: 'Roboto',
                  fontSize: '15px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '26px',
                  letterSpacing: '0.46px',
                  textTransform: 'uppercase',
                  marginTop: '20px',
                  borderRadius: '4px',
                  background: formCompleted ? '#982737' : 'var(--action-disabled-background, rgba(0, 0, 0, 0.12))',
                  width: "444px"
                }}
               onClick={((e) => handleSignIn(e))}
               onSubmit={handleFormSubmit}
              >
                SIGN IN
              </Button></Link>

              <Box sx={{ flexGrow: 1 }}>
              <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center", alignSelf: "stretch", textDecoration: "none" }}>
                  <Typography sx={{ marginLeft: '100px', color: 'var(--grayscale-2, #7D7D7D)', textAlign: 'center', fontFamily: 'Roboto', fontSize: '14px', fontStyle: 'normal', fontWeight: '400', lineHeight: '140%' }}>
                    Not registered yet?
                  </Typography>
                  <Link href="/Git" underline="none" sx={{ color: "#982737", textAlign: "right", fontFamily: "Roboto", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "20.9px" }}>Sign up here</Link>
                </Toolbar>
              </Box>

              <Typography sx={{ color: '#1A455D', fontFamily: 'Roboto', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>
                Pay without signing in?
              </Typography>

              <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center", alignSelf: "stretch", textDecoration: "none" }}>
              <Typography sx={{ marginLeft: '-105px', color: 'var(--grayscale-2, #7D7D7D)', textAlign: 'center', fontFamily: 'Roboto', fontSize: '14px', fontStyle: 'normal', fontWeight: '400', lineHeight: '140%' }}>
                  To make an online payment without signing in, please
                </Typography>
                <Link href="#" underline="none" sx={{ color: "#982737", textAlign: "right", fontFamily: "Roboto", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "20.9px" }}>Click here</Link>
              </Toolbar>
            </Box>
        
        </Grid>
      </Grid>
    </Box>
  );
}


// import * as React from 'react';
// import bg_image from "./assets/main1.png";
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
// import bg_image2 from "./assets/main2.png";
// import Toolbar from '@mui/material/Toolbar';

// export default function BasicGrid() {
//   const [showPassword, setShowPassword] = React.useState(false);
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [formCompleted, setFormCompleted] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const handleRememberMeChange = (event) => {
//     // Implement your logic for handling the "Remember Me" checkbox here, if needed
//   };

//   const handleFormSubmit = () => {
//     // Perform form submission logic here
//     // For demonstration purposes, let's assume the form is valid when email and password are filled
//     const isFormValid = email !== '' && password !== '';
//     setFormCompleted(isFormValid);
//   };

//   return (
//     <Box sx={{ maxHeight: '800px' }}>
//       <Grid container sx={{ gridRowGap: '0px', maxHeight: '800px' }}>
//         <Grid item xs={6} sx={{ maxHeight: "100vh" }}>
//           <img className="img1" src={bg_image} alt="" style={{ width: "712px", height: "100vh", maxHeight: "100vh" }} />
//         </Grid>
//         <Grid item xs={6}>
//           <Container sx={{ marginLeft: '-10px', height: '800px', backgroundColor: 'lightcoral' }}>
//             <Paper square elevation={0} sx={{ display: 'flex', width: '708px', height: '113px', marginLeft: '-25px', justifyContent: 'center', alignItems: 'center', background: '#1A455D' }}>
//               <img className="img2" src={bg_image2} alt="" />
//             </Paper>
//             <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: '70px', width: "468px", height: "579px", alignSelf: "stretch", backgroundColor: "white", marginLeft: '15%' }}>
//               <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '30px', alignSelf: 'stretch', backgroundColor: 'transparent' }}></Paper>
//               <Typography variant="body" component="h2" sx={{ color: "var(--us-heading, #181818)", fontSize: "36px", fontStyle: "normal", fontWeight: "400", height: "42px", width: "109px", marginBottom: '10px' }}>
//                 SignIn
//               </Typography>
//               <Typography variant="body" component="h2" sx={{ color: "var(--body, #6C6C6C)", fontSize: "16px", fontStyle: "normal", fontWeight: "400", lineHeight: "22.4px", height: "23px", width: "292px", marginBottom: '30px' }}>
//                 Welcome back! Please enter your details.
//               </Typography>

//               <TextField
//                 id="outlined-number"
//                 label="Email*"
//                 type="email"
//                 InputLabelProps={{
//                   shrink: true,
//                 }}
//                 sx={{
//                   display: "flex",
//                   marginBottom: "30px ",
//                   flexDirection: "column",
//                   alignSelf: "stretch",
//                   borderRadius: "4px",
//                   border: "1px solid var( rgba(0, 0, 0, 0.23))",
//                   height: "24px",
//                   width: "444px",
//                 }}
//                 value={email} // Bind the value to the email state
//                 onChange={(e) => setEmail(e.target.value)} // Update the email state on input change
//               />

//               <Paper elevation={0} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", height: "30px", alignSelf: "stretch", backgroundColor: "transparent" }}></Paper>

//               <FormControl variant="outlined" sx={{ display: "flex", flexDirection: "column", alignSelf: "stretch", borderRadius: "4px", border: "1px solid var( rgba(0, 0, 0, 0.23))", height: "24px", width: "444px", paddingBottom: '40px' }}>
//                 <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
//                 <OutlinedInput
//                   id="outlined-adornment-password"
//                   type={showPassword ? 'text' : 'password'}
//                   endAdornment={
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={handleClickShowPassword}
//                         onMouseDown={handleMouseDownPassword}
//                         edge="end"
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   }
//                   label="Password"
//                   value={password} // Bind the value to the password state
//                   onChange={(e) => setPassword(e.target.value)} // Update the password state on input change
//                 />
//               </FormControl>

//               <Box sx={{ flexGrow: 1 }}>
//                 <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20vh", alignSelf: "stretch", textDecoration: "none" }}>
//                   <FormGroup>
//                     <FormControlLabel
//                       control={<Checkbox checked={formCompleted} onChange={handleRememberMeChange} />}
//                       sx={{
//                         color: formCompleted ? '#982737' : 'grey',
//                         fontSize: '14px',
//                         fontStyle: 'normal',
//                         fontWeight: '400',
//                         lineHeight: '150%',
//                       }}
//                       label="Remember Me"
//                     />
//                   </FormGroup>
//                   <Link href="#" underline="none" sx={{ color: "#982737", textAlign: "right", fontFamily: "Roboto", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "20.9px" }}>Forgot Password?</Link>
//                 </Toolbar>
//               </Box>

//               <Button
//                 variant="text"
//                 sx={{
//                   display: 'flex',
//                   padding: '8px 22px',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   alignSelf: 'stretch',
//                   color: 'var(--action-disabled, rgba(0, 0, 0, 0.38))',
//                   fontFeatureSettings: "'clig' off, 'liga' off",
//                   marginTop: '-40px',
//                   fontFamily: 'Roboto',
//                   fontSize: '15px',
//                   fontStyle: 'normal',
//                   fontWeight: '500',
//                   lineHeight: '26px',
//                   letterSpacing: '0.46px',
//                   textTransform: 'uppercase',
//                   marginTop: '20px',
//                   borderRadius: '4px',
//                   background: formCompleted ? '#982737' : 'var(--action-disabled-background, rgba(0, 0, 0, 0.12))',
//                   width: "444px"
//                 }}
//                 onClick={handleFormSubmit}
//               >
//                 SIGN IN
//               </Button>

//               <Box sx={{ flexGrow: 1 }}>
//                 <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center", alignSelf: "stretch", textDecoration: "none" }}>
//                   <Typography sx={{ marginLeft: '100px', color: 'var(--grayscale-2, #7D7D7D)', textAlign: 'center', fontFamily: 'Roboto', fontSize: '14px', fontStyle: 'normal', fontWeight: '400', lineHeight: '140%' }}>
//                     Not registered yet?
//                   </Typography>
//                   <Link href="#" underline="none" sx={{ color: "#982737", textAlign: "right", fontFamily: "Roboto", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "20.9px" }}>Sign up here</Link>
//                 </Toolbar>
//               </Box>

//               <Typography sx={{ color: '#1A455D', fontFamily: 'Roboto', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>
//                 Pay without signing in?
//               </Typography>

//               <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center", alignSelf: "stretch", textDecoration: "none" }}>
//                 <Typography sx={{ marginLeft: '-105px', color: 'var(--grayscale-2, #7D7D7D)', textAlign: 'center', fontFamily: 'Roboto', fontSize: '14px', fontStyle: 'normal', fontWeight: '400', lineHeight: '140%' }}>
//                   To make an online payment without signing in, please
//                 </Typography>
//                 <Link href="#" underline="none" sx={{ color: "#982737", textAlign: "right", fontFamily: "Roboto", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "20.9px" }}>Click here</Link>
//               </Toolbar>
//             </Box>
//           </Container>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }




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
// import bg_image2 from "./assets/main2.png";
// import Toolbar from '@mui/material/Toolbar';



//   return (
//     <Box sx={{ maxHeight: '800px' }}>
//       {/* ... Rest of your JSX code ... */}
      
//       {}
//     </Box>
//   );
// }
