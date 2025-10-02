import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import App from "./App";

const theme = createTheme({
    palette: {
        mode: "light",
        background: { default: "#fff", paper: "#fff" },
    },
    shape: { borderRadius: 0 }, // 你之前不要圆角，这里全局设为 0
    typography: {
        fontFamily: [
            'system-ui','-apple-system','"Segoe UI"','Roboto','"Helvetica Neue"',
            'Arial','"Apple Color Emoji"','"Segoe UI Emoji"'
        ].join(','),
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
