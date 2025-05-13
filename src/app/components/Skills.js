import { Box, Typography, Container, Grid, Paper, LinearProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'TypeScript', level: 70 },
    { name: 'Python', level: 65 },
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
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
            Skills
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={3}>
            {skills.map((skill) => (
              <Grid item xs={12} md={6} key={skill.name}>
                <motion.div variants={skillVariants}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                    <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between' }}>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
                        >
                          {skill.name}
                        </Typography>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Typography variant="body2" sx={{ color: theme.palette.grey[400] }}>
                          {skill.level}%
                        </Typography>
                      </motion.div>
                    </Box>
                    <motion.div
                      variants={progressVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                          },
                        }}
                      />
                    </motion.div>
                  </Paper>
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