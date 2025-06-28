import { 
  Container, 
  Grid, 
  Typography, 
  Avatar, 
  Box,
  useTheme,
  Paper
} from '@mui/material';
import { EmojiObjects, TrendingUp, Group } from '@mui/icons-material';

const About = () => {
  const theme = useTheme();

  return (
    <section id="about" sx={{
      py: 10,
      backgroundColor: theme.palette.mode === 'dark' ? 'background.default' : 'grey.100'
    }}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid xs={12} md={6}>
            <Paper elevation={3} sx={{
              borderRadius: 2,
              overflow: 'hidden',
              height: '100%',
              display: 'flex'
            }}>
              <Avatar
                variant="rounded"
                src="/images/about-placeholder.jpg"
                alt="Our team working"
                sx={{ 
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  objectFit: 'cover'
                }}
              />
            </Paper>
          </Grid>
          <Grid xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ 
              fontWeight: 700,
              color: 'text.primary'
            }}>
              About Our Agency
            </Typography>
            <Typography variant="body1" paragraph sx={{
              color: 'text.secondary'
            }}>
              Founded in 2015, we are a passionate team of designers, developers, and marketers 
              dedicated to helping businesses succeed in the digital world.
            </Typography>
            
            <Box mt={4}>
              <Grid container spacing={2}>
                <Grid xs={12} sm={4}>
                  <Paper elevation={2} sx={{
                    p: 2,
                    height: '100%',
                    textAlign: 'center',
                    backgroundColor: theme.palette.mode === 'dark' ? 'grey.900' : 'background.paper'
                  }}>
                    <EmojiObjects fontSize="large" color="primary" />
                    <Typography variant="h6" mt={1} sx={{ color: 'text.primary' }}>
                      Innovation
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Cutting-edge solutions
                    </Typography>
                  </Paper>
                </Grid>
                <Grid xs={12} sm={4}>
                  <Paper elevation={2} sx={{
                    p: 2,
                    height: '100%',
                    textAlign: 'center',
                    backgroundColor: theme.palette.mode === 'dark' ? 'grey.900' : 'background.paper'
                  }}>
                    <TrendingUp fontSize="large" color="primary" />
                    <Typography variant="h6" mt={1} sx={{ color: 'text.primary' }}>
                      Growth
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Focused on your success
                    </Typography>
                  </Paper>
                </Grid>
                <Grid xs={12} sm={4}>
                  <Paper elevation={2} sx={{
                    p: 2,
                    height: '100%',
                    textAlign: 'center',
                    backgroundColor: theme.palette.mode === 'dark' ? 'grey.900' : 'background.paper'
                  }}>
                    <Group fontSize="large" color="primary" />
                    <Typography variant="h6" mt={1} sx={{ color: 'text.primary' }}>
                      Collaboration
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Partnering with you
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About;