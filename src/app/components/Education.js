import { Box, Typography, Container, Paper, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Education = () => {
  const theme = useTheme();

  return (
    <Box
      id="education"
      sx={{
        py: 8,
        background: "linear-gradient(45deg, #2d2d2d  0%, rgb(25, 14, 20) 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 700,
            background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
            backgroundClip: "text",
            textFillColor: "transparent",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Education and Certificates
        </Typography>
        <Grid sx={{ alignItems: "center" }} container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: "100%",
                background:
                  "linear-gradient(45deg,rgb(127, 71, 71),rgb(70, 122, 118))",
                backdropFilter: "blur(10px)",
                borderRadius: 2,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
                width: "500px",
                height: "200px"
              }}
            >
              <Typography
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                Bachelor of Science in Computer Science
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ mb: 2, color: theme.palette.grey[400] }}
              >
                Assumption University of Thailand
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.grey[500] }}
              >
                2022 - current
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: "100%",
                background:
                  "linear-gradient(45deg,rgb(127, 71, 71),rgb(70, 122, 118))",
                backdropFilter: "blur(10px)",
                borderRadius: 2,
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
                width: "500px ",
                height: "200px",
              }}
            >
              <Typography
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                Google Data Analytics Professional Certificate
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ mb: 2, color: theme.palette.grey[400] }}
              >
                Coursera
              </Typography>
              <a href="https://coursera.org/share/9d8297ed2dd0158328d5cc660a73d283"
                target="blank"
              >
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.grey[400],
                    textDecoration: "none",
                   }}
                >
                  Coursera Certification
                </Typography>
              </a>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
