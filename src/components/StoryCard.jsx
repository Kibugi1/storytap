import { Box, Typography } from "@mui/material";

export default function StoryCard({ text }) {
    return (
        <Box>
            <Typography>
                {text}
            </Typography>
        </Box>
    );
}