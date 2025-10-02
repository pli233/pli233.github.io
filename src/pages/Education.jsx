import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import SchoolCard from "../components/SchoolCard";  // ← 路径与文件名
import { educations } from "../Details";

export default function Education() {
    return (
        <Box component="main" sx={{ minHeight: "calc(100vh - 56px - 56px)" }}>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>
                    Education
                </Typography>

                <Stack spacing={3}>
                    {educations.map((e, idx) => (
                        <SchoolCard
                            key={`${e.school}-${e.period}-${idx}`}
                            program={e.program}
                            degree={e.degree}
                            school={e.school}
                            period={e.period}
                            location={e.location}
                            badge={e.badge}
                            logo={e.logo}
                            highlights={e.highlights}
                            gpa={e.gpa}
                        />
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}