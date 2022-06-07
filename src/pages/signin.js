import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Input from '../component/input';
import Buttton from '../component/button';
import {useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { insertDataDatabase, signUpUser } from '../config/firebase/firebasemethods';
import { nanoid } from 'nanoid';

const theme = createTheme();

export default function SignIn() {


    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const [id,setId] = useState(nanoid());

    
    const navigate = useNavigate();
    const location = useLocation();
   
   const obj = {
       id,
       name,
       email,
       password
   }
   
    const signin = () => {

    //   if(name != '' && email != '' & password != '' ){
    //      navigate(`/dashboard/news`,{ state:obj })
    //  }else {
    //       setError(true)
    //  }
    if(!obj.email){
            return setError("email is required");
      }

      if(!obj.password && obj.password.length < 6){
           return setError("Password is required and Password must be greater than 6 character");
      }


     signUpUser(obj).then((success)=>{
      // console.log(success);
       insertDataDatabase('employee',obj,id)
      navigate(`/dashboard/news`,{ state:obj })
     }).catch((error)=>{
     // console.log(error);
     // setError(true);
     
     })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
        
          <Input change={e => { setName(e.target.value); }}   id="name"
              label="Name"
              name="Name"
              autoComplete="Name"
             />
          {/* <Typography component="h6" variant="h5">
            Please insert name
          </Typography> */}


          <Input change={e => { setEmail(e.target.value); }}  id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
             />
            {/* <Typography component="h6" variant="h5">
            Please insert Email
          </Typography> */}


          <Input  change={e => { setPassword(e.target.value); }}    name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
             />

         {error && 
        <div className="alert alert-primary" role="alert" >
         <Typography  variant="p" mx={10}>
          {error}
          </Typography>
          </div>
        }



            <Buttton click={() => signin()} name="Sign In" />
           
          </Box>
      </Container>
    </ThemeProvider>
  );
}