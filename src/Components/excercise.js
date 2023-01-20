import { Typography, Box, rgbToHex, stepClasses } from '@mui/material'
import { yellow } from '@mui/material/colors'
import React from 'react'
import { useState } from 'react'

const Excercise = () => {
  const [name, setName] = useState('Primeiro exercicio')
  const [number, setNumber] = useState(0)

  const handleClick = () => {
    setName('Vamos pro segundo')
    setNumber(number + 1)
    alert('clicked')
  }
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '20px',
          background: 'yellow',
          padding: '50%',
          borderRadius: '10%',
          border: '4px solid',
        }}
      >
        <h1>
          {name} and the {number}
        </h1>

        <button onClick={handleClick}> Click Me!</button>
        <button onClick={handleClick}> Clik me Too</button>
      </Box>
    </div>
  )
}

export default Excercise
