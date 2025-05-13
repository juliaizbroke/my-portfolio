import { Box, Typography, Button, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

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

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(45deg, #2d2d2d  0%, rgb(25, 14, 20) 100%)",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            mb: 4
          }}>
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
                  borderRadius: "50%",
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
                "Julia"
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  mb: 2,
                  color: theme.palette.grey[300],
                }}
              >
                Full Stack Developer
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "12px", md: "16px" },
                  mb: 2,
                  color: theme.palette.grey[400],
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                I build beautiful, responsive websites and web applications using
                modern technologies.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    href="#contact"
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                      "&:hover": {
                        background: "linear-gradient(45deg, #FF5252, #3DBEB6)",
                      },
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
                    variant="outlined"
                    color="primary"
                    size="large"
                    href="#projects"
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      borderColor: "#4ECDC4",
                      color: "#4ECDC4",
                      "&:hover": {
                        borderColor: "#3DBEB6",
                        backgroundColor: "rgba(78, 205, 196, 0.1)",
                      },
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
