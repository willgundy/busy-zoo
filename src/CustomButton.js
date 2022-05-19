import React from 'react';
import { Button } from '@mui/material';

export default function CustomButton({ children, onClick, disabled }) {
  return (
    <Button 
      onClick={onClick} 
      disabled={disabled} 
      variant='outlined'
      sx={{
        margin: '5px',
        background: '#282c34',
        color: 'white',
        border: '1px solid #282c34',
        '&:hover': {
          background: 'white',
          color: '#282c34',
          border: '1px solid #282c34',
        },
        '&:disabled': {
          background: '#ccc',
          color: 'darkGrey',
          border: '1px solid darkGrey',
          transform: 'scale(0.8)'
        }
      }}>
      {children}
    </Button>
  );
}
