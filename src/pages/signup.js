import { Box, Button, Grid, Typography } from "@mui/material"
import { Link, useLocation, useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import {useState} from "react";

function Signup(){

 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const navigate = useNavigate();
 const location = useLocation();

const obj = {
    name,
    email,
    password
}

 const signup = () => {
     navigate(`/profile/${email}`,{ state:obj })
 
 }




return(
    <>
    
     <div className="container">
         <div className="row">
             <div className="col-4 mx-auto my-auto">
             <Grid container>
    <Grid xl={5} p={1}>
        <Box sx={{marginBottom:1}}>
        <TextField id="standard-basic" onChange={e => { setName(e.target.value); }}  variant="standard" label="Enter Name" />
        </Box>
        <Box sx={{marginBottom:1}}>
        <TextField id="standard-basic"  onChange={(e) => setEmail(e.target.value)}  variant="standard" label="Enter Email" />
        </Box>
        <Box sx={{marginBottom:1}}>
        <TextField id="standard-basic" type="password" onChange={(e) => setPassword(e.target.value)}  variant="standard" label="Enter Password" />
        </Box>
        <Box sx={{marginBottom:1}}>
        <Button variant="outlined" onClick={(e) => signup()}>Signup</Button>
        </Box>                
    </Grid>            
</Grid>
             </div>

         </div>
     </div>
</>
)
}
export default Signup;