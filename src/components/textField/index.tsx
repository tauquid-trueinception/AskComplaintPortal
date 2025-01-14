'use client'

import React, { forwardRef, useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'

interface CustomInputFieldProps {
  value?: string | number
  label?: string
  placeholder?: string
  inline?: boolean
  required?: boolean
  helperText?: string
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  error?: boolean
  disabled?: boolean
  width?: string | number
  size?: 'small' | 'medium'
  color?: 'error' | 'success' | 'warning'
  type?: 'text' | 'password' | 'number' | 'email'
  multiLineProps?: {
    charCount?: number
    minRows?: number
    maxRows?: number
    maxChar: number
  }
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  sx?: React.CSSProperties
}

export const CustomInputField = forwardRef<HTMLInputElement, CustomInputFieldProps>(
  (
    {
      label = 'Label',
      placeholder = '',
      inline = false,
      required = false,
      helperText = '',
      startAdornment,
      endAdornment,
      error = false,
      disabled = false,
      size = 'medium',
      color,
      type = 'text',
      width = '100%',
      multiLineProps,
      onChange,
      sx = {},
    },
    ref
  ) => {
    const [value, setValue] = useState<string>('') // State to hold input value
    const [showPass, setShowPass] = useState<boolean>(false)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value) // Update value
      if (onChange) {
        onChange(event) // Pass change event to parent handler
      }
    }

    return (
      <Stack
        justifyContent="flex-start"
        alignItems={inline ? 'center' : 'flex-start'}
        width="100%"
        height="100%"
        direction={inline ? 'row' : 'column'}
        gap={inline ? '16px' : '8px'}
        sx={sx}
      >
        {/* Label Section */}
        {label && (
          <Stack
            direction="row"
            gap="8px"
            alignSelf={inline ? 'baseline' : 'none'}
          >
            <Typography
              variant="l1"
              color={disabled ? 'text.disabled' : 'text.primary'}
              sx={{ fontWeight: 400 }}
            >
              {label}
            </Typography>
            {required && (
              <Typography variant="l1" color="error">
                *
              </Typography>
            )}
          </Stack>
        )}

        {/* Input Wrapper */}
        <Stack gap="8px" width={width} height="100%" position="relative">
          {/* Character Count for Multiline */}
          {multiLineProps && (
            <Typography
              variant="l3"
              color="text.secondary"
              sx={{
                position: 'absolute',
                top: '8px',
                right: '8px',
              }}
            >
              {value.length}/{multiLineProps.maxChar}
            </Typography>
          )}

          {/* Input Field */}
          <OutlinedInput
  inputRef={ref}
  value={value} // Controlled input value
  onChange={handleInputChange} // On change handler
  type={type === 'password' ? (showPass ? 'text' : 'password') : type}
  placeholder={placeholder} // Use placeholder directly in the input
  disabled={disabled}
  error={error}
  size={size}
  minRows={multiLineProps?.minRows}
  maxRows={multiLineProps?.maxRows}
  multiline={!!multiLineProps}
  inputProps={{
    maxLength: multiLineProps?.maxChar,
    'aria-label': label,
    'aria-describedby': helperText ? `${label}-helper-text` : undefined,
    ...(type === 'number' && {
      inputMode: 'numeric', // Prevent spinner
      pattern: '[0-9]*', // Ensure numeric input
    }),
  }}
  sx={{
    width: '100%',
    
    ...sx,
    // Hide the spinner
    '& input[type=number]': {
      'MozAppearance': 'textfield', // Firefox
      '-webkit-appearance': 'none', // Chrome, Safari, Edge
      '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
        display: 'none', // Remove spinner
      },
    },
  }}
  startAdornment={
    startAdornment && (
      <Stack
        direction="row"
        marginLeft={size === 'small' ? '-13px' : '-15px'}
        bgcolor="grey.200"
        border="1px solid"
        borderColor="divider"
        borderRadius="4px 0px 0px 4px"
        alignItems="center"
        justifyContent="center"
        alignSelf="stretch"
        px={size === 'small' ? '10px' : '10px'}
        sx={{
          marginRight: '8px', // Add space between the adornment and text
        }}
      >
        {startAdornment}
      </Stack>
    )
  }
  endAdornment={
    type === 'password' ? (
      <InputAdornment position="end">
        <IconButton
          size="small"
          onClick={() => setShowPass(!showPass)}
          aria-label={showPass ? 'Hide password' : 'Show password'}
        >
          {showPass ? (
            <VisibilityIcon sx={{ color: 'action.active' }} />
          ) : (
            <VisibilityOffIcon sx={{ color: 'action.active' }} />
          )}
        </IconButton>
      </InputAdornment>
    ) : endAdornment && (
      <InputAdornment position="end">{endAdornment}</InputAdornment>
    )
  }
/>


          {/* Helper Text */}
          <Typography
            variant="l2"
            align={inline ? 'right' : 'left'}
            color={
              error
                ? 'error.main'
                : color === 'success'
                ? 'success.main'
                : color === 'warning'
                ? 'warning.main'
                : 'text.secondary'
            }
            id={helperText ? `${label}-helper-text` : undefined}
          >
            {helperText}
          </Typography>
        </Stack>
      </Stack>
    )
  }
)

CustomInputField.displayName = 'CustomInputField'

export default CustomInputField
