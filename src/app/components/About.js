import { Box, Typography, Container, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const About = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        background: "linear-gradient(225deg, #2d2d2d  0%, rgb(25, 14, 20) 100%)",
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
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 700,
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Paper
              elevation={3}
              sx={{
                p: 6,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
                border: '1px solid rgba(201, 73, 150, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '12px', md: '17px' },
                    lineHeight: 1.8,
                    color: theme.palette.grey[300],
                    mb: 3,
                  }}
                >
                  I am a passionate full-stack developer with a strong foundation in both
                  front-end and back-end technologies. My journey in web development
                  started with a curiosity about how websites work, which led me to
                  explore various technologies and frameworks.
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                    color: theme.palette.grey[300],
                  }}
                >
                  I specialize in creating responsive, user-friendly applications using
                  modern technologies like React, Node.js, and TypeScript. I believe in
                  writing clean, maintainable code and staying up-to-date with the
                  latest industry trends and best practices.
                </Typography>
              </motion.div>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 