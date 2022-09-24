import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const navItems = ['Plan Today', 'View Plan', 'Help'];

function NavBar(props) {

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <span style={{ marginRight: 20 }} className="material-symbols-outlined">
                        auto_fix_high
                    </span>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 0.9, display: { xs: 'none', sm: 'block' } }}
                    >
                        Simplan
                    </Typography>
                    <Box >
                        {navItems.map((item) => (
                            <Button key={item} sx={{ marginLeft: 10, color: '#fff' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
