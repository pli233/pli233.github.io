import React from "react";
import { AppBar, Toolbar, Container, Stack, Typography, Link as MuiLink } from "@mui/material";
import { socialMediaUrl } from "../Details"; // ← 修正路径

const FOOTER_H = 56; // 悬浮底栏高度（和 Header 一致即可）

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <AppBar
            position="fixed"
            elevation={0}
            color="transparent"
            sx={{
                top: "auto",          // 关键：把 AppBar 放到底部
                bottom: 0,
                borderTop: 1,
                borderColor: "divider",
                bgcolor: "background.paper",
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ minHeight: FOOTER_H, justifyContent: "space-between" }}>
                    <Typography variant="body2" color="text.secondary">© {year} Peiyuan Li</Typography>
                    <Stack direction="row" spacing={3}>
                        <MuiLink href={socialMediaUrl.linkedin} target="_blank" rel="noreferrer" underline="hover">LinkedIn</MuiLink>
                        <MuiLink href={socialMediaUrl.github} target="_blank" rel="noreferrer" underline="hover">GitHub</MuiLink>
                        <MuiLink href={socialMediaUrl.email} underline="hover">Email</MuiLink>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export { FOOTER_H };