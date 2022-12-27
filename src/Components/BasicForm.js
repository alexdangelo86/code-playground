import { Card, Box, ButtonBase, Button } from '@mui/material'
import React, { useState } from 'react'

const BasicFrom = () => {
  const [name, setName] = ''
  const [email, setEmail] = ''
  const [password, setPassword] = ''
  const [confirmPassword, setConfrimPassword] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    window.alert(`name: ${name} email: ${email}`)
  }

  return (
    <Card sx={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ marginBottom: '15px' }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(event) => setName(event.tarqet.value)}
          />
        </Box>

        <Box sx={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.taget.value)}
          />
        </Box>
        <Box sx={{ marginBottom: '15px' }}>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.targe.value)}
          />
        </Box>
        <Box sx={{ marginBottom: '15px' }}>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfrimPassword(event.target.value)}
          />
        </Box>
        <button type="submit">Submit</button>
      </form>
    </Card>
  )
}

export default BasicFrom
