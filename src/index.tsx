import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";

import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './Redux/Store';

const theme = createTheme({
  typography: {
    fontFamily: ['Kanit', 'sans-serif'].join(','),
  },
});
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
<React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)

