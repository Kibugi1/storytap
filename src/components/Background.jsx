import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function Background({ background, children }) {
    return (
        <Box
            component={motion.div}
            animate={{
                background: `linear-gradient(180deg, ${background.from}, ${background.to})`,
            }}
            transition={{
                duration: 1.2,
                ease: "easeInOut",
            }}
            sx={{
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {children}
        </Box>
    );
}