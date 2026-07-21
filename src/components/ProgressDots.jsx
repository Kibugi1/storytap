import { Box } from "@mui/material";
import { motion } from "framer-motion";

const DOT_SIZE = 10;
const GAP = 8;

export default function ProgressDots({ total, current }) {
    const containerWidth = total * DOT_SIZE + (total - 1) * GAP;

    return (
        <Box
            sx={{
                position: "relative",
                width: containerWidth,
                height: DOT_SIZE,
                mx: "auto",
            }}
        >
            {/* Static dots */}
            <Box
                sx={{
                    display: "flex",
                    gap: `${GAP}px`,
                }}
            >
                {Array.from({ length: total }).map((_, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: DOT_SIZE,
                            height: DOT_SIZE,
                            borderRadius: "50%",
                            bgcolor: "grey.300",
                        }}
                    />
                ))}
            </Box>

            {/* Sliding active indicator */}
            <Box
                component={motion.div}
                animate={{
                    x: current * (DOT_SIZE + GAP),
                }}
                transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 30,
                }}
                sx={{
                    position: "absolute",
                    top: -(12 - DOT_SIZE) / 2,
                    left: 0,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: "#111827",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
            />
        </Box>
    );
}