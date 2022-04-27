const initialState = {
    data : [],
    loading : true,
}

const reducerListProduk = (prevState = initialState, action) => {
    if(action.type === 'LOAD_PRODUK_START'){
        return {
            data : [],
            loading : true
        }
    }else if(action.type === 'LOAD_PRODUK_FINISH'){
        return {
            data : action.payload.data,
            loading : false
        }
    }else{
        return {
            data : [],
            loading : true
        }
    }
}

export default reducerListProduk;