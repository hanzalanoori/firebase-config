import {Typography} from "@mui/material";
import {Link, useLocation, useParams} from "react-router-dom";

function Profile(){

    const param = useParams();
    const location = useLocation();
    console.log(param)

return <>
<Typography >Get Value id = {param.id}</Typography>
<Typography >Profile Name = {location.state.name}</Typography>
<Typography >Profile Email = {location.state.email}</Typography>
<Typography >Profile Password = {location.state.password}</Typography>


</>
}

export default Profile;