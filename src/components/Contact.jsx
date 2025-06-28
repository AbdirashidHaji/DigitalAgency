import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Box,
  useTheme
} from '@mui/material';
import { Send } from '@mui/icons-material';
import { useState } from 'react';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" sx={{
      py: 10,
      backgroundColor: theme.palette.mode === 'dark' ? 'background.default' : 'grey.100'
    }}>
      <Container>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ 
          fontWeight: 700,
          color: 'text.primary'
        }}>
          Get In Touch
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph sx={{
          color: 'text.secondary'
        }}>
          Have a project in mind or want to learn more about our services?
        </Typography>
        
        <Grid container spacing={6} mt={4}>
          <Grid xs={12} md={6}>
            <Box sx={{
              p: 3,
              borderRadius: 2,
              backgroundColor: theme.palette.mode === 'dark' ? 'grey.900' : 'background.paper',
              boxShadow: 1,
              height: '100%'
            }}>
              <Typography variant="h5" gutterBottom sx={{ 
                fontWeight: 600,
                color: 'text.primary'
              }}>
                Contact Information
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                Email: hello@digitalagency.com
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                Phone: (123) 456-7890
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                Address: 123 Digital Street, Tech City, TC 12345
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Box component="form" onSubmit={handleSubmit} sx={{
              p: 3,
              borderRadius: 2,
              backgroundColor: theme.palette.mode === 'dark' ? 'grey.900' : 'background.paper',
              boxShadow: 1
            }}>
              <Grid container spacing={3}>
                <Grid xs={12}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'divider',
                        },
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'divider',
                        },
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'divider',
                        },
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<Send />}
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontWeight: 600
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;