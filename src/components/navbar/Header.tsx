import { Box, Container, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

export const Header = () => {
    return (
        <>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={7}>
                    <Typography style={{ fontSize: "24px", fontWeight: 500 }}>
                        Place List
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={5} spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Grid item xs={12} sm={4}>
                            <Select
                                fullWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                               
                            // onChange={}
                            >
                                <MenuItem value="unset" selected disabled hidden>unset</MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={1} >
                            <Container>|</Container>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <TextField fullWidth id="fullWidth" />
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
