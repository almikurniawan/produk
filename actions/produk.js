const ADD_PRODUK_START = () => {
    return {
        type: 'ADD_PRODUK_START',
        payload: {
            message: null
        }
    }
};
const ADD_PRODUK_FINISH = (message) => {
    return {
        type: 'ADD_PRODUK_FINISH',
        payload: {
            message: message
        }
    }
};

const ADD_PRODUK = (data) => {
    return dispatch => {
        try {
            dispatch(ADD_PRODUK_START());
            fetch("https://dev.dummy-api.alamisharia.co.id/addProduct", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "sellerId": data.idPenjual,
                    "nama": data.nama,
                    "satuan": data.satuan,
                    "hargaSatuan": data.harga,
                    "deskripsi": data.keterangan
                })
            })
                .then((response) => response.json())
                .then((res) => {
                    if(res.status == 'Success'){
                        dispatch(ADD_PRODUK_FINISH("Berhasil menambahkan produk"));
                    }else{
                        dispatch(ADD_PRODUK_FINISH(res.message));
                    }
                }).catch((err) => {
                    dispatch(ADD_PRODUK_FINISH("Terjadi kesalahan pada server"));
                });
        } catch (error) {
            dispatch(ADD_PRODUK_FINISH("GAGAL MENAMBAH PRODUK"));
        }
    }
}

export { ADD_PRODUK_START, ADD_PRODUK_FINISH, ADD_PRODUK };