import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import SideBar from './components/navbar/SideBar';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
import { Header } from './components/navbar/Header';

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
    <div>
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
        <Grid item xs={matches ? 11 : 12}>
          <Header></Header>
        </Grid>

      </Grid>


    </div>
  );
}

export default App;

