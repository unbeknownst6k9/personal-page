// JavaScript source code
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';


//handles in page content from json data
function TabPage(props) {
    const { content, value, index } = props;
    return (
        <Box
            role="tabpanel"
            hidden={value !== index}>
            <Typography>{content}</Typography>
        </Box>
    );
}
TabPage.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
export default TabPage;