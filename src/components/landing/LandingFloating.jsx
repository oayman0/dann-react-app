import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NavigationIcon from '@mui/icons-material/Navigation';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function FloatingActionButtons() {

 
    
  return (
      
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab sx={{
            position: "fixed",
            bottom: (theme) => theme.spacing(2),
            right: (theme) => theme.spacing(2)
            }}
            color="primary" aria-label="add">
                <KeyboardArrowUpIcon fontSize='large' />
      </Fab>

      <Fab sx={{
            position: "fixed",
            bottom: (theme) => theme.spacing(2),
            right: (theme) => theme.spacing(10)
            }} variant="extended">

                <LocationOnIcon sx={{ mr: 1 }} />
                Login
      </Fab>
 
    </Box>
    
  );
  
}
