import React from "react";
import {
    Box,
    Container,
    Typography,
    Paper,
    Stack,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    IconButton,
    Button,
    Tooltip,
    Divider,
} from "@mui/material";
import { Email, LinkedIn, GitHub, ContentCopy, OpenInNew } from "@mui/icons-material";
import { socialMediaUrl } from "../Details";

export default function Contact() {
    const emailAddr = socialMediaUrl.email.replace("mailto:", "");

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(emailAddr);
            alert("Email copied!");
        } catch {
            // 兼容不支持 clipboard 的浏览器
            window.prompt("Copy email:", emailAddr);
        }
    };

    return (
        <Box component="main" sx={{ minHeight: "calc(100vh - 56px - 56px)", display: "flex", alignItems: "center" }}>
            <Container maxWidth="lg" sx={{ py: 4, width: "100%" }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
                    Contact
                </Typography>

                {/* 卡片列表 */}
                <Paper variant="outlined" sx={{ p: 2 }}>
                    <List disablePadding>

                        {/* Email */}
                        <ListItem
                            secondaryAction={
                                <Stack direction="row" spacing={1}>
                                    <Tooltip title="Copy email">
                                        <IconButton edge="end" onClick={copyEmail}>
                                            <ContentCopy />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Open email">
                                        <IconButton edge="end" component="a" href={socialMediaUrl.email}>
                                            <OpenInNew />
                                        </IconButton>
                                    </Tooltip>
                                </Stack>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar variant="rounded">
                                    <Email />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={emailAddr}
                                secondary="Click the arrow to open your mail app, or copy using the icon."
                            />
                        </ListItem>

                        <Divider component="li" sx={{ my: 1 }} />

                        {/* LinkedIn */}
                        <ListItem
                            secondaryAction={
                                <Tooltip title="Open LinkedIn">
                                    <IconButton edge="end" component="a" href={socialMediaUrl.linkedin} target="_blank" rel="noreferrer">
                                        <OpenInNew />
                                    </IconButton>
                                </Tooltip>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar variant="rounded">
                                    <LinkedIn />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="LinkedIn"
                                secondary={socialMediaUrl.linkedin}
                            />
                        </ListItem>

                        <Divider component="li" sx={{ my: 1 }} />

                        {/* GitHub */}
                        <ListItem
                            secondaryAction={
                                <Tooltip title="Open GitHub">
                                    <IconButton edge="end" component="a" href={socialMediaUrl.github} target="_blank" rel="noreferrer">
                                        <OpenInNew />
                                    </IconButton>
                                </Tooltip>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar variant="rounded">
                                    <GitHub />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="GitHub"
                                secondary={socialMediaUrl.github}
                            />
                        </ListItem>
                    </List>
                </Paper>

                {/* 行动按钮 */}
                <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
                    <Button variant="contained" startIcon={<Email />} href={socialMediaUrl.email}>
                        Email me
                    </Button>
                    <Button variant="outlined" startIcon={<LinkedIn />} href={socialMediaUrl.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn
                    </Button>
                    <Button variant="outlined" startIcon={<GitHub />} href={socialMediaUrl.github} target="_blank" rel="noreferrer">
                        GitHub
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}
