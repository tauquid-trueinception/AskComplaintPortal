'use client'
import React from 'react'
import { Button, ButtonProps, CircularProgress, SxProps } from '@mui/material'

interface CustomButtonProps extends ButtonProps {
  /** The label text displayed on the button */
  label: string
  /** Displays a loading spinner when true */
  isLoading?: boolean
  /** Icon displayed before the label */
  startAdornment?: React.ReactNode
  /** Icon displayed after the label */
  endAdornment?: React.ReactNode
  /** The color of the button */
  color?: 'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning'
  /** The size of the button */
  size?: 'small' | 'medium' | 'large'
  /** The variant of the button */
  variant?: 'text' | 'outlined' | 'contained'
  /** Custom styles for the button */
  sx?: SxProps
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  isLoading = false,
  endAdornment,
  startAdornment,
  disabled = false,
  color = 'primary',
  variant = 'contained',
  size = 'medium',
  sx,
  ...props
}) => {
  return (
    <Button
      disabled={disabled || isLoading}
      startIcon={!isLoading ? startAdornment : null}
      endIcon={!isLoading ? endAdornment : null}
      color={color}
      variant={variant}
      size={size}
      sx={sx}
      aria-busy={isLoading} // Accessibility for loading state
      {...props} // Spread remaining props last
    >
      {isLoading ? <CircularProgress size={20} color="inherit" /> : label}
    </Button>
  )
}

export default CustomButton
