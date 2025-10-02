import React from "react";
import { Box, Grid, Paper, Stack, Typography, Avatar, Divider, Chip } from "@mui/material";
import { Business, LocationOn } from "@mui/icons-material";

// ===== 可调：标题右移、左块与右 meta 的间距、meta 距卡片右侧内边距 =====
const TITLE_LEFT_OFFSET_PX = 0;   // 标题整体向右偏移
const META_LEFT_GAP_PX = 0;       // 左侧信息 ←→ 右 meta 的水平间距
const META_RIGHT_PADDING_PX = 20;   // 右 meta 距离卡片右边的内边距

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

/**
 * props:
 *  - title      职位
 *  - company    公司
 *  - period     时间段（如 "Jul 2025 – Sep 2025"）
 *  - location   地点（如 "Shenzhen, China"）
 *  - badge      类型（如 "Internship"）
 *  - logo       /logos/xxx.png
 *  - bullets    string[]
 */
export default function Work({ title, company, period, location, badge, logo, bullets = [] }) {
    return (
        <Paper
            variant="outlined"
            sx={{ p: { xs: 2, md: 3 }, pr: { xs: 2, md: `${Math.max(0, META_RIGHT_PADDING_PX)}px` } }}
        >
            {/* 关键：整行不换行，保证右侧信息始终在 Logo 的右边 */}
            <Grid container columnSpacing={3} alignItems="center" wrap="nowrap">
                {/* 左：独立 Logo 区（固定尺寸 + contain） */}
                <Grid item sx={{ flex: "0 0 auto" }}>
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
                                alt={company}
                                variant="rounded"
                                sx={{
                                    width: "88%",
                                    height: "88%",
                                    bgcolor: "transparent",
                                    img: { objectFit: "contain" }, // 不拉伸不裁切
                                }}
                            />
                        ) : (
                            <Avatar variant="rounded" sx={{ width: "88%", height: "88%" }}>
                                <Business />
                            </Avatar>
                        )}
                    </Box>
                </Grid>

                {/* 右：信息区（可压缩，minWidth:0 允许内部文本换行但不掉行） */}
                <Grid item sx={{ flex: "1 1 auto", minWidth: 0 }}>
                    {/* 顶部：左标题  ←→ 右 meta（徽章/时间/地点 贴最右） */}
                    <Stack direction="row" alignItems="flex-start" spacing={1}>
                        {/* 左标题块（标题 & 公司名） */}
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 800,
                                    minWidth: 0,
                                    pl: { xs: 0, md: `${TITLE_LEFT_OFFSET_PX}px` }, // 标题向右挪
                                    whiteSpace: "normal",
                                    wordBreak: "break-word",
                                }}
                            >
                                {title}
                            </Typography>

                            {/* 公司名（始终在 Logo 右侧，不会被挤到下一行） */}
                            <Typography variant="body1" sx={{ mt: 0.5 }}>
                                {company}
                            </Typography>
                        </Box>

                        {/* 右 meta：ml:auto 顶到最右，pl 控制与左侧的间隙；右对齐 */}
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
                            <Stack direction="row" spacing={1} alignItems="center">
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

                    {/* 要点 */}
                    {bullets.length > 0 && (
                        <>
                            <Divider sx={{ my: 1.5 }} />
                            <ul style={{ margin: 0, paddingLeft: 18 }}>
                                {bullets.map((b) => (
                                    <li key={b}>
                                        <Typography variant="body2">{b}</Typography>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </Grid>
            </Grid>
        </Paper>
    );
}
