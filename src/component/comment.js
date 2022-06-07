import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


export default function Comment(props) {
  return (
    <>
    { props.data.map((com) => (
       <div className="col-4 mb-4">       
       
   
    <List sx={{ bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp"  sx={{backgroundColor:'indigo'}}>
          {com.name[0].toUpperCase()}
        </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={com.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {com.body}
            </React.Fragment>
          }
        />
      </ListItem>
         </List>
        
      </div> 
         ))}
  </>
  );
}
