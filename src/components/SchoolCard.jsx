import React from "react";
import {
    Box, Grid, Paper, Stack, Typography, Avatar, Divider, Chip
} from "@mui/material";
import { School as SchoolIcon, LocationOn } from "@mui/icons-material";

// 可调：标题右移、左右间距、右侧 meta 的右侧内边距
const TITLE_LEFT_OFFSET_PX = 0;
const META_LEFT_GAP_PX = 0;
const META_RIGHT_PADDING_PX = 20;

const Pill = ({ label }) => (
    <Chip
        label={label}
        size="small"
        sx={{
            borderRadius: 9999,
            bgcolor: "success.light",
            color: "success.contrastText",
            "& .MuiChip-label": { px: 1.2, fontWeight: 600 },
        }}
    />
);

export default function SchoolCard({
                                       program,
                                       degree,
                                       school,
                                       period,
                                       location,
                                       badge,
                                       logo,
                                       highlights = [],
                                       gpa,
                                   }) {
    const title = program ?? degree;

    return (
        <Paper
            variant="outlined"
            sx={{
                p: { xs: 2, md: 3 },
                pr: { xs: 2, md: `${Math.max(0, META_RIGHT_PADDING_PX)}px` },
            }}
        >
            {/* 关键：不换行，保证右侧信息始终在 Logo 的右边 */}
            <Grid
                container
                columnSpacing={3}
                alignItems="center"
                wrap="nowrap"
            >
                {/* 左：独立 Logo 区（固定宽度，不参与挤压） */}
                <Grid
                    item
                    sx={{ flex: "0 0 auto" }}
                >
                    <Box
                        sx={{
                            width: { xs: 120, md: 140 },
                            height: { xs: 120, md: 140 },
                            border: 1,
                            borderColor: "divider",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "background.paper",
                        }}
                    >
                        {logo ? (
                            <Avatar
                                src={logo}
                                alt={school}
                                variant="rounded"
                                sx={{
                                    width: "88%",
                                    height: "88%",
                                    bgcolor: "transparent",
                                    img: { objectFit: "contain" },
                                }}
                            />
                        ) : (
                            <Avatar variant="rounded" sx={{ width: "88%", height: "88%" }}>
                                <SchoolIcon />
                            </Avatar>
                        )}
                    </Box>
                </Grid>

                {/* 右：信息区（可压缩，最小宽度 0 以允许换行但不掉行） */}
                <Grid
                    item
                    sx={{ flex: "1 1 auto", minWidth: 0 }}
                >
                    {/* 顶部：标题（左）  ←→  Meta（右） */}
                    <Stack
                        direction="row"
                        alignItems="flex-start"
                        spacing={1}
                    >
                        {/* 左侧标题区（包括 学位/专业 + 学校名） */}
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 800,
                                    minWidth: 0,
                                    pl: { xs: 0, md: `${TITLE_LEFT_OFFSET_PX}px` },
                                    whiteSpace: "normal",
                                    wordBreak: "break-word",
                                }}
                            >
                                {title}
                            </Typography>

                            {/* 学校名：始终位于 Logo 右侧（属于同一行容器内） */}
                            <Typography variant="body1" sx={{ mt: 0.5 }}>
                                {school}
                            </Typography>
                        </Box>

                        {/* 右侧 meta：贴最右 */}
                        <Stack
                            spacing={0.5}
                            sx={{
                                ml: "auto",
                                pl: `${META_LEFT_GAP_PX}px`,
                                textAlign: "right",
                                alignItems: "flex-end",
                                minWidth: 0,
                            }}
                        >
                            <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: "nowrap" }}>
                                {badge ? <Pill label={badge} /> : null}
                                <Typography variant="body2" color="text.secondary" noWrap>
                                    {period}
                                </Typography>
                            </Stack>

                            <Stack direction="row" spacing={0.75} alignItems="center">
                                <LocationOn fontSize="small" color="action" />
                                <Typography variant="body2" color="text.secondary" noWrap>
                                    {location}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>

                    {/* 亮点 */}
                    {highlights.length > 0 && (
                        <>
                            <Divider sx={{ my: 1.5 }} />
                            <ul style={{ margin: 0, paddingLeft: 18 }}>
                                {highlights.map((h) => (
                                    <li key={h}>
                                        <Typography variant="body2">{h}</Typography>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                    {/* GPA（可选，右下角） */}
                    {gpa && (
                        <Stack direction="row" justifyContent="flex-end" sx={{ mt: 1 }}>
                            <Typography variant="body2" color="text.secondary">GPA: {gpa}</Typography>
                        </Stack>
                    )}
                </Grid>
            </Grid>
        </Paper>
    );
}