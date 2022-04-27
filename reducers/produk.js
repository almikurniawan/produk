const initialState = {
    error : null
}

const reducerProduk = (prevState = initialState, action) => {
    if (action.type === 'ADD_PRODUK_START') {
        return {
            error : null
        }
    }else if (action.type === 'ADD_PRODUK') {
        return {
            error : null
        }
    }else if (action.type === 'ADD_PRODUK_FINISH') {
        return {
            error : action.payload.message
        }
    }else{
        return {
            error : null
        }
    }
}

export default reducerProduk;