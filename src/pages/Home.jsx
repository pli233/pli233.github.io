import React from "react";
import { Container, Grid, Typography, Stack, Button, Box } from "@mui/material";
import { personalDetails} from "../Details.js";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
    const { name, tagline, img, about } = personalDetails;

    return (
        <Box component="main"
             sx={{ minHeight: "calc(100vh - 56px - 64px)", display: "flex", alignItems: "center" }}>
            {/* 关键：铺满全宽 + 关闭默认左右间距 + 显式左内边距把内容整体右移 */}
            <Container
                maxWidth={false}
                disableGutters
                sx={{
                    py: 4,
                    pl: { xs: 2, md: 12, lg: 1, xl: 50 }, // ← 想更靠右就把xl再加大
                    pr: { xs: 2, md: 6 },
                }}
            >
                <Grid container spacing={6} alignItems="center">
                    {/* 文本区 */}
                    <Grid item xs={12} md={7}>
                        <Stack spacing={1.5}>
                            <Typography variant="h2" sx={{ fontSize: { xs: 36, md: 48 }, fontWeight: 800 }}>
                                Hi <span role="img" aria-label="wave">👋</span> I'm
                            </Typography>
                            <Typography variant="h3" sx={{ fontSize: { xs: 28, md: 36 }, fontWeight: 800 }}>
                                {name}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 700 }}>
                                {tagline}
                            </Typography>
                            <Typography sx={{ whiteSpace: "pre-line" }}>{about}</Typography>

                            <Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
                                <Button
                                    variant="contained"
                                    component={RouterLink}
                                    to="/contact"
                                >
                                    Contact me
                                </Button>
                                <Button variant="outlined" href="/resume">View Resume</Button>
                            </Stack>
                        </Stack>
                    </Grid>

                    {/* 头像区：贴右对齐 */}
                    <Grid
                        item
                        xs={12}
                        md={5}
                        sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" }, alignItems: "center" }}
                    >
                        <Box component="img" src={img} alt={name}
                             sx={{ width: "100%", maxWidth: 520, display: "block" }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}