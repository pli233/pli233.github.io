import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AppBar, Toolbar, Stack, Button, Container, Box } from "@mui/material";
import signature from "../assets/signature.png";
// 可调：品牌签名距离右侧的间距（px）
// 数值越大，签名会离右边更远（视觉上更靠中/靠左一点）
const BRAND_RIGHT_GAP_PX = 600;

export default function Header() {
    const LinkButton = ({ to, children }) => (
        <Button
            component={NavLink}
            to={to}
            color="inherit"
            sx={{
                "&.active": { bgcolor: "action.selected" },
                textTransform: "none",
                fontWeight: 500,
            }}
        >
            {children}
        </Button>
    );

    return (
        <AppBar position="sticky" elevation={0} color="transparent" sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ minHeight: 56, gap: 2 }}>
                    {/* 左侧：签名图（最右，带可调右侧间距） */}
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            ml: "auto",                     // 推到最右
                            mr: `${BRAND_RIGHT_GAP_PX}px`,  // 控制与右侧的距离
                            display: "inline-flex",
                            alignItems: "center",
                            textDecoration: "none",
                            lineHeight: 0,
                        }}
                    >
                        <Box
                            component="img"
                            src= {signature}
                            alt="Peiyuan Li"
                            sx={{
                                height: 28,        // 签名高度（可按需调大/调小）
                                display: "block",
                            }}
                        />
                    </Box>

                    {/* 右侧：导航按钮 */}
                    <Stack direction="row" spacing={1}>
                        <LinkButton to="/">Home</LinkButton>
                        <LinkButton to="/education">Education</LinkButton>
                        <LinkButton to="/experience">Experience</LinkButton>
                        <LinkButton to="/technologies">Technologies</LinkButton>
                        <LinkButton to="/contact">Contact</LinkButton>
                        <LinkButton to="/resume">Resume</LinkButton>
                    </Stack>

                </Toolbar>
            </Container>
        </AppBar>
    );
}