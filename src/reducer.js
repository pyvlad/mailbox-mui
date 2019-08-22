const initialState = {
  isLoading: false
}

export default (state=initialState, action) => {
  switch (action.type) {

    case 'START_LOADING': 
      return {isLoading: true}

    case 'STOP_LOADING':
      return {isLoading: false}

    default:
      return state

  }
}