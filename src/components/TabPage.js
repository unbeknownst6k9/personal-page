// JavaScript source code
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

import DisplayField from './DisplayField';


//handles in page content from json data
//TODO: add card view and read from json file
function TabPage(props) {
    const { content, value, index } = props;
    return (
        <Box sx={{ marginLeft: 2, marginRight:2 }}
            role="tabpanel"
            hidden={value !== index}>
            <DisplayField title={content} />
            <DisplayField title='second item' />
        </Box>
    );
}
TabPage.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
export default TabPage;