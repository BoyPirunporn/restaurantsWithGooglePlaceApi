import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


export default function SideBar() {
    const [menu, setMenu] = useState({});

    return (
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
    );
}
