import { Box, Typography, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ProgressDots from "./ProgressDots";

export default function StoryCard({ scene, current, total }) {
    const isLetter = scene.type === "letter";
    const isBirthday = scene.type === "birthday";
    const isSignature = scene.type === "signature";

    function renderContent() {
        if (isBirthday) {
            return (
                <>
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "2rem",
                                md: "3rem",
                            },
                            fontWeight: 500,
                            textAlign: "center",
                        }}
                    >
                        Happy Birthday,
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: {
                                xs: "3rem",
                                md: "5rem",
                            },
                            fontWeight: 700,
                            color: "#3B82F6",
                            letterSpacing: "-0.03em",
                            textAlign: "center",
                        }}
                    >
                        Dr. Mark.
                    </Typography>
                </>
            );
        }

        if (isSignature) {
            return (
                <>
                    <Typography
                        sx={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: {
                                xs: "1.8rem",
                                md: "2.5rem",
                            },
                            fontWeight: 400,
                            textAlign: "center",
                        }}
                    >
                        With admiration,
                    </Typography>

                    <Typography
                        sx={{
                            color: "#8FFF00",
                            fontWeight: 700,
                            fontSize: {
                                xs: "2.4rem",
                                md: "3.8rem",
                            },
                            letterSpacing: "-0.03em",
                            textAlign: "center",
                        }}
                    >
                        BiYo
                    </Typography>
                </>
            );
        }

        return (
            <Typography
                sx={{
                    whiteSpace: "pre-line",

                    fontFamily: isLetter
                        ? "'Cormorant Garamond', serif"
                        : "'Inter', sans-serif",

                    fontSize: {
                        xs: isLetter ? "1.45rem" : "2.4rem",
                        md: isLetter ? "2rem" : "4.5rem",
                    },

                    fontWeight: isLetter ? 400 : 700,

                    lineHeight: isLetter ? 1.7 : 1.05,

                    maxWidth: isLetter ? 720 : 900,

                    letterSpacing: isLetter ? "0" : "-0.03em",

                    textAlign: "center",
                }}
            >
                {scene.text}
            </Typography>
        );
    }

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
                        {renderContent()}

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