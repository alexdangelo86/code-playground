import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function useSomethings() {
  const [somethingsError, setSomethingsError] = useState(null)
  const { list } = useSelector((state) => ({
    list: state.something.list,
  }))

  console.log('list', list)
  const dispatch = useDispatch()

  const setReservation = (newList) => {
    dispatch({ type: 'SET_LIST', payload: newList })
  }

  return {
    list,
    setReservation,
  }
}
