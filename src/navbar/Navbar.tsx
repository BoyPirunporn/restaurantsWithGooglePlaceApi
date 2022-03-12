import * as React from 'react';
import Box from '@mui/material/Box';

import Divider from '@mui/material/Divider';

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
