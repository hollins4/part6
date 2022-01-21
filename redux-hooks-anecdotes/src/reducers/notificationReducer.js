

const notificationReducer = (state = null, action) => {
    switch(action.type) {
        case 'MESSAGE': 
            return action.data
        case 'CLEAR_MESSAGE':
            return action.data
        default:
            return state
    }
}

export const createMessage = (content, delay) => {
    return async dispatch => {
        dispatch({ type: 'MESSAGE', data: content })
        dispatch(clearMessage(delay))
    }

}

export const clearMessage = (delay) => {
    return async dispatch => {
        const delayInterval = delay * 100
        setTimeout(() => {  
            dispatch({         
                type: 'CLEAR_MESSAGE',
                data: null
            })      
        }, delayInterval)
    }
}

export default notificationReducer