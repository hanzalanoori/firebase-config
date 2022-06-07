import {Typography} from "@mui/material";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Comment from "../../component/comment";
import AcccessibleTable from "../../component/table";
import axios from "axios";
import React, { useState, useEffect } from "react";
import NewsCard from "../../component/newcard";
import { getData } from "../../config/firebase/firebasemethods";





function News(){

const [data,setData] = useState([]);
const navigate = useNavigate();
const location = useLocation();

const axious = () =>{
  axios
    .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e3501801f212457484cb8d852a2e49d2`,{
      params: {
        _limit: 9
       }
    })
    .then(res => {
      setData(res.data.articles)
     // 
      //console.log(res.data.articles)
    })
    .catch(err => console.error(err));
}

useEffect(() => {

  if(location.state && location.state.password && location.state.email){
    navigate('/dashboard/news')
  }else{
    navigate('/')
  }
 
  
getData('employee');
  

  axious(); 
  
},[])



const click = (onenews) => {
 // console.log(data)
  navigate('/dashboard/onenews',{state:onenews})
}




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

    { data.map((news,Index) => (
          <NewsCard maxWidth={345} click={() => click(news)}  key={Index}   source={news.source} publishedAt={news.publishedAt} content={news.content} urlToImage={news.urlToImage} title={news.title} />
          ))}
       
    </div>
   
   
</div>
 


</>
}

export default News;