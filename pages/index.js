import { Box, CssBaseline, Alert } from '@mui/material';
import Header from '../components/header';
import MenuProduk from '../components/menu';
import FormPenjual from '../components/form_penjual';
import ContentView from '../components/content_view';
import {ADD_PENJUAL} from '../actions/penjual';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
  const penjual = useSelector((state) => state.reducerPenjual);
  const dispatch = useDispatch();
  const saveData = (data) => {
    dispatch(ADD_PENJUAL(data));
  }

  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <MenuProduk />
        <ContentView title="Form Tambah Penjual">
          {
            (penjual.error != null) ? <Alert severity="info">{penjual.error}</Alert> : null
          }
          <FormPenjual onSubmit={saveData} isBussy={false} />
        </ContentView>
      </Box>
  )
}
export default Home;