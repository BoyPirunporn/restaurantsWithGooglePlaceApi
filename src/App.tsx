import React from 'react';
import './App.css';
import SideBar from './navbar/SideBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './Screen/HomeScreen';
import RestaurentsDetail from './Screen/RestaurentsDetail';
import { Box } from '@mui/material';
import { MediaQueryScreen } from './constant/MediaQuery';
import { useTheme, createTheme,ThemeProvider } from '@mui/material/styles';

function App() {
 const theme = useTheme()
 
  return (
    <Router>
      <SideBar />
      <Box sx={{ marginTop: 3, paddingLeft: MediaQueryScreen(theme) ? '120px' : '13px', paddingRight: MediaQueryScreen(theme) ? '35px' : '13px',  }}>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/detail/:id' element={<RestaurentsDetail />} />
        </Routes>
    </Box>
    </Router>
  );
}

export default App;

