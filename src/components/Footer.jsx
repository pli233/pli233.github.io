import React from "react";
import { AppBar, Toolbar, Container, Stack, Typography, Link as MuiLink, Box } from "@mui/material";
import { socialMediaUrl } from "../Details";
import reactLogo from "../assets/react.svg";           // ← 本地 React 图标

const FOOTER_H = 56; // 悬浮底栏高度（和 Header 一致即可）
const REACT_LOGO_SIZE = 18; // ← 可调：React 图标大小（px）

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <AppBar
            position="fixed"
            elevation={0}
            color="transparent"
            sx={{
                top: "auto",
                bottom: 0,
                borderTop: 1,
                borderColor: "divider",
                bgcolor: "background.paper",
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ minHeight: FOOTER_H, justifyContent: "space-between" }}>
                    <Typography variant="body2" color="text.secondary">© {year} Peiyuan Li</Typography>

                    <Stack direction="row" spacing={3} alignItems="center">
                        <MuiLink href={socialMediaUrl.linkedin} target="_blank" rel="noreferrer" underline="hover">
                            LinkedIn
                        </MuiLink>
                        <MuiLink href={socialMediaUrl.github} target="_blank" rel="noreferrer" underline="hover">
                            GitHub
                        </MuiLink>
                        <MuiLink href={socialMediaUrl.email} underline="hover">
                            Email
                        </MuiLink>

                        {/* Powered by React */}
                        <MuiLink
                            href="https://react.dev/"
                            target="_blank"
                            rel="noreferrer"
                            underline="none"
                            sx={{ display: "inline-flex", alignItems: "center", gap: 1, color: "text.secondary" }}
                            aria-label="Powered by React"
                        >
                            <Box
                                component="img"
                                src={reactLogo}
                                alt="React logo"
                                sx={{ width: REACT_LOGO_SIZE, height: REACT_LOGO_SIZE, display: "block" }}
                            />
                            <Typography variant="body2" color="text.secondary">Powered by React</Typography>
                        </MuiLink>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export { FOOTER_H };