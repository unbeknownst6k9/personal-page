// JavaScript source code
import React from 'react';
import { Box, Typography } from '@mui/material';
import NavBar from '../components/NavBar';

function NotFoundPage() {
    return (
        <Box>
            <NavBar/>
            <Typography>404 page not found</Typography>
        </Box>
    );
}
export default NotFoundPage;