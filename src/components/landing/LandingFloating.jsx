// Floating buttons for landing page - MUI FAB
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Link} from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';

export default function FloatingActionButtons() {

  return (
    
    <Box sx={{ '& > :not(style)': { m: 1 } }}>

        {/*    Back to top button */}
        <Tooltip title="Back to top">
      <Fab href="#" size="small" sx={{
            position: "fixed",
            bottom: (theme) => theme.spacing(7),
            right: (theme) => theme.spacing(2)
            }}
            color="primary" aria-label="scroll back to top">
                <KeyboardArrowUpIcon fontSize='large' />
      </Fab>
      </Tooltip>

    {/* Login Button */}
   
    <Link to="/login">
    <Tooltip title="Login">
      <Fab size="large" aria-label="Login" sx={{
            position: "fixed",
            bottom: (theme) => theme.spacing(7),
            right: (theme) => theme.spacing(10)
            }} variant="extended">
                 <LocationOnIcon sx={{ mr: 1 }} />
                Login
      </Fab></Tooltip> </Link>   
 
    </Box>
    
  );
  
}
