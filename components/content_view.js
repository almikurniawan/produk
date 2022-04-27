import { Box, Toolbar, Typography, Card, CardContent } from '@mui/material';
const ContentView = (props) => {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: '100%' }} color>
            <Toolbar />
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" gutterBottomF align='left'>
                        {props.title}
                    </Typography>
                    {props.children}
                </CardContent>
            </Card>
        </Box>
    );
}

export default ContentView;