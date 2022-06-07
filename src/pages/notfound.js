import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

function Notfound(){
return <>
<Typography >Notfound</Typography>
<ul>
<li>
<Link to='/'>Home</Link>
</li>


</ul>
</>
}

export default Notfound;