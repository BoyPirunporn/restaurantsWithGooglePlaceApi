import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {  Theme, } from '@mui/material';
import { MediaQueryScreen } from '../constant/MediaQuery';
import CircleIcon from '@mui/icons-material/Circle';

import { useTheme } from '@mui/material/styles';
import ListIcon from '@mui/icons-material/List';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Box, Typography } from '@mui/material'
import logo from '../logo.svg'
import { makeStyles } from '@mui/styles';

const styles = makeStyles((theme: Theme) => ({
    root: {
        position: 'sticky',
        top: 0,
        zIndex:100
    },
    appbar: {
        position: "static",
        bgcolor: "#134B8A",
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 11px'
    },
    logoContainer: {
        alignItems: 'center',
        display: 'flex',

    },
    logoimg: {
        objectFit: 'cover',
        borderRadius: '8px',
        padding: '6px 0',
        height: '50px',
        width: '50px',
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'block'
        }
    },
    boxToobar: {
        'display': 'flex',
        'justifyContent': 'end',
        alignItems: 'center'
    },
    notificationsIcon: {
        display: 'block',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    notificationsCircle: {
        position: 'absolute',
        left: '10px',
        top: '-4px'
    },
    sideBar: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'block',
        width: '90px',
        height: '1456px',
        backgroundColor: '#FFFFFF',
        boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: '0px 50px 50px 0px;',
        [theme.breakpoints.down('md')]:
            { display: 'none' }
    },
    logoSideBar: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        height: '150px',
        borderBottom: '1px solid #E5E5E5'
    },
    iconSideBarContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '150px',
        borderBottom: '1px solid #E5E5E5',
    },
    iconSideBar: {
        backgroundColor: '#134B8A',
        padding: '15px',
        borderRadius: '10px',
        color: '#fff',
        display: 'flex',
        fontSize: '32px',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

export default function NavBar() {
    const theme = useTheme()
    const classed = styles()
    return (
        <Box className={classed.root}>
            <Box >
                <AppBar position="static" sx={{ bgcolor: "#134B8A", }} >
                    <Toolbar className={classed.toolbar} >
                        <Box className={classed.logoContainer} >
                            <img src={logo} alt="" className={classed.logoimg} />
                        </Box>
                        <Box className={classed.boxToobar} >
                            <Box className={classed.notificationsIcon} mr={2}>
                                <Box>
                                    <NotificationsIcon />
                                </Box>
                                <Box className={classed.notificationsCircle} >
                                    <CircleIcon sx={{ color: 'red', width: '15px' }} />
                                </Box>
                            </Box>
                            <Box sx={{ mr: MediaQueryScreen(theme) ? 2 : 0, }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </Box>
                            <Box sx={{ mr: 2, display: MediaQueryScreen(theme) ? 'block' : 'none' }}>
                                <Typography>Place</Typography>
                            </Box>
                            <Box sx={{ mr: 2, display: MediaQueryScreen(theme) ? 'block' : 'none' }}>
                                <KeyboardArrowDown />
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box className={classed.sideBar}>
                <Box flexDirection={'column'} display={'flex'}>
                    <Box className={classed.logoSideBar}>
                        <img
                            src={logo}
                            alt="logo"
                            height={'50px'}
                            width={'50px'}
                            style={{ objectFit: 'cover' }} />
                    </Box>
                    <Box className={classed.iconSideBarContainer}>
                        <Box className={classed.iconSideBar}><ListIcon /></Box>
                        <Typography>Place</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
