import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Avatar, 
  Box, 
  IconButton 
} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { useState } from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "DigitalAgency transformed our online presence. Our website traffic has increased by 300% since working with them.",
    avatar: "/images/avatar1.jpg"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, BrandCo",
    content: "The team's creativity and technical expertise delivered exactly what we needed. Highly recommended!",
    avatar: "/images/avatar2.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, DesignHub",
    content: "Their mobile app development service was exceptional. They understood our vision and brought it to life perfectly.",
    avatar: "/images/avatar3.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20">
      <Container>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          Client Testimonials
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" align="center" paragraph>
          Don't just take our word for it - hear what our clients say
        </Typography>
        
        <Box mt={6} position="relative">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="text-center">
              <Avatar 
                src={testimonials[activeIndex].avatar} 
                alt={testimonials[activeIndex].name}
                sx={{ width: 80, height: 80, margin: '0 auto 16px' }}
              />
              <Typography variant="body1" paragraph>
                "{testimonials[activeIndex].content}"
              </Typography>
              <Typography variant="h6" component="h3">
                {testimonials[activeIndex].name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {testimonials[activeIndex].role}
              </Typography>
            </CardContent>
          </Card>
          
          <Box display="flex" justifyContent="center" mt={4} gap={2}>
            <IconButton onClick={handlePrev} color="primary">
              <KeyboardArrowLeft />
            </IconButton>
            <IconButton onClick={handleNext} color="primary">
              <KeyboardArrowRight />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Testimonials;