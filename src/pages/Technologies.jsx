import React from "react";
import { Container, Box, Typography, Grid, Paper, Chip, Stack } from "@mui/material";
import {
    Javascript, Html, Css, GitHub, Storage, Terminal, SmartToy, BugReport
} from "@mui/icons-material";

const stacks = [
    {
        title: "Frontend",
        icon: <Html />,
        items: ["React", "React Router", "Vite/CRA", "MUI", "Axios"],
    },
    {
        title: "Language",
        icon: <Javascript />,
        items: ["JavaScript", "TypeScript", "Python"],
    },
    {
        title: "Backend",
        icon: <Terminal />,
        items: ["Node.js", "Express", "REST APIs"],
    },
    {
        title: "Data / DB",
        icon: <Storage />,
        items: ["PostgreSQL", "SQLite", "Pandas"],
    },
    {
        title: "ML / Tools",
        icon: <SmartToy />,
        items: ["Scikit-learn", "Jupyter", "Matplotlib"],
    },
    {
        title: "DevOps / Others",
        icon: <GitHub />,
        items: ["Git/GitHub", "Nginx", "Linux"],
    },
];

export default function Technologies() {
    return (
        <Box component="main" sx={{ minHeight: "calc(100vh - 56px - 64px)", display: "flex", alignItems: "center" }}>
            <Container maxWidth="lg" sx={{ py: 4, width: "100%" }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    Technologies
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    A snapshot of the tools and libraries I use frequently.
                </Typography>

                <Grid container spacing={2}>
                    {stacks.map((sec) => (
                        <Grid item xs={12} sm={6} md={4} key={sec.title}>
                            <Paper variant="outlined" sx={{ p: 2 }}>
                                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                                    {sec.icon}
                                    <Typography variant="subtitle1" fontWeight={700}>{sec.title}</Typography>
                                </Stack>
                                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                                    {sec.items.map((t) => (
                                        <Chip key={t} label={t} variant="outlined" />
                                    ))}
                                </Stack>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
