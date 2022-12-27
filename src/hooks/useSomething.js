import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function useSomethings() {
  const [somethingsError, setSomethingsError] = useState(null)
  const { list, open, userName } = useSelector((state) => ({
    list: state.somethings.list,
    open: state.something.open,
    userName: state.somthing.userName,
  }))

  const dispatch = useDispatch()

  const setList = (newList) => {
    dispatch({ type: 'SET_LIST', payload: newList })
  }

  const setOpen = (open) => {
    dispatch({ type: 'SET_OPEN', payload: open })
  }

  const setUsername = (userName) => {
    dispatch({ type: 'SET_USERNAME', payload: userName })
  }

  return {
    list,
    setList,
    open,
    setOpen,
    userName,
    setUsername,
  }
}
