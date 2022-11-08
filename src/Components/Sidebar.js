import { Box } from '@mui/system'
import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import ListItemButton from '@mui/material/ListItemButton'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ items }) => {
  const navigate = useNavigate()

  const handleItemClick = (route) => {
    navigate(route)
  }

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: '#009688',
        color: 'white',
        height: '100vh',
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem>
            <ListItemText primary="Code Playground" />
          </ListItem>

          <Divider />

          {items.map((item, index) => {
            return (
              <ListItem
                disablePadding
                key={index}
                onClick={() => handleItemClick(item.route)}
              >
                <ListItemButton>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </nav>
    </Box>
  )
}

export default Sidebar
