/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import {
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const DesignSection = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.between('mobile', 'tablet'));
  const isTablet = useMediaQuery(theme.breakpoints.between('tablet', 'tabletLandscape'));
  const isLandscape = useMediaQuery(theme.breakpoints.between('tabletLandscape', 'desktop'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'));

  return (
    <Stack bgcolor={'secondary.100'}>
    <Stack
      sx={{
        flexDirection: isMobile || isTablet ? 'column' : 'row',
        justifyContent: isMobile || isTablet ? 'flex-start' : 'space-between',
        alignItems: isMobile  ? 'center' : isLandscape ? 'flex-start' : isDesktop ? 'flex-start' : 'flex-start',
        padding: '16px',
        gap: isMobile  ? '32px' : isLandscape ? '64px' : isDesktop ? '84px' : '84px',
        margin: 'auto',
      }}
    >
      {/* Left Section: Text & Button */}
      <Stack
        sx={{
          width: isDesktop ? '385px' : isLandscape ? '364px' : isMobile ? '362px' : '362px',
          textAlign: isMobile  ? 'left' : 'left',
          alignItems: isMobile ? 'center' : 'flex-start',
          // margin: 'auto',
        }}
        spacing={isMobile || isTablet ? 2 : 4}
      >
        <Stack
          alignItems="flex-start"
          gap={isMobile || isTablet ? '8px' : isLandscape ? '20px' : '0px'}
          sx={{
            margin: isTablet ? 'auto' : '0', // Center horizontally in tablet view
          }}
        >
          <Stack direction={'row'} alignItems={'center'} gap={'6px'}>
          <Typography
            variant={isMobile || isTablet ? 'p2' : 'p1'}
            fontWeight={isMobile || isTablet ? 'light' : 'medium'}
            color="textActive"
            align='center'
          >
            Hello There!
          </Typography>
          <img src= '/fgd 1.png' />
          </Stack>
          <Typography
            variant={isMobile || isTablet ? 'd5' : isLandscape ? 'd4' : 'd2'}
            fontWeight="bold"
            color="textActive"
          >
            Ask
          </Typography>
          <Typography
            variant={isMobile || isTablet ? 'd5' : isLandscape ? 'd4' : 'd2'}
            fontWeight="bold"
            color="textActive"
          >
            Anything
          </Typography>
          <Typography
            variant={isMobile || isTablet ? 'p2' : 'p1'}
            align="left"
            fontWeight="medium"
            color="textActive"
          >
            From confusion to clarity with expert tech solutions.
          </Typography>

        <Stack
          sx={{
            marginLeft: isMobile || isTablet ? '10px' : '0px',
            border: '1px solid',
            borderColor: 'secondary.500',
            borderRadius: '999px',
            padding: '8px',
            display: 'flex',
            backgroundColor: '#ECEDE3',
            flexDirection: 'row',
            alignItems: 'center',
            cursor: 'pointer',
            height: isLandscape ? '162px' : '152px',
            width: isLandscape ? '162px' : '152px',
            justifyContent: 'center',
            textAlign: 'center',
            direction: 'rtl',
            marginTop: isLandscape ? '84px' : '32px',
            letterSpacing: '-0.48px',
            transition: 'all 0.3s ease-in-out', // Smooth transition for all effects
            '&:hover': {
              backgroundColor: 'primary.400',
              transform: 'translateY(-10px)', // Moves everything upwards
              color: '#fff', // Changes text and icon color to white
              '& .hover-effect': {
                color: '#fff', // Targets elements with the hover-effect class
                transform: 'scale(1.1)', // Enlarges text and icon slightly
              },
            },
          }}
        >
          {/* Icon Section */}
          <IconButton
            className="hover-effect"
            sx={{
              padding: 0,
              border: 'none',
              rotate: '1035.495deg',
              flexShrink: 0,
              marginLeft: '-3px',
              marginTop: '30px',
              transition: 'all 0.3s ease-in-out', // Smooth transition for hover effect
            }}
            aria-label="button"
          >
            <ArrowForwardIcon
              className="hover-effect"
              sx={{
                height: '20px',
                width: '20x',
                color: 'primary.900',
                transition: 'all 0.3s ease-in-out',
              }}
            />
          </IconButton>

          {/* Text Section */}
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              marginLeft: '-2px',
              transition: 'all 0.3s ease-in-out', // Smooth transition for hover
            }}
          >
            <Typography
              variant="h5"
              fontWeight="light"
              className="hover-effect" // Adds hover-effect class
              sx={{
                color: 'primary.950',
                transition: 'all 0.3s ease-in-out', // Smooth hover transition
              }}
            >
              Get
            </Typography>
            <Typography
              variant="h5"
              fontWeight="light"
              className="hover-effect" // Adds hover-effect class
              sx={{
                color: 'primary.950',
                transition: 'all 0.3s ease-in-out', // Smooth hover transition
              }}
            >
              In Touch
            </Typography>
          </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* Right Section: Image */}
      <Stack
        sx={{
          width: isDesktop || isLandscape ? '50%' : '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isMobile || isTablet ? (
          <img
            src="/tablet.png"
            alt="Tablet View"
            style={{
              width: '100%',
              maxWidth: '360px',
              height: 'auto',
              marginTop: '50px',
            }}
          />
        ) : (
          <img
            src="/landingpagesection2.png"
            alt="Desktop View"
            style={{
              width: '100%',
              maxWidth: '596px',
              height: 'auto',
              maxHeight: '650px',
            }}
          />
        )}
      </Stack>
    </Stack>
    </Stack>
  );
};

export default DesignSection;
