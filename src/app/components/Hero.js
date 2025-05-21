import { Box, Typography, Button, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import Typewriter from "./typewriter";

const Hero = () => {
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
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.toLowerCase());
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
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

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(45deg, #2d2d2d  0%, rgb(25, 14, 20) 100%)",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 4,
            }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Box
                component={"img"}
                src="/mypicture.jpg"
                sx={{
                  display: "flex",
                  width: "200px",
                  height: "200px",
                  borderRadius: "10%",
                  objectFit: "cover",
                  boxShadow: "0 0 20px rgba(78, 205, 196, 0.3)",
                }}
              />
            </motion.div>
          </Box>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box sx={{ maxWidth: "800px", mx: "auto", textAlign: "center" }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  fontWeight: 700,
                  background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Hi, I'm Thet Myat Noe Thwin
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  fontWeight: 700,
                  mb: 2,
                  background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {"<Julia/>"}
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "16px", md: "20px" },
                  mb: 2,
                  color: theme.palette.grey[200],
                }}
              >
                Full Stack Developer
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typewriter
                texts={[
                  "Ideas into interface.",
                  "I engineer experience.",
                  "Code with purpose.",
                  "Design. Develop. Deliver.",
                  "Clean code. Clear Result.",
                  "Websmith at work.",
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                delay={1500}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={(e) => handleSmoothScroll(e, "contact")}
                    variant="contained"
                    color="primary"
                    href="#contact"
                    sx={{
                      px: {xs:2, md: 4},
                      py: 1.5,
                      borderRadius: 2,
                      background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                      "&:hover": {
                        background: "linear-gradient(45deg, #FF5252, #3DBEB6)",
                      },
                      fontSize: {xs:"15px", md:"18px"},
                    }}
                  >
                    Contact Me
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={(e) => handleSmoothScroll(e, "projects")}
                    variant="outlined"
                    color="primary"
                    size="large"
                    href="#projects"
                    sx={{
                      px: {xs:2, md: 4},
                      py: 1.5,
                      borderRadius: 2,
                      borderColor: "#4ECDC4",
                      color: "#4ECDC4",
                      "&:hover": {
                        borderColor: "#3DBEB6",
                        backgroundColor: "rgba(78, 205, 196, 0.1)",
                      },
                      fontSize: {xs:"15px", md:"18px"},
                    }}
                  >
                    View Projects
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
