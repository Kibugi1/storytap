import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function PulseIndicator() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 1, 0.4],
                }}
                transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Box
                    sx={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        bgcolor: "text.primary",
                    }}
                />
            </motion.div>
        </Box>
    );
}