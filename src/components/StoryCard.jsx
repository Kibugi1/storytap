import { Box, Typography, Stack } from "@mui/material";

export default function StoryCard({ scene }) {
    console.log(scene);
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 3,
            }}
        >
            <Stack
                spacing={5}
                alignItems="center"
                textAlign="center"
                maxWidth={700}
            >
                <Typography variant="h1">
                    {scene.text}
                </Typography>

                <Typography
                    color="text.secondary"
                >
                    Tap anywhere
                </Typography>

                <Stack direction="row" spacing={1}>
                    <Box
                        sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            bgcolor: "text.primary",
                        }}
                    />

                    <Box
                        sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            bgcolor: "#D1D5DB",
                        }}
                    />

                    <Box
                        sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            bgcolor: "#D1D5DB",
                        }}
                    />

                    <Box
                        sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            bgcolor: "#D1D5DB",
                        }}
                    />
                </Stack>
            </Stack>
        </Box>
    );
}