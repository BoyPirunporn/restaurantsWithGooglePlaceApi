import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Stack } from '@mui/material';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Navbar = () => {
    return (
        <Stack>
            <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
            <Box
                borderRadius={'10'}
                style={{'backgroundColor':'red','borderTopRightRadius':'20%'}}
            sx={{ width: 150 }}
            role="presentation"
        >
           
            <Divider />
        </Box>
        </Stack>
    );
}
export default Navbar


// export default function SwipeableTemporaryDrawer() {
   
// }
