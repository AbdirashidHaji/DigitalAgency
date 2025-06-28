import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Divider
} from '@mui/material';
import { Brightness4, Brightness7, Menu, Close } from '@mui/icons-material';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = ({ toggleDarkMode }) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  const drawer = (
    <Box 
      sx={{ 
        width: 250,
        height: '100%',
        backgroundColor: theme.palette.background.paper
      }}
      role="presentation"
    >
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}>
        <IconButton onClick={handleDrawerToggle}>
          <Close />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Link 
              to={item.id} 
              smooth={true} 
              duration={500} 
              onClick={handleDrawerToggle}
              style={{ width: '100%' }}
            >
              <ListItemButton sx={{ textAlign: 'center' }}>
                <Typography variant="body1" sx={{ width: '100%' }}>
                  {item.label}
                </Typography>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="inherit" elevation={0}>
        <Toolbar className="flex justify-between">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DigitalAgency
          </Typography>
          
          {/* Desktop Navigation - hidden on mobile */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            gap: 2 
          }}>
            {navItems.map((item) => (
              <Link key={item.id} to={item.id} smooth={true} duration={500}>
                <Button color="inherit">{item.label}</Button>
              </Link>
            ))}
          </Box>
          
          {/* Mobile menu button - hidden on desktop */}
          <Box sx={{ 
            display: { xs: 'flex', md: 'none' },
            alignItems: 'center',
            gap: 2
          }}>
            <IconButton onClick={toggleDarkMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 1 }}
            >
              <Menu />
            </IconButton>
          </Box>
          
          {/* Desktop theme toggle - hidden on mobile */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }
          }}>
            <IconButton onClick={toggleDarkMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;