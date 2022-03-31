import CartWidget from "./CartWidget";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link, NavLink } from "react-router-dom"


const pages = [{ name: "Escape From Tarkov", url: "EFT" }, { name: "iRacing", url: "iRacing" }, { name: "Star Citizen", url: "StarCitizen" }];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar id="navbar" position="static" color="transparent">
            <Container id="back-to-top-anchor" maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Link to="/">
                            <img id="jgLogo" src="/assets/justgaminglogo.png" alt="JustGaming Logo" />
                        </Link>
                    </Typography>

                    <Box justifyContent="flex-start" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <NavLink className="navLink" to={/game/ + page.url}>{page.name}</NavLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Link to="/">
                            <img id="jgLogo" src="/assets/justgaminglogo.png" alt="JustGaming Logo" />
                        </Link>
                    </Typography>

                    <NavLink className="navIcon" to="/">
                        <HomeOutlinedIcon />
                    </NavLink>

                    <NavLink className="navIcon" to="/cart/"><CartWidget /></NavLink>

                    <Box justifyContent="flex-end" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button id="navButton"
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                <NavLink to={/game/ + page.url}>{page.name}</NavLink>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;