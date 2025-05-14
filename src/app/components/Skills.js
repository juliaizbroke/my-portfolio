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

  const skills = [
    { name: 'HTML/CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Python', category: 'Backend' },
    { name: 'Natual Language Processing', category: 'NLP'}
  
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
              #Skills
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
            Technical Expertise & Tools
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={2} justifyContent="flex-start">
            {skills.map((skill, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      p: 2,
                      width: '180px',
                      height: '100px',
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
                      justifyContent: 'center',
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
                    <Box 
                      sx={{ 
                        position: 'relative', 
                        zIndex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.5
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.grey[100],
                          fontSize: { xs: '0.85rem', md: '0.9rem' },
                          lineHeight: 1.3,
                        }}
                      >
                        {skill.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: theme.palette.grey[400],
                          fontWeight: 500,
                          fontSize: { xs: '0.7rem', md: '0.75rem' },
                        }}
                      >
                        {skill.category}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 