import { Container, Grid, Typography, Card, CardContent, Box } from '@mui/material';
import { 
  DesignServices, 
  Code, 
  Analytics, 
  Smartphone, 
  Search, 
  People 
} from '@mui/icons-material';

const services = [
  {
    icon: <DesignServices fontSize="large" color="primary" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user experience and drive engagement."
  },
  {
    icon: <Code fontSize="large" color="primary" />,
    title: "Web Development",
    description: "Custom websites built with modern technologies for optimal performance."
  },
  {
    icon: <Analytics fontSize="large" color="primary" />,
    title: "Digital Marketing",
    description: "Data-driven strategies to grow your online presence and reach your audience."
  },
  {
    icon: <Smartphone fontSize="large" color="primary" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android."
  },
  {
    icon: <Search fontSize="large" color="primary" />,
    title: "SEO Optimization",
    description: "Improve your search rankings and organic traffic with our SEO expertise."
  },
  {
    icon: <People fontSize="large" color="primary" />,
    title: "Social Media",
    description: "Engage your audience and build your brand through strategic social media."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <Container>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          Our Services
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" align="center" paragraph>
          We offer a comprehensive range of digital services to help your business thrive online.
        </Typography>
        
        <Grid container spacing={4} mt={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="text-center">
                  <Box mb={2}>{service.icon}</Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Services;