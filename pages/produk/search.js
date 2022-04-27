import { Box, CssBaseline } from '@mui/material';
import Header from '../../components/header';
import MenuProduk from '../../components/menu';
import ContentView from '../../components/content_view';
import { DataGrid } from '@mui/x-data-grid';
import { FilterProdukByKeyword } from '../../components/filter_produk';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_PRODUK_BY_KEYWORD } from '../../actions/listProduk';

export default function Search() {
    const data = useSelector(state => state.reducerListProduk);
    const dispatch = useDispatch();
    const getData = (keyword) => {
        dispatch(LOAD_PRODUK_BY_KEYWORD(keyword));
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header />
            <MenuProduk />
            <ContentView title="Daftar Produk">
                <FilterProdukByKeyword onSearch={getData} />
                <div style={{ height: '100vh', width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={100}
                        rowsPerPageOptions={[100]}
                    />
                </div>
            </ContentView>
        </Box>
    )
}

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nama', headerName: 'Nama', width: 150 },
    { field: 'Satuan', headerName: 'Satuan', width: 150 },
    { field: 'hargaSatuan', headerName: 'Harga', width: 150 },
    { field: 'sellerId', headerName: 'ID Penjual', width: 70 },
    { field: 'deskripsi', headerName: 'Deskripsi', width: 350 },
];