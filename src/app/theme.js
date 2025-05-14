import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto-mono';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4ECDC4',
    },
    secondary: {
      main: '#FF6B6B',
    },
    background: {
      default: '#1a1a1a',
      paper: '#2d2d2d',
    },
  },
  typography: {
    fontFamily: '"Roboto Mono", monospace',
    h1: {
      fontWeight: 700,
      fontFamily: '"Roboto Mono", monospace',
      letterSpacing: '0.5px',
    },
    h2: {
      fontWeight: 700,
      fontFamily: '"Roboto Mono", monospace',
      letterSpacing: '0.5px',
    },
    h3: {
      fontWeight: 600,
      fontFamily: '"Roboto Mono", monospace',
      letterSpacing: '0.5px',
    },
    h4: {
      fontWeight: 600,
      fontFamily: '"Roboto Mono", monospace',
      letterSpacing: '0.5px',
    },
    h5: {
      fontWeight: 600,
      fontFamily: '"Roboto Mono", monospace',
      letterSpacing: '0.5px',
    },
    h6: {
      fontWeight: 600,
      fontFamily: '"Roboto Mono", monospace',
      letterSpacing: '0.5px',
    },
    body1: {
      fontFamily: '"Roboto Mono", monospace',
      letterSpacing: '0.5px',
    },
    body2: {
      fontFamily: '"Roboto Mono", monospace',
      letterSpacing: '0.5px',
    },
    button: {
      fontFamily: '"Roboto Mono", monospace',
      letterSpacing: '0.5px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontFamily: '"Roboto Mono", monospace',
          letterSpacing: '0.5px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto Mono", monospace',
          letterSpacing: '0.5px',
        },
      },
    },
  },
});

export default theme; 