import React from "react";
import { Container, Box, Typography, Grid, Paper, Chip, Stack } from "@mui/material";
import {
    Code, Cloud, Storage, Psychology, IntegrationInstructions, FactCheck
} from "@mui/icons-material";

// === 你的技术栈（按你给的列表 + 两项实践）===
const stacks = [
    {
        title: "Languages",
        icon: <Code />,
        // 顺序保持与你给的一致
        items: ["Python", "Java", "C", "Linux Shell", "SQL", "R", "HTML", "CSS", "JavaScript"],
    },
    {
        title: "AI / ML",
        icon: <Psychology />,
        items: ["TensorFlow", "PyTorch", "LangChain", "Lightly"],
    },
    {
        title: "Frameworks",
        icon: <Code />,
        items: ["React", "Spring Boot", "Django", "GTEST", "MOCKCPP"],
    },
    {
        title: "Databases",
        icon: <Storage />,
        items: ["MySQL", "MongoDB", "Redis"],
    },
    {
        title: "Project Management",
        icon: <FactCheck />,
        items: ["Github", "CI/CD", "Agile / Scrum", "Kanban"],
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
                    A snapshot of the tools and libraries I used.
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