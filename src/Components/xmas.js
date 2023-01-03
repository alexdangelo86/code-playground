import React, { useState } from 'react'
import { Card, Box, Typography, ButtonBase, Button } from '@mui/material'
import useSomethings from '../hooks/useSomething'

const Xmas = () => {
  const { list, setReservation } = useSomethings()

  const [guestName, setGuestName] = useState('')
  const [numberOfGuests, setnumberOfGuests] = useState(0)
  const [date, setdate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setReservation({ guestName, numberOfGuests, date })
  }

  console.log(list)

  return (
    <form onSubmit={handleSubmit}>
      <Typography color="blue" variant="h2" fontSize={40}>
        NATAL DO ALEX
      </Typography>
      <Typography color="red" variant="h4">
        A Wonderful Evening of Pure Fun
      </Typography>
      <br />

      <Box sx={{ marginBottom: '15px' }}>
        <label htmlFor="guestName">Name</label>
        <input
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          name="guestName"
          id="guestName"
        />
      </Box>
      <br />
      <Box sx={{ marginBottom: '15px' }}>
        <label htmlFor="numberOfGuests">Number of quests</label>
        <input
          type="number"
          value={numberOfGuests}
          onChange={(e) => setnumberOfGuests(e.target.value)}
          name="numberOfGuests"
          id="numberOfGuests"
        />
      </Box>
      <br />
      <Box sx={{ marginBottom: '15px' }}>
        <label htmlFor="date">Time</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setdate(e.target.value)}
          name="date"
          id="date"
        />
      </Box>

      <button type="submit">Book Now</button>

      {list.map((item, index) => {
        return (
          <Box key={index}>
            {item.guestName} / {item.numberOfGuests} / {item.date}
          </Box>
        )
      })}
    </form>
  )
}

export default Xmas
