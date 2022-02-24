// JavaScript source code
import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Box, Toolbar, Button } from '@mui/material';


const StyledButton = styled(Button)`
    color: white;
`;

function NavBar() {
    return (
        <Box sx={{ backgroundColor:'#2196f3'}}>
            <Toolbar >
                <StyledButton component={Link} to="/">Home</StyledButton>
                <StyledButton component={Link} to="/About">About</StyledButton>
                <StyledButton component={Link} to="/Archieve">Archieve</StyledButton>
                <StyledButton component={Link} to="/Contact">Contact</StyledButton>
            </Toolbar>
        </Box>
    );
}
export default NavBar;