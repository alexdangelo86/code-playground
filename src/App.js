import React from 'react'
import './App.css'
import { TodoList } from './Components/TodoList'
import Sidebar from './Components/Sidebar'
import { Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BasicFrom from './Components/BasicForm'
import Images from './Components/Images'
import Xmas from './Components/xmas'

const siteData = [
  { name: 'Todo List', route: '/todo-list', element: <TodoList /> },
  { name: 'Basic Form', route: '/basic-form', element: <BasicFrom /> },
  { name: 'Images', route: '/images', element: <Images /> },
  { name: 'xmas', route: '/xmas', element: <Xmas /> },
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

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flex: 1,
          }}
          Routes
        >
          <Routes>
            {siteData.map((item) => {
              return (
                <Route
                  Key={item.route}
                  path={item.route}
                  element={item.element}
                />
              )
            })}
          </Routes>
        </Box>
      </Box>
    </Router>
  )
}

export default App
