import React from "react";
import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
import { socialMediaUrl } from "../Details.js";

export default function Resume() {
    const src = `${socialMediaUrl.resume}#toolbar=1&navpanes=0&view=FitH`;
    return (
        <Box component="main" sx={{ minHeight: "calc(100vh - 56px - 64px)", display: "flex", alignItems: "center" }}>
            <Container maxWidth="lg" sx={{ py: 4, width: "100%" }}>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>Resume</Typography>
                <Box sx={{ height: { xs: "70vh", md: "80vh" }, border: 1, borderColor: "divider" }}>
                    <iframe title="Resume PDF" src={src} width="100%" height="100%" style={{ border: 0 }} />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    If the preview does not load,{" "}
                    <MuiLink href={socialMediaUrl.resume} target="_blank" rel="noreferrer" underline="hover">open the PDF in a new tab</MuiLink>.
                </Typography>
            </Container>
        </Box>
    );
}
