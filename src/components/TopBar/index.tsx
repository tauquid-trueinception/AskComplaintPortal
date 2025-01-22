'use client';
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
} from '@mui/material';


interface TopBarProps {
  links: { label: string; href: string }[];
}

const TopBar: React.FC<TopBarProps> = ({  }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('mobile', 'tablet'));

  

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: '#121212',
        boxShadow: '0px 2px 0px 0px #E6E6E6',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Logo Section */}
        <Stack direction="row" alignItems="center" justifyContent={'center'} gap={1}>
          <Typography
          variant= {isMobile ? 'h5' : 'h3'} 
           fontWeight={'medium'}
           color='rgba(255, 255, 255, 0.87)'
          >
          Truelink Complaint Portal
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
