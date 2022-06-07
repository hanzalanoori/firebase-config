import {Typography} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import Comment from "../../component/comment";
import AcccessibleTable from "../../component/table";
import axios from "axios";
import React, { useState, useEffect } from "react";
import NewsCard from "../../component/newcard";





function Onenews(){

const [data,setData] = useState([]);
const location = useLocation();
const { source , publishedAt , content , urlToImage , title} = location.state



// useEffect(() => {
//  console.log(location.state)
// })




return <>
<div className="">

   
<div className="row mt-4">
        <div className="col-12">
           <div className="table-responsive">
           {/* <AcccessibleTable rows={rows} /> */}
           </div>
        </div>
    </div>


    <div className="row mt-4">
          <NewsCard   source={source} publishedAt={publishedAt} content={content} urlToImage={urlToImage} title={title} />
    </div>
   
   
</div>
 


</>
}

export default Onenews;