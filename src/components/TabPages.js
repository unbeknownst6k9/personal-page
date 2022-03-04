// JavaScript source code
import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

import TabPage from './TabPage';

//handles tab function only
function TabPages() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Stories" />
                    <Tab label="Programming" />
                    <Tab label="Others" />
                </Tabs>
            </Box>
            <TabPage content="This is page 1" value={value} index={0}/>
            <TabPage content="This is page 2" value={value} index={1}/>
            <TabPage content="This is page 3" value={value} index={2}/>

        </Box>

    );
}
export default TabPages;