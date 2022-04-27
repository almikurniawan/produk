const initialState = {
    error : null
}

const reducerPenjual = (prevState = initialState, action) => {
    if (action.type === 'ADD_PENJUAL_START') {
        return {
            error : null
        }
    }else if (action.type === 'ADD_PENJUAL') {
        return {
            error : null
        }
    }else if (action.type === 'ADD_PENJUAL_FINISH') {
        return {
            error : action.payload.message
        }
    }else{
        return {
            error : null
        }
    }
}

export default reducerPenjual;