import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <Container>
        <Box textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              We Create Digital Experiences
            </Typography>
            <Typography variant="h5" component="p" color="textSecondary" gutterBottom>
              Helping brands grow through innovative digital solutions
            </Typography>
            <Box mt={4}>
              <Link to="contact" smooth={true} duration={500}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </Button>
              </Link>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </section>
  );
};

export default Hero;