import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Work from "../Components/Work";
import { experienc } from "../Details";

export default function Experience() {
    return (
        <Box component="main" sx={{ minHeight: "calc(100vh - 56px - 56px)" }}>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>Experience</Typography>

                <Stack spacing={3}>
                    {experienc.map((j, idx) => (
                        <Work
                            key={`${j.company}-${j.title}-${idx}`}
                            title={j.title}
                            company={j.company}
                            period={j.period}
                            location={j.location}
                            badge={j.badge}
                            logo={j.logo}
                            bullets={j.bullets}
                        />
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}