import { Alert, Box, FormControl,  Grid, IconButton, InputBase, MenuItem,  Select,  Typography, useMediaQuery, useTheme } from '@mui/material'
import Paper from '@mui/material/Paper';
import React, { Dispatch, SetStateAction, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    handleChange:(text:string) => void;
    handleClick:() => void;
    value:string;
    setValue:Dispatch<SetStateAction<string>>
    setSearchText:Dispatch<SetStateAction<string>>
    SearchText:string
}
export const Header: React.FC<Props> = ({ handleChange, value, setValue, SearchText, setSearchText, handleClick}) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
   
    return (
        <Box >
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={8}>
                    <Typography variant={matches ? 'h4' : 'h6'} style={{ fontWeight: '600' }} >Place List</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box >
                        <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                            <Grid item xs={12} md={5} mt={1}>
                                <FormControl sx={{ m: 0, width: '100%', p: 0, borderColor: '#134B8A' }}>
                                    <Select
                                        sx={{ borderRadius: 30, height: '50px', borderColor: '#134B8A', }}
                                        value={value}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        onChange={(e) => handleChange(e.target.value)}
                                    >
                                        <MenuItem value={'restaurant'}>Restaurent</MenuItem>
                                        <MenuItem value={'bakery'}>Bakery</MenuItem>
                                        <MenuItem value={'cafe'}>Cafe</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={1} mt={1} sx={{ display: matches ?'none' : 'flex', justifyContent: 'center', alignItems:'center' }}>
                                <Box sx={{color: '#134B8A'}}>|</Box>
                            </Grid>
                            <Grid item xs={12} md={6} mt={1}>
                                <Paper
                                    component="div"
                                    sx={{display: 'flex', alignItems: 'center', width: '100%', borderRadius: 30, background: 'none', boxShadow: 'none', border: '1px solid #134B8A' }}
                                >
                                    <InputBase
                                        value={SearchText}
                                        sx={{ ml: 1, flex: 1, border: '1px ', pl: '5px', width: '100%', }}
                                        placeholder="Search Name"
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />
                                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={handleClick} >
                                        <SearchIcon  />
                                    </IconButton>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
