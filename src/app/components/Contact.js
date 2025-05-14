import { Box, Typography, Container, TextField, Button, Paper, Snackbar, Alert } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    open: false,
    message: '',
    severity: 'success',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        open: true,
        message: error.message || 'Failed to send message. Please try again.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setStatus(prev => ({ ...prev, open: false }));
  };

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
      id="contact"
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
              #Contact
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
            Let's Connect & Collaborate
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                maxWidth: '600px',
                mx: 'auto',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease-in-out',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
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
                component="form" 
                onSubmit={handleSubmit}
                noValidate 
                sx={{ 
                  mt: 1,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  autoFocus
                  size="small"
                  disabled={loading}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: theme.palette.grey[100],
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: theme.palette.grey[400],
                      fontSize: { xs: '0.9rem', md: '1rem' },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: theme.palette.primary.main,
                    },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  size="small"
                  disabled={loading}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: theme.palette.grey[100],
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: theme.palette.grey[400],
                      fontSize: { xs: '0.9rem', md: '1rem' },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: theme.palette.primary.main,
                    },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="message"
                  label="Message"
                  type="text"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  size="small"
                  disabled={loading}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: theme.palette.grey[100],
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: theme.palette.grey[400],
                      fontSize: { xs: '0.9rem', md: '1rem' },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: theme.palette.primary.main,
                    },
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  sx={{
                    mt: 3,
                    mb: 2,
                    py: 1.2,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                    borderRadius: 1,
                    textTransform: 'none',
                    fontWeight: 500,
                    '&:hover': {
                      background: 'linear-gradient(45deg, #FF5252, #3DBEB6)',
                      transform: 'translateY(-2px)',
                    },
                    '&:disabled': {
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'rgba(255, 255, 255, 0.5)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </Box>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>

      <Snackbar
        open={status.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={status.severity}
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            color: theme.palette.grey[100],
            '& .MuiAlert-icon': {
              color: status.severity === 'success' ? theme.palette.primary.main : theme.palette.error.main,
            },
          }}
        >
          {status.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 