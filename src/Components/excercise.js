import { Typography, Box, rgbToHex, stepClasses } from '@mui/material'
import { yellow } from '@mui/material/colors'
import React from 'react'
import { useState } from 'react'

const Excercise = () => {
  const handleClick = () => {
    alert('clicked button 1')
  }
  const handleClick2 = () => {
    alert('clicked button 1')
  }
  const handleClick3 = () => {
    alert('clicked button 1')
  }
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <button onClick={handleClick}> Button 1 </button>
        <button onClick={handleClick2}> Button 2</button>
        <button onClick={handleClick3}> Button 3</button>
      </Box>
    </div>
  )
}

export default Excercise
