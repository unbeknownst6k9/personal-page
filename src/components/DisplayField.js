// JavaScript source code
import React from 'react';

import { Box, ButtonBase, Card, Grid, Typography } from '@mui/material';

function DisplayField(props) {
    const { title, image, date, content } = props;

    return (
        <Card sx={{ marginTop: 2, marginBottom: 2 }}>
            <Grid container spcaing={2}>
                <Grid item>
                    <ButtonBase sx={{ height: 256, width: 256, border: 2 }}>
                        <img src="../img/Tim_icon2.png" alt="Example"/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction='column' spacing={2} sx={{ marginTop:1 }}>
                        <Grid item>
                            <Typography gutterBottom variant="subtitle1" component="div">{ title}</Typography>
                            <Typography variant="body2" gutterBottom>main content</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>Learn more</Typography>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ paddingRight: 5 }}>
                        <Typography sx={{ fontSize: 13, color:'#757575' }}>11-5-2021</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
}

export default DisplayField;