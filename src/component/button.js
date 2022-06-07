import * as React from 'react';
import Button from '@mui/material/Button';


export default function Buttton(props) {
  
  return (
        <Button
        type="submit"
        fullWidth
        variant="contained"
        onClick={props.click}
        sx={{ mt: 3, mb: 2 }}
        >
        {props.name}
        </Button>
  );
}

