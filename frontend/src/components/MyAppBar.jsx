import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { pages } from '../pages/pages';
import campingLogo from '../assets/camping.png';

// Import the useUserContext hook
import { useUserContext } from '../context/UserContext';

function MyAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { currentUser, handleUpdateUser } = useUserContext(); // Get user state and update function
  console.log(currentUser)
  const naVPages = [...pages]
  if (currentUser.userRole=="admin"){

    naVPages.push({ link: "/managetrack", label: 'MANAGE APP' },)
  }
  if (currentUser.userRole=="user"){

    naVPages.push({ link: "/mypage", label: 'MY PAGE' },)
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    handleUpdateUser({}); 
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static" sx={{ height: 100, display: 'flex', justifyContent: 'center', backgroundColor: '#393F44' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={campingLogo} alt="Camping Logo" style={{ width: 60, height: 60, borderRadius:50, marginRight: 10, display: { xs: 'flex', md: 'none' } }} />
            <Typography variant="h6" noWrap component={NavLink} to="/" sx={{ mr: 2, display: { xs: 'block', md: 'flex' }, fontFamily: 'Lugrasimo' ,fontWeight: 800,fontSize:'2rem', color: 'inherit', textDecoration: 'none' }}>
              Alpine Adventures
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
            <IconButton size="large" aria-label="menu" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
              {naVPages.map((page) => (
                <MenuItem key={page.link} component={NavLink} to={page.link} onClick={handleCloseNavMenu}>
                  {page.label}
                </MenuItem>
              ))}
              {!currentUser.email && (
                <>
                  <MenuItem component={NavLink} to="/signin">
                    Sign In
                  </MenuItem>
                  <MenuItem component={NavLink} to="/signup">
                    Sign Up
                  </MenuItem>
                </>
              )}
              {currentUser.email && (
                <MenuItem onClick={handleLogout}>
                  Logout 😊
                </MenuItem>
              )}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {naVPages.map((page) => (
              <MenuItem sx={{fontSize:'1.2rem'}} key={page.link} component={NavLink} to={page.link}>
                {page.label}
              </MenuItem>
            ))}
            {!currentUser.email && (
              <>
                <MenuItem sx={{fontSize:'1.2rem'}} component={NavLink} to="/signin">
                  SIGN IN
                </MenuItem>
                <MenuItem sx={{fontSize:'1.2rem'}} component={NavLink} to="/signup">
                  SIGN UP
                </MenuItem>
              </>
            )}
            {currentUser.email && (
              <MenuItem onClick={handleLogout}>
                <img src={currentUser.profilePhoto} alt="Profile" style={{ width: 40, height: 40, marginRight: 5 ,borderRadius:50 }} />
                LOGOUT 
              </MenuItem>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MyAppBar;
