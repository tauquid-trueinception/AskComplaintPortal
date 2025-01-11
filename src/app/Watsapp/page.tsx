'use client'
import CustomButton from '@/components/customButtons'
import { WhatsApp } from '@mui/icons-material'
import { Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const WatsApp = () => {

const theme = useTheme();

const isMobile = useMediaQuery(theme.breakpoints.between('mobile', 'tablet'));
const isTablet = useMediaQuery(theme.breakpoints.between('tablet', 'tabletLandscape'));
const isLandscape = useMediaQuery(theme.breakpoints.between('tabletLandscape', 'desktop'));
const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'));


  return (
    <Stack
    alignItems="center"
    justifyContent="center"
    display="flex"
    gap={2}
    sx={{
      position: 'absolute',  // Position it absolutely within the parent
      top: '50%',            // Position from the top
      left: '50%',           // Position from the left
      transform: 'translate(-50%, -50%)', // Center it vertically and horizontally
      textAlign: 'center',   // Center the text content
      gap: '30px',
    }}
  >
   
      <WhatsApp
        sx={{
          fontSize: isMobile
            ? '80px'
            : isTablet
            ? '200px'
            : isLandscape
            ? '150px'
            : isDesktop
            ? '200px'
            : '200px',
            cursor: 'pointer',
            color: 'green'
        }}
      />
    <Typography variant={  isMobile
            ? 'l1'
            : isTablet
            ? 'h6'
            : isLandscape
            ? 'h6'
            : isDesktop
            ? 'h5'
            : 'h5'}>Join our<span style={{ color: 'green',padding:'5px' }}>WhatsApp Community</span>for updates</Typography>
          <Link href="https://whatsapp.com/channel/0029VaxcX7tE50UZJcUJa50y">  <CustomButton label={'Join Now'} size={isMobile ? 'small' : 'large'}/></Link>
  </Stack>
  
  )
}

export default WatsApp