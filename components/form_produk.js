import { Button, Box, TextField, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const FormProduk = (props) => {
    const [idPenjual, setIdPenjual] = useState(0);
    const [nama, setNama] = useState('');
    const [satuan, setSatuan] = useState('');
    const [harga, setHarga] = useState(0);
    const [keterangan, setKeterangan] = useState('');

    const refIdPenjual = useRef();

    useEffect(()=>{
        refIdPenjual.current.focus();
    },[]);

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50%' },
            }}
            noValidate
            autoComplete="off"
        >
            <Grid item={12}>
                <TextField label="ID Penjual" variant="outlined" value={idPenjual} onChange={(e) => setIdPenjual(e.target.value)} fullWidth={true} type="number" inputRef={refIdPenjual} />
            </Grid>
            <Grid item={12}>
                <TextField label="Nama" variant="outlined" value={nama} onChange={(e) => setNama(e.target.value)} fullWidth={true} />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Satuan" variant="outlined" value={satuan} onChange={(e) => setSatuan(e.target.value)} fullWidth={true} />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Harga" variant="outlined" value={harga} onChange={(e) => setHarga(e.target.value)} fullWidth={true} type="number" inputProps={{
                    "step": "0.01"
                }} />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Deskripsi" variant="outlined" value={keterangan} onChange={(e) => setKeterangan(e.target.value)} fullWidth={true} multiline rows={4} />
            </Grid>
            <Grid item={6}>
                <Button variant="contained"
                    disabled={props.isBussy}
                    onClick={() => {
                        props.onSubmit({ idPenjual, nama, satuan, harga, keterangan });
                    }}
                > Simpan</Button>
            </Grid>
        </Box>
    );
}

export default FormProduk;