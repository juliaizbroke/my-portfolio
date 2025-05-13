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

  const cardVariants = {
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
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      image: '/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      image: '/project2.jpg',
      technologies: ['React', 'Firebase', 'Material-UI'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather data',
      image: '/project3.jpg',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js'],
      liveLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Projects
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={project.title}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.title}
                        sx={{ objectFit: 'cover' }}
                      />
                    </motion.div>
                    <CardContent>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
                        >
                          {project.title}
                        </Typography>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ color: theme.palette.grey[300], mb: 2 }}
                        >
                          {project.description}
                        </Typography>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          {project.technologies.map((tech) => (
                            <motion.div
                              key={tech}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Typography
                                variant="caption"
                                sx={{
                                  px: 1,
                                  py: 0.5,
                                  borderRadius: 1,
                                  backgroundColor: 'rgba(78, 205, 196, 0.1)',
                                  color: theme.palette.primary.main,
                                }}
                              >
                                {tech}
                              </Typography>
                            </motion.div>
                          ))}
                        </Box>
                      </motion.div>
                    </CardContent>
                    <CardActions>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="small"
                          href={project.liveLink}
                          target="_blank"
                          sx={{
                            color: theme.palette.primary.main,
                            '&:hover': {
                              backgroundColor: 'rgba(78, 205, 196, 0.1)',
                            },
                          }}
                        >
                          Live Demo
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="small"
                          href={project.githubLink}
                          target="_blank"
                          sx={{
                            color: theme.palette.primary.main,
                            '&:hover': {
                              backgroundColor: 'rgba(78, 205, 196, 0.1)',
                            },
                          }}
                        >
                          GitHub
                        </Button>
                      </motion.div>
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