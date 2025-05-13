'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography, Container, Box, Link } from '@mui/material';
import theme from './theme';

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
            }}
          >
            <Container maxWidth="lg">
              <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  Julia
                </Typography>
                <Box component="nav" sx={{ display: 'flex', gap: 4 }}>
                  {['About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      sx={{
                        color: 'white',
                        textDecoration: 'none',
                        position: 'relative',
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
              <Typography variant="body2" align="center" sx={{ mb: 2 }}>
                © {new Date().getFullYear()} Julia. All rights reserved.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
                {['LinkedIn', 'GitHub', 'Twitter'].map((platform) => (
                  <Link
                    key={platform}
                    href="#"
                    sx={{
                      color: theme.palette.grey[400],
                      textDecoration: 'none',
                      '&:hover': {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {platform}
                  </Link>
                ))}
              </Box>
            </Container>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  )
} 