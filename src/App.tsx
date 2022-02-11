import React from 'react';
import './App.css';
import SideBar from './components/navbar/SideBar';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Header } from './components/navbar/Header';
import BodyComponent from './components/Body';

interface myArray {
  item: myObj
}
interface myObj {
  _name: string,
  _age: number,
  _isAuth: boolean,
}


function App() {
  // const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SideBar />
        </Grid>
        <Grid item xs={1} >
          <Box
            position={'absolute'}
            left={'0%'}
            right={'0%'}
            top={'0%'}
            bottom={'0%'}
            display={matches ? 'block' : 'none'}
            sx={{
              width: '90px',
              height: '1456px',
              backgroundColor: '#FFFFFF',
              boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: '0px 50px 50px 0px;'
            }}
          />
        </Grid>
        <Grid  item xs={matches ? 11 : 12} >
          <Box sx={{ padding: '5px' }}>
            <Box sx={{ marginTop: '10px' }}><Header></Header></Box>
            <Box sx={{ marginTop: '20px' }}><BodyComponent></BodyComponent></Box>
       </Box>
          </Grid>
      </Grid>


    </>
  );
}

export default App;

