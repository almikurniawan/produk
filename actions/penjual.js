const ADD_PENJUAL_START = () => {
    return {
        type : 'ADD_PENJUAL_START',
        payload : {
            message : null
        }
    }
};
const ADD_PENJUAL_FINISH = (message) => {
    return {
        type : 'ADD_PENJUAL_FINISH',
        payload : {
            message : message
        }
    }
};

const ADD_PENJUAL = (data) => {
    return dispatch => {
        try {
            dispatch(ADD_PENJUAL_START());
            fetch("https://dev.dummy-api.alamisharia.co.id/addSeller", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "nama": data.nama,
                    "kota": data.kota,
                })
            })
            .then((response)=> response.json())
            .then((res)=>{
                if(res.status == 'Success'){
                    dispatch(ADD_PENJUAL_FINISH("Berhasil menambahkan penjual"));
                }else{
                    dispatch(ADD_PENJUAL_FINISH(res.message));
                }
            }).catch((err)=>{
                dispatch(ADD_PENJUAL_FINISH("Terjadi kesalahan pada server"));
            });
        } catch (error) {
            dispatch(ADD_PENJUAL_FINISH("GAGAL MENAMBAH PENJUAL"));
        }
    }
}

export {ADD_PENJUAL_START, ADD_PENJUAL_FINISH, ADD_PENJUAL};