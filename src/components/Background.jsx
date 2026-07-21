import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function Background({ background, children }) {
    return (
        <Box
            component={motion.div}
            animate={{
                backgroundPosition: [
                    "20% 30%, 80% 70%",
                    "70% 20%, 25% 80%",
                    "50% 60%, 60% 25%",
                    "20% 30%, 80% 70%",
                ],
            }}
            transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
            }}
            sx={{
                minHeight: "100vh",
                width: "100%",
                overflow: "hidden",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                backgroundImage: `
          radial-gradient(circle at 20% 30%, ${background.from} 0%, transparent 45%),
          radial-gradient(circle at 80% 70%, ${background.to} 0%, transparent 50%),
          linear-gradient(180deg, #ffffff 0%, #fafafa 100%)
        `,

                backgroundRepeat: "no-repeat",
                backgroundSize: "180% 180%, 180% 180%, 100% 100%",
            }}
        >
            {children}
        </Box>
    );
}