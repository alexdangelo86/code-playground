import React from 'react'
import logo from './logo.svg'
import './App.css'
import { TodoList } from './Components/TodoList'
import Sidebar from './Components/Sidebar'
import { Box } from '@mui/material'

const siteData = [
  { name: 'Todo List' },
  { name: 'Basic Form' }
]

function App() {
  return (
    <Box 
      sx={{
        display: 'flex',
      }}
    
    >

      <Sidebar items={siteData} />
      <TodoList/>
    </Box>
  )
}

export default App


