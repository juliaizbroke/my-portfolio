import { Box, Typography, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const Education = () => {
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

  const educationItems = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "Assumption University of Thailand",
      period: "2022 - current",
      link: null,
      linkText: null,
    },
    {
      title: "Google Data Analytics",
      institution: "Coursera",
      period: "2024",
      link: "https://coursera.org/share/9d8297ed2dd0158328d5cc660a73d283",
      linkText: "View Certificate",
    },
    {
      title: "AWS Academy Cloud Foundation",
      institution: "AWS Academy",
      period: "2023",
      link: "https://www.credly.com/badges/b544fd9b-1e73-40a0-9e12-2008d39d54ee/public_url",
      linkText: "View Badge",
    },
    {
      title: "AWS Academy Cloud Developing",
      institution: "AWS Academy",
      period: "2025",
      link: "https://www.credly.com/badges/35afac64-3304-4b08-9c15-e4ab565ccee6/public_url",
      linkText: "View Badge",
    },
  ];

  return (
    <Box
      id="education"
      sx={{
        py: 8,
        background: "linear-gradient(45deg, #2d2d2d 0%, rgb(25, 14, 20) 100%)",
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
          background: `radial-gradient(circle at 80% 20%, ${theme.palette.primary.main} 0%, transparent 50%),
                      radial-gradient(circle at 20% 80%, ${theme.palette.secondary.main} 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                fontWeight: 700,
                color: "#FF6B6B",
                mr: 2,
              }}
            >
              #Education
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
            variant="h3"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: theme.palette.grey[300],
              ml: 2,
            }}
          >
            Academic Journey & Certifications
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            {educationItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      p: 3,
                      width: {xs:"350px",sm:"300px",md:"250px"},
                      height: "200px",
                      mx: "auto",
                      background: "rgba(255, 255, 255, 0.03)",
                      backdropFilter: "blur(10px)",
                      borderRadius: 2,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      transition: "all 0.3s ease-in-out",
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        background: "rgba(255, 255, 255, 0.05)",
                        "&::before": {
                          transform: "scale(1)",
                          opacity: 0.1,
                        },
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        opacity: 0,
                        transition: "all 0.3s ease-in-out",
                        transform: "scale(0.8)",
                        zIndex: 0,
                      },
                    }}
                  >
                    <Box 
                      sx={{ 
                        position: "relative", 
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        justifyContent: "space-between"
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            mb: 1,
                            fontWeight: 600,
                            color: theme.palette.grey[100],
                            fontSize: { xs: "0.9rem", md: "1rem" },
                            lineHeight: 1.4,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            mb: 0.5,
                            color: theme.palette.grey[400],
                            fontWeight: 500,
                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                          }}
                        >
                          {item.institution}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.grey[500],
                            fontSize: { xs: "0.75rem", md: "0.8rem" },
                          }}
                        >
                          {item.period}
                        </Typography>
                      </Box>
                      {item.link && (
                        <Box
                          component="a"
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: "inline-block",
                            color: theme.palette.primary.main,
                            textDecoration: "none",
                            position: "relative",
                            fontSize: { xs: "0.75rem", md: "0.8rem" },
                            mt: "auto",
                            pt: 1,
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              bottom: -2,
                              left: 0,
                              width: "100%",
                              height: "1px",
                              background: theme.palette.primary.main,
                              transform: "scaleX(0)",
                              transition: "transform 0.3s ease",
                            },
                            "&:hover::after": {
                              transform: "scaleX(1)",
                            },
                          }}
                        >
                          {item.linkText}
                        </Box>
                      )}
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

export default Education;
