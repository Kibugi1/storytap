import { Box, Typography, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ProgressDots from "./ProgressDots";

export default function StoryCard({ scene, current, total }) {
    return (
        <Box
            sx={{
                width: "100%",
                px: 3,
            }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={scene.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                >
                    <Stack
                        spacing={6}
                        alignItems="center"
                        textAlign="center"
                        maxWidth={700}
                        mx="auto"
                    >
                        <Typography variant="h1">
                            {scene.text}
                        </Typography>

                        <ProgressDots
                            total={total}
                            current={current}
                        />
                    </Stack>
                </motion.div>
            </AnimatePresence>
        </Box>
    );
}