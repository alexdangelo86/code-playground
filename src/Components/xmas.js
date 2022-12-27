import React from 'react'
import { Card, Box, Typography, ButtonBase, Button } from '@mui/material'
import useSomethings from '../hooks/useSomething'

const Xmas = () => {
  const { open, setOpen, list, setList, userName, setUsername } = useSomethings

  return (
    <form>
      <Typography color="blue" variant="h2" fontSize={40}>
        NATAL DO ALEX
      </Typography>
      <Typography color="red" variant="h4">
        A Wonderful Evening of Pure Fun
      </Typography>
      <br />
      <Box sx={{ marginBottom: '15px' }}>
        <label htmlFor="reservation">Name</label>
        <input type="reservation" name="reservation" id="reservation" />
      </Box>
      <br />
      <Box sx={{ marginBottom: '15px' }}>
        <label htmlFor="reservation">Number of quests</label>
        <input type="reservation" name="reservation" id="reservation" />
      </Box>
      <br />
      <Box sx={{ marginBottom: '15px' }}>
        <label htmlFor="reservation">Time</label>
        <input type="reservation" name="reservation" id="reservation" />
      </Box>

      <button type="submit">Book Now</button>
    </form>
  )
}

export default Xmas
