import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import StandardImageList from './image';

export default function Carddiv(props) {
  return (
<>

  
    {props.imagelist ? (
    <div className='score-section'>
    <Card>
    <CardActionArea>     
      <CardContent>
      <StandardImageList/>  
      </CardContent>
    </CardActionArea>     
  </Card>

    </div>
  ) : (
    props.data ? (
    <Card>
      <CardActionArea>     
        <CardContent>
          <p className="avatar">{props.data.name[0]}</p>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.data.email}
          </Typography>
        </CardContent>
      </CardActionArea>     
    </Card> ) : ( <div></div>)
  ) }


</>
  );
}
