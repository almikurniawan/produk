const LOAD_PRODUK_START = () => {
    return {
        type: 'LOAD_PRODUK_START',
        payload: {
            data : [],
            loading : true
        }
    }
};
const LOAD_PRODUK_FINISH = (data) => {
    return {
        type: 'LOAD_PRODUK_FINISH',
        payload: {
            data : data,
            loading : false
        }
    }
};

const LOAD_PRODUK_BY_ID_PENJUAL = (id) => {
    return dispatch => {
        try {
            dispatch(LOAD_PRODUK_START());
            fetch("https://dev.dummy-api.alamisharia.co.id/listProductBySellerId?seller_id="+id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((response) => response.json())
                .then((res) => {
                    if(res.status == 'Success'){
                        dispatch(LOAD_PRODUK_FINISH(res.data));
                    }else{
                        dispatch(LOAD_PRODUK_FINISH([]));
                    }
                }).catch((err) => {
                    dispatch(LOAD_PRODUK_FINISH([]));
                });
        } catch (error) {
            dispatch(LOAD_PRODUK_FINISH([]));
        }
    }
}

const LOAD_PRODUK_BY_KEYWORD = (keyword) => {
    return dispatch => {
        try {
            dispatch(LOAD_PRODUK_START());
            fetch("https://dev.dummy-api.alamisharia.co.id/searchProductByKeyword?keyword="+keyword, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((response) => response.json())
                .then((res) => {
                    if(res.status == 'Success'){
                        dispatch(LOAD_PRODUK_FINISH(res.data));
                    }else{
                        dispatch(LOAD_PRODUK_FINISH([]));
                    }
                }).catch((err) => {
                    dispatch(LOAD_PRODUK_FINISH([]));
                });
        } catch (error) {
            dispatch(LOAD_PRODUK_FINISH([]));
        }
    }
}
export { LOAD_PRODUK_BY_ID_PENJUAL, LOAD_PRODUK_START, LOAD_PRODUK_FINISH, LOAD_PRODUK_BY_KEYWORD };