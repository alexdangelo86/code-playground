import React from 'react'
import { Box } from '@mui/system'
import useSomethings from '../hooks/useSomething'

const Xmas = () => {
  const { open, setOpen, list, setList, userName, setUsername } = useSomethings
  return <div>Merry Christmas</div>
}

export default Xmas
