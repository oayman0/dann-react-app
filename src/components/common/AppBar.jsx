import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import StoreIcon from '@mui/icons-material/Store';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom'


export default function AppBar() {
  const [value, setValue] = React.useState(0);


  return (
    <Box >
      <BottomNavigation
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 , zIndex: 'tooltip',bgcolor: '#dcecf6' , borderTop: 1 ,borderColor: 'grey.300', width: '100%'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
       <Link to="/" >
        <Box sx={{width:'20%'}}>
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
      />
      </Box>
      </Link>

    <Link to="/explore">
    <Box sx={{width:'20%'}}>
      <BottomNavigationAction
        label="Explore"
        icon={<ExploreIcon />}
      />
      </Box>

      </Link>

    <Link to="/marketplace">
    <Box sx={{width:'20%'}}>
      <BottomNavigationAction
        label="Marketplace"
        icon={<StoreIcon />}
      />
      </Box>

      </Link>

    <Link to="/people">
    <Box sx={{width:'20%'}}>
      <BottomNavigationAction
        label="Community"
        icon={<PeopleIcon />}
      />
      </Box>
      </Link>

    <Link to="/profile">
    <Box sx={{width:'20%'}}>
      <BottomNavigationAction label="Profile" 
       icon={<AccountCircleIcon />} />
      </Box>

      </Link>
      
      </BottomNavigation>
    </Box>
  );
}








