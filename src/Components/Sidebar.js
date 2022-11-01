import { Box } from '@mui/system'
import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

const Sidebar = ({ items }) => {
  return (
    <Box 
      sx={{ 
        width: '100%',
        maxWidth: 360,
        bgcolor: '#009688',
        color: 'white',
        height: '100vh'
      }}
    >
  
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem>

            <ListItemText primary= 'Code Playground' />
          </ListItem>

          <Divider />

          {items.map((item, index) => {
            return (
              <ListItem disablePadding key={index}>
                <ListItemText primary={item.name} />
              </ListItem>

            )
          })}
        </List>
      </nav>
      
    </Box>

  )

}

export default Sidebar
