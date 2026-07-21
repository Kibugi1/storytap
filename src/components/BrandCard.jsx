import { Box, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

import logo from "../assets/images/biyoforgelogo.svg";

export default function BrandCard() {
    return (
        <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            spacing={4}
            alignItems="center"
            justifyContent="center"
            sx={{
                textAlign: "center",
            }}
        >
            <Box
                component="img"
                src={logo}
                alt="BiYo Forge"
                sx={{
                    width: {
                        xs: 180,
                        sm: 220,
                        md: 280,
                        lg: 340,
                    },
                    height: "auto",
                }}
            />

            <Typography
                variant="h3"
                sx={{
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                }}
            >
                StoryTap
            </Typography>

            <Typography
                color="text.secondary"
                sx={{
                    mt: -2,
                }}
            >
                by BiYo Forge
            </Typography>
        </Stack>
    );
}