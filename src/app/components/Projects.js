import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const Projects = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const projects = [
    {
      title: 'Movie App',
      description: 'A platform to browse the trending movie and add your favourites in your watchlist.',
      image: '/movie-app.png',
      technologies: ['React', 'Next.js', 'TypeScript', 'DaisyUI'],
      liveLink: 'https://moive-app-project.vercel.app/home',
      githubLink: 'https://github.com/juliaizbroke/moive_app',
    },
    {
      title: 'FitHub',
      description: 'A platform for better and healthy lifestyle by getting tailored advices from professionals.',
      image: '/fithub.png',
      technologies: ['React','Next.js', 'NeonDB', 'Material-UI'],
      liveLink: 'https://fit-hub-psi.vercel.app',
      githubLink: 'https://github.com/juliaizbroke/FitHub',
    },
    {
      title: 'Heavenly Travels',
      description: 'A small mockup platform of trip.com.',
      image: '/project3.jpg',
      technologies: ['JavaScript', 'MongoDB'],
      liveLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        background: 'linear-gradient(45deg, #2d2d2d 0%, rgb(25, 14, 20) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: `radial-gradient(circle at 80% 20%, ${theme.palette.primary.main} 0%, transparent 50%),
                      radial-gradient(circle at 20% 80%, ${theme.palette.secondary.main} 0%, transparent 50%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                fontWeight: 700,
                color: '#FF6B6B',
                mr: 2,
              }}
            >
              #Projects
            </Typography>
            <Box
              sx={{
                flex: 1,
                height: '2px',
                background: '#FF6B6B',
                opacity: 0.5,
                borderRadius: '2px',
              }}
            />
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: theme.palette.grey[300],
              ml: 2,
            }}
          >
            Featured Works & Applications
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={3} justifyContent="flex-start">
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      width: '320px',
                      height: '420px',
                      mx: 'auto',
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease-in-out',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        '&::before': {
                          transform: 'scale(1)',
                          opacity: 0.1,
                        },
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        opacity: 0,
                        transition: 'all 0.3s ease-in-out',
                        transform: 'scale(0.8)',
                        zIndex: 0,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={project.image}
                      alt={project.title}
                      sx={{ 
                        objectFit: 'cover',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    />
                    <CardContent sx={{ 
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column',
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{ 
                          color: theme.palette.grey[100],
                          fontWeight: 600,
                          fontSize: { xs: '0.9rem', md: '1rem' },
                          mb: 1,
                          lineHeight: 1.4,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ 
                          color: theme.palette.grey[400],
                          fontSize: { xs: '0.8rem', md: '0.85rem' },
                          mb: 2,
                          flexGrow: 1,
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        gap: 1, 
                        flexWrap: 'wrap',
                        mb: 2,
                      }}>
                        {project.technologies.map((tech) => (
                          <Typography
                            key={tech}
                            variant="caption"
                            sx={{
                              px: 1,
                              py: 0.5,
                              borderRadius: 1,
                              backgroundColor: 'rgba(78, 205, 196, 0.1)',
                              color: theme.palette.primary.main,
                              fontSize: { xs: '0.7rem', md: '0.75rem' },
                            }}
                          >
                            {tech}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions sx={{ 
                      position: 'relative',
                      zIndex: 1,
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                      p: 2,
                      justifyContent: 'space-between',
                    }}>
                      <Button
                        size="small"
                        href={project.liveLink}
                        target="_blank"
                        sx={{
                          color: theme.palette.primary.main,
                          fontSize: { xs: '0.75rem', md: '0.8rem' },
                          '&:hover': {
                            backgroundColor: 'rgba(78, 205, 196, 0.1)',
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                      <Button
                        size="small"
                        href={project.githubLink}
                        target="_blank"
                        sx={{
                          color: theme.palette.primary.main,
                          fontSize: { xs: '0.75rem', md: '0.8rem' },
                          '&:hover': {
                            backgroundColor: 'rgba(78, 205, 196, 0.1)',
                          },
                        }}
                      >
                        GitHub
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 