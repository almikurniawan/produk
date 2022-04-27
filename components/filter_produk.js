import { Button, Box, TextField, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const FilterProdukByID = (props) => {
    const [idPenjual, setIdPenjual] = useState(0);

    const refIdPenjual = useRef();

    useEffect(()=>{
        refIdPenjual.current.focus();
    },[]);

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField label="ID Penjual" variant="outlined" value={idPenjual} onChange={(e) => setIdPenjual(e.target.value)} fullWidth={true} type="number" inputRef={refIdPenjual} />
            <Button variant="contained"
                onClick={() => {
                    props.onSearch({ idPenjual });
                }}
            > Cari</Button>
        </Box>
    );
}

const FilterProdukByKeyword = (props) => {
    const [keyword, setKeyword] = useState('');

    const refKeyword = useRef();

    useEffect(()=>{
        refKeyword.current.focus();
    },[]);

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField label="Keyword" variant="outlined" value={keyword} onChange={(e) => setKeyword(e.target.value)} fullWidth={true} inputRef={refKeyword} />
            <Button variant="contained"
                onClick={() => {
                    props.onSearch({ keyword });
                }}
            > Cari</Button>
        </Box>
    );
}

export {FilterProdukByID, FilterProdukByKeyword};