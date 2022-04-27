import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Link from 'next/link';

const MenuProduk = () => {
    const drawerWidth = 240;

    const menuItem = [
        {
            name: 'Tambah Penjual',
            url: '/',
            icon: <HomeOutlinedIcon />,
        },
        {
            name: 'Tambah Produk',
            url: '/produk',
            icon: <HomeOutlinedIcon />,
        },
        {
            name: 'Daftar Produk',
            url: '/produk/list',
            icon: <HomeOutlinedIcon />,
        },
        {
            name: 'Cari Produk',
            url: '/produk/search',
            icon: <HomeOutlinedIcon />,
        },
    ];
    return (
        <Drawer
            variant="permanent"
            color="primary"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}
                style={{
                    // backgroundColor: blue[50],
                    height: '100vh',
                }}
            >
                <List>
                    {menuItem.map((value, index) => (
                        <Link href={value.url} key={index}>
                            <ListItem button key={value.name}>
                                <ListItemIcon>
                                    {value.icon}
                                </ListItemIcon>
                                <ListItemText primary={value.name} style={{
                                    // color: '#fff',
                                }} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}

export default MenuProduk;