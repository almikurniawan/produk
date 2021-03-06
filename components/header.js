import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = ()=>{
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} color="primary">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Test Frontend Engineer
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;