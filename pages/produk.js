import { Box, CssBaseline, Alert } from '@mui/material';
import Header from '../components/header';
import MenuProduk from '../components/menu';
import ContentView from '../components/content_view';
import FormProduk from '../components/form_produk';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_PRODUK } from '../actions/produk';

export default function Produk() {
  const dispatch = useDispatch();
  const produk = useSelector(state => state.reducerProduk);
  const saveData = (data) => {
    dispatch(ADD_PRODUK(data));
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <MenuProduk />
      <ContentView title="Form Tambah Produk">
        {
          (produk.error != null) ? <Alert severity="info">{produk.error}</Alert> : null
        }
        <FormProduk onSubmit={saveData} isBussy={false} />
      </ContentView>
    </Box>
  )
}
