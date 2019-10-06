import axios from 'axios'

// ACTION TYPES
const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

// ACTION CREATORS
function receiveProducts(content) {
  return {
    type: RECEIVE_PRODUCTS,
    payload: content
  }
}

export const getAllProducts = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/products')
      const action = receiveProducts(data)
      dispatch(action)
    } catch (error) {
      console.log('Could not fetch all products', error)
    }
  }
}

const reducer = function(state = [], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.payload

    default:
      return state
  }
}

export default reducer
