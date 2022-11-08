import React from 'react'
import './App.css'
import { TodoList } from './Components/TodoList'
import Sidebar from './Components/Sidebar'
import { Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BasicFrom from './Components/BasicForm'

const siteData = [
  { name: 'Todo List', route: '/todo-list' },
  { name: 'Basic Form', route: '/basic-form' },
]

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Sidebar items={siteData} />
        <Routes>
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/todo-list" element={<BasicFrom />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
