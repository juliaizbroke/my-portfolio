'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography, Container, Box, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import theme from './theme';
import { useCallback } from 'react';

// Easing function for smooth animation
const easeInOutCubic = (t) => {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const handleSmoothScroll = (e, targetId) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId.toLowerCase());
  if (targetElement) {
    const headerOffset = 80;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 1200; // Longer duration for smoother scroll
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * easeProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar 
            position="sticky" 
            sx={{ 
              background: "linear-gradient(45deg,rgb(91, 51, 51),rgb(42, 73, 71))",
              opacity: "80%",
              backdropFilter: 'blur(8px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              zIndex: 1000,
            }}
          >
            <Container maxWidth="lg">
              <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography onClick={(e)=>handleSmoothScroll(e,"home")} variant="h6" sx={{ fontWeight: 500, cursor:"pointer" }}>
                  Julia
                </Typography>
                <Box sx={{ display: 'flex', gap: 4 }}>
                  {['About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
                      sx={{
                        color: 'white',
                        textDecoration: 'none',
                        position: 'relative',
                        cursor: 'pointer',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -4,
                          left: 0,
                          width: '100%',
                          height: 2,
                          backgroundColor: theme.palette.primary.main,
                          transform: 'scaleX(0)',
                          transition: 'transform 0.3s ease',
                        },
                        '&:hover::after': {
                          transform: 'scaleX(1)',
                        },
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
          {children}
          <Box
            component="footer"
            sx={{
              py: 4,
              backgroundColor: theme.palette.background.paper,
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Container maxWidth="lg">
              <Typography variant="body2" align="center" sx={{ mb: 2, color: theme.palette.grey[400] }}>
                © {new Date().getFullYear()} Julia. All rights reserved.
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: 3,
                '& .MuiIconButton-root': {
                  color: theme.palette.grey[400],
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateY(-2px)',
                  },
                },
              }}>
                <IconButton
                  href="#"
                  target="_blank"
                  aria-label="LinkedIn"
                  size="medium"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="#"
                  target="_blank"
                  aria-label="GitHub"
                  size="medium"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href="#"
                  target="_blank"
                  aria-label="Twitter"
                  size="medium"
                >
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Container>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  )
} 