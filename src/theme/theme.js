import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        background: {
            default: "#FFFFFF",
        },

        text: {
            primary: "#111827",
            secondary: "#6B7280",
        },

        primary: {
            main: "#2563EB",
        },
    },

    typography: {
        fontFamily: "Inter, sans-serif",

        h1: {
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 600,
            fontSize: "4rem",
            lineHeight: 1.1,
        },

        body1: {
            fontSize: "1rem",
        },
    },

    shape: {
        borderRadius: 20,
    },
});

export default theme;