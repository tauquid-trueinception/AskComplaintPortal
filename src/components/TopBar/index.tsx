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
        bgcolor: 'background.paper',
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
            sx={{
              color: '#000',
              fontFamily: 'Kalam',
              fontSize: isMobile ? '24px' : '32px',
              fontWeight: 700,
              lineHeight: '40px',
              letterSpacing: '0.64px',
            }}
          >
          Truelink Complaint Portal
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
