'use client';
import React, { useState, useEffect, forwardRef } from 'react';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';

interface Country {
  cca2: string;
  flags?: {
    svg: string;
  };
  idd?: {
    root: string;
    suffixes?: string[];
  };
  name: {
    common: string;
  };
}

interface InputSelectProps {
  setCountry: (value: string) => void;
  country: string;
}

const DailCodesSelect = forwardRef<HTMLSelectElement, InputSelectProps>(
  ({ setCountry, country }, ref) => {
    const [countryData, setCountryData] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCountryData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<Country[]>(
          'https://restcountries.com/v3.1/all'
        );
        setCountryData(response.data);
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error('Error fetching country data:', err);
        setError('Failed to fetch country data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      fetchCountryData();
    }, []);

    const formatDialCode = (country: Country) => {
      if (country.idd && country.idd.root) {
        const suffix = country.idd.suffixes?.[0] || '';
        return `${country.idd.root}${suffix}`;
      }
      return 'N/A';
    };

    const handleCountryChange = (event: SelectChangeEvent<string>) => {
      const selectedDialCode = event.target.value as string;
      setCountry(selectedDialCode);
    };

    return (
      <FormControl>
        {isLoading ? (
          <Stack direction="row" alignItems="center" justifyContent="center">
            <CircularProgress size={24} />
            <Typography ml={2}>Loading...</Typography>
          </Stack>
        ) : error ? (
          <Stack spacing={2} alignItems="center">
            <Typography color="error">{error}</Typography>
            <Button variant="contained" onClick={fetchCountryData}>
              Retry
            </Button>
          </Stack>
        ) : (
          <Select
            ref={ref}
            value={country}
            onChange={handleCountryChange}
            IconComponent={ArrowDropDown}
            sx={{
              width: '100px',
              height: '48px',
              alignSelf: 'stretch',
              gap: '10px',
              display: 'flex',
              padding: '10px',
              alignItems: 'center',
              borderRadius: '6px',
              color: 'white',
              border: '1px solid #74747A',
              background:'#161616',
              '& .MuiSelect-select': {
                display: 'flex',
                alignItems: 'center',
                padding: '0 4px',
                color: 'black',
              },
              '& .MuiSvgIcon-root': {
                fontSize: '28px',
                color: 'white',

              },
              '&:before': {
                borderBottom: '0 !important',
              },
              '&:after': {
                borderBottom: '0 !important',
              },
              '&.MuiInput-underline:before': {
                borderBottom: '0 !important',
              },
              '&.MuiInput-underline:after': {
                borderBottom: '0 !important',
              },
            }}
variant='standard'
MenuProps={{
  PaperProps: {
    sx: {
      backgroundColor: '#161616', // Dropdown background color
      '& .MuiMenuItem-root': {
        color: 'white', // Text color for menu items
        '&:hover': {
          backgroundColor: '#333333', // Hover effect color
        },
      },
    },
  },
}}
          >
            {countryData.map((country) => {
              const dialCode = formatDialCode(country);

              return (
                <MenuItem key={country.cca2} value={dialCode} >
                  <Stack direction="row" gap="8px" alignItems="center" color={'black'}>
                    <Avatar
                    variant='square'
                      src={country.flags?.svg || ''}
                      alt={country.name.common}
                      sx={{ width: '20px', height: '16px' }}
                    />
                    <Typography variant='l1' fontWeight={'normal'} color='rgba(255, 255, 255, 0.60)'>{`${dialCode}`}</Typography>
                  </Stack>
                </MenuItem>
              );
            })}
          </Select>
        )}
      </FormControl>
    );
  }
);

DailCodesSelect.displayName = 'DailCodesSelect';

export default DailCodesSelect;
