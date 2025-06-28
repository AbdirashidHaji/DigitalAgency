import { Container, Grid, Typography, Link as MuiLink, Box } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              DigitalAgency
            </Typography>
            <Typography variant="body2" paragraph>
              We create digital experiences that help brands grow and succeed in the online world.
            </Typography>
            <Box display="flex" gap={2} mt={2}>
              <MuiLink href="#" color="inherit">
                <Facebook />
              </MuiLink>
              <MuiLink href="#" color="inherit">
                <Twitter />
              </MuiLink>
              <MuiLink href="#" color="inherit">
                <Instagram />
              </MuiLink>
              <MuiLink href="#" color="inherit">
                <LinkedIn />
              </MuiLink>
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box display="flex" flexDirection="column">
              <MuiLink href="#home" color="inherit" underline="hover" mb={1}>
                Home
              </MuiLink>
              <MuiLink href="#services" color="inherit" underline="hover" mb={1}>
                Services
              </MuiLink>
              <MuiLink href="#about" color="inherit" underline="hover" mb={1}>
                About
              </MuiLink>
              <MuiLink href="#testimonials" color="inherit" underline="hover" mb={1}>
                Testimonials
              </MuiLink>
              <MuiLink href="#contact" color="inherit" underline="hover">
                Contact
              </MuiLink>
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Box display="flex" flexDirection="column">
              <MuiLink href="#" color="inherit" underline="hover" mb={1}>
                Web Design
              </MuiLink>
              <MuiLink href="#" color="inherit" underline="hover" mb={1}>
                Development
              </MuiLink>
              <MuiLink href="#" color="inherit" underline="hover" mb={1}>
                Marketing
              </MuiLink>
              <MuiLink href="#" color="inherit" underline="hover" mb={1}>
                Mobile Apps
              </MuiLink>
              <MuiLink href="#" color="inherit" underline="hover">
                SEO
              </MuiLink>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" paragraph>
              Subscribe to our newsletter for the latest updates.
            </Typography>
            <Box component="form" display="flex" gap={1}>
              <TextField
                variant="outlined"
                placeholder="Your email"
                size="small"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                  },
                  input: { color: 'white' },
                }}
              />
              <Button variant="contained" color="primary">
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box mt={6} pt={4} borderTop="1px solid rgba(255, 255, 255, 0.1)">
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} DigitalAgency. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;