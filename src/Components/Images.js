import { Box } from '@mui/system'
import React from 'react'
import image from '../Img/MIDNIGHT_TREAT_1.jpg'
import { Button, Typography } from '@mui/material'

const Images = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: `url(${image})`,
        width: '100%',
        height: '100vh',
      }}
    >
      <Button sx={{ width: '50%' }}>Listen now</Button>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 5,
        }}
      >
        <Box>
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/https:/CRLJSJn97GI"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Box>
        <Typography color="white" variant="h2" fontSize={70}>
          MIDNIGHT TREAT
        </Typography>
        <Typography color="white" variant="h4">
          Alex D&apos;Angelo & Stretch the Producer
        </Typography>
      </Box>
    </Box>
  )
}

export default Images
