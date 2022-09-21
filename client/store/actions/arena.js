import { GET_ARENAS_REQUESTED } from '../constants'

export const getArenas = (params) => {
  console.log('in function getArenas, params define: ',params)
  return (dispatch) => {
    return dispatch({ type: GET_ARENAS_REQUESTED, payload: params })
  }
}
