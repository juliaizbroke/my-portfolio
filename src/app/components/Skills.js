import { Box, Typography, Container, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import '@fontsource/roboto-mono';

const Skills = () => {
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

  const categorizedSkills = {
    Frontend: ['HTML/CSS', 'JavaScript/TypeScript', 'React'],
    Backend: ['Node.js', 'Flask', 'Next.js'],
    Languages: ['Python', 'Java', 'C#'],
    Database: ['MongoDB', 'PostgreSQL', 'NeonDB'],
    Tools: ['Git', 'Figma', 'Postman'],
    AI: ['Natural Language Processing', 'Machine Learning'],
  };

  const experiences = [
    {
      title: 'Fullstack Intern',
      company: 'NFQ',
      period: 'April 2025 - May 2025 (2 months)',
      description: 'Contributed to the development of NFQ Thailand landing website as well as the internal system for NFQ Thailand.',
    },
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        background: 'linear-gradient(45deg, #2d2d2d 0%, rgb(25, 14, 20) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background effects */}
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
        {/* Title Section */}
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
              #Skills & Experience
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
            Technical Expertise & Industry Experience
          </Typography>
        </Box>

        {/* Skills Section */}
         <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {Object.entries(categorizedSkills).map(([category, skills], idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      p: 3,
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 3,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        background: 'rgba(255, 255, 255, 0.05)',
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.primary.main,
                        fontSize: '1rem',
                        mb: 1,
                      }}
                    >
                      {category}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {skills.map((skill, i) => (
                        <Typography
                          key={i}
                          variant="body2"
                          sx={{
                            color: theme.palette.grey[100],
                            fontSize: '0.9rem',
                            pl: 1.5,
                            position: 'relative',
                            '&::before': {
                              content: '"•"',
                              position: 'absolute',
                              left: 0,
                              color: theme.palette.secondary.main,
                            },
                          }}
                        >
                          {skill}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Experience Section */}
        <Box sx={{ mt: 8 }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.grey[200],
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                fontWeight: 600,
                mb: 3,
                ml: 1,
              }}
            >
              Experience
            </Typography>

            <Grid container spacing={3}>
              {experiences.map((exp, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <motion.div variants={itemVariants}>
                    <Box
                      sx={{
                        p: 3,
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 2,
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          background: 'rgba(255, 255, 255, 0.05)',
                        },
                      }}
                    >
                      <Typography variant="h6" sx={{ color: theme.palette.grey[100], fontWeight: 600 }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: theme.palette.grey[400] }}>
                        {exp.company} | {exp.period}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.grey[300], mt: 1, fontSize: '0.85rem' }}
                      >
                        {exp.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
