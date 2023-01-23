/* eslint-disable indent */
const initialState = {
  list: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_LIST':
      return {
        ...state,
        list: [...state.list, action.payload],
      }
    case 'SET_OPEN':
      return {
        ...state,
        open: action.payload,
      }
    case 'SET_USERNAME':
      return {
        ...state,
        userName: action.payload,
      }
    default:
      return state
  }
}