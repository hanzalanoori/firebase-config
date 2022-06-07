import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from "axios";
import React, { useState, useEffect } from "react";



export default function StandardImageList() {

  const [image, setImage] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos`,{
      params: {
        _limit: 18
       }
    }).then((response) => {
      setImage(response.data);
    });
  }, []);
  

  
  return (
    <ImageList sx={{height: 450 }} cols={3} rowHeight={164}>
      {image.map((item) => (
        <ImageListItem key={item.url}>
          <img
            src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

