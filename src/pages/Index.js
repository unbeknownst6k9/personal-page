// JavaScript source code
//this is the main page
import React from 'react';
import { Button, Box, Card, CardMedia, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import NavBar from '../components/NavBar';
import picture from '../img/Tim_icon2.png';
import TabPages from '../components/TabPages';

const BlueBtn = styled('button')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
});

function IndexPage() {
    return (
        <Box>
            <NavBar />
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <Box sx={{}}>
                    <img src={picture} width="50%" style={{ padding: '10px' }} />
                </Box>
                <Box>
                    <Box>
                        <p>This is a title</p>
                        <p>This is a content</p>
                    </Box>
                    <Divider />
                    <Box sx={{ textAlign:'left' }}>
                        <p>This is the link</p>
                    </Box>
                </Box>
            </Box>
            <TabPages/>
            <Button sx={{
                color: 'black',
                fontWeight: 'medium',
                mx: 0.5,
            }}>material button</Button>
        </Box>
    );
}
export default IndexPage