import { Button, Box, TextField, Grid } from '@mui/material';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const FormPenjual = (props) => {
    const [nama, setNama] = useState('');
    const [kota, setKota] = useState('');

    const refNama = useRef();

    useEffect(()=>{
        refNama.current.focus();
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
                <TextField label="Nama" variant="outlined" value={nama} onChange={(e) => setNama(e.target.value)} fullWidth={true} inputRef={refNama} />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Kota" variant="outlined" value={kota} onChange={(e) => setKota(e.target.value)} fullWidth={true} />
            </Grid>
            <Grid item={6}>
                <Button variant="contained"
                    disabled={props.isBussy}
                    onClick={() => {
                        props.onSubmit({ nama, kota });
                    }}
                > Simpan</Button>
            </Grid>
        </Box>
    );
}

export default FormPenjual;