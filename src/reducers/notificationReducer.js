const initialState = {
  content: '',
  visible: false
}

const reducer = (state = initialState, action) => {
  console.log('notificatoin state now: ', state)
  console.log('notification action', action)
  switch(action.type) {
    case 'NOTIFICATION': return {
      ...state,
      content: action.data.notification,
      visible: true
    } 
    case 'HIDE': return {
      ...state,
      visible: false
    }
    default: return state
  }
}

export const createNotification = (notification, timer) => {
  return async dispatch => {
    setTimeout(() => dispatch({
      type: 'HIDE'
    }), timer*1000)

    dispatch({
      type: 'NOTIFICATION',
      data: {
        notification
      } 
    })
  }
}

export const hideNotification = () => {
  return {
    type: 'HIDE',
  }
}
export default reducer