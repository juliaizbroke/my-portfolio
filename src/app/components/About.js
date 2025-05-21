import { Box, Typography, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

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
        background: "linear-gradient(225deg, #2d2d2d 0%, rgb(25, 14, 20) 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: `radial-gradient(circle at 20% 20%, ${theme.palette.primary.main} 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, ${theme.palette.secondary.main} 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Left side - Introduction */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      fontWeight: 700,
                      background: "#FF6B6B",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mr: 2,
                    }}
                  >
                    #About Me
                  </Typography>
                  <Box
                    sx={{
                      flex: 1,
                      height: "2px",
                      background: "#FF6B6B",
                      opacity: 0.5,
                      borderRadius: "2px",
                    }}
                  />
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    lineHeight: 1.8,
                    color: theme.palette.grey[300],
                    mb: 3,
                  }}
                >
                  I am a passionate software engineer with a strong foundation in computer science. I have
                  a keen interest in web development, particularly in creating
                  dynamic and responsive user interfaces. I am proficient in
                  various programming languages and frameworks, and I am always
                  eager to learn new technologies to enhance my skills.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
