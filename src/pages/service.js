import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

function Service(){
return <>
<Typography >Service</Typography>
<ul>
<li>
<Link to='/'>Home</Link>
</li>
<li>
<Link to='/service'>service</Link>
</li>

</ul>
</>
}

export default Service;