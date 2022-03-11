import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Stack, useMediaQuery } from '@mui/material';
import { MediaQueryScreen } from '../constant/MediaQuery';
import { ThemeProvider } from '@mui/styles';
import { useTheme } from '@mui/material/styles';



export default function SideBar() {
    const theme = useTheme()
    return (
       <Stack>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ bgcolor: "#134B8A" }} >
                    <Toolbar style={{ 'display': 'flex', 'justifyContent': 'end' }}>
                        <Box sx={{ mr: 2 }}><NotificationsIcon /></Box>
                        <Box>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box
                position={'absolute'}
                left={'0%'}
                right={'0%'}
                top={'0%'}
                bottom={'0%'}
                display={MediaQueryScreen(theme) ? 'block' : 'none'}
                sx={{
                    width: '90px',
                    height: '1456px',
                    backgroundColor: '#FFFFFF',
                    boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
                    borderRadius: '0px 50px 50px 0px;'
                }}
            />
       </Stack>
    );
}
