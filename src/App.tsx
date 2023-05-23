import NavBar from './navbar/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './Screen/HomeScreen';
import RestaurentsDetail from './Screen/RestaurentsDetail';
import { Box } from '@mui/material';


function App() {
  return (
    <Router>
      <NavBar />
      <Box >
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/detail/:id' element={<RestaurentsDetail />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;

