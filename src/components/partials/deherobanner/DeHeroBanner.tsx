import {
    Box,
    Chip,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { colors } from "../../../layout/theme";
import { DeBtn } from "../debtn/DeBtn";
import {
    IBannerItem,
    IDeHeroBannerProps,
} from "./DeHeroBanner.types";


function DeHeroBannerItem({
    banner,
}: {
    banner: IBannerItem;
}) {
    const actions = banner.action?.slice(0, 2) ?? [];

    return (
        <Grid
            component="section"
            size={12}
            aria-label={`Destaque — ${banner.title}`}
            sx={{
                position: "relative",
                minHeight: 800,
                height: "100%",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            {/* Background image */}
            <Box
                component="img"
                src={banner.img}
                alt=""
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                }}
            />

            {/* Left gradient */}
            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: 0,
                    background: `
                        linear-gradient(
                            to right,
                            rgba(13,13,22,0.85) 0%,
                            rgba(13,13,22,0) 60%
                        )
                    `,
                }}
            />

            {/* Bottom gradient */}
            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: 0,
                    background: `
                        linear-gradient(
                            to top,
                            ${colors.background} 0%,
                            transparent 50%
                        )
                    `,
                }}
            />

            {/* Content */}
            <Container
                maxWidth="lg"
                sx={{
                    position: "relative",
                    zIndex: 1,
                    pt: 10,
                    pb: 10,
                    px: { xs: 3, md: 6 },
                }}
            >
                <Stack
                    gap={4}
                    sx={{
                        maxWidth: 672,
                    }}
                >
                    {/* Eyebrow */}
                    {banner.eyebrow && (
                        <Chip
                            label={banner.eyebrow}
                            size="small"
                            icon={
                                <Box
                                    aria-hidden
                                    sx={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: "50%",
                                        backgroundColor: colors.secondary,
                                        boxShadow: `0 0 8px ${colors.secondary}`,
                                        ml: 1.5,
                                    }}
                                />
                            }
                            sx={{
                                alignSelf: "flex-start",
                                backdropFilter: "blur(6px)",
                                backgroundColor: "rgba(223,142,255,0.2)",
                                border: `1px solid ${colors.glowPrimary}`,
                                boxShadow: `0 0 15px ${colors.glowPrimary}`,
                                borderRadius: 9999,
                                color: colors.secondary,
                                fontFamily: '"Plus Jakarta Sans", sans-serif',
                                fontWeight: 700,
                                fontSize: "0.875rem",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                height: 34,

                                "& .MuiChip-icon": {
                                    mr: 0.5,
                                },
                            }}
                        />
                    )}

                    {/* Heading */}
                    <Box>
                        
                        {banner.title && (
                            <Typography
                                component="h1"
                                variant="h1"
                                sx={{
                                    color: colors.textPrimary,
                                    textShadow: `0 0 20px ${colors.glowPrimary}`,
                                    lineHeight: 1,
                                }}
                            >
                                {banner.title}
                            </Typography>
                        )}

                        {banner.subtitle && (
                            <Typography
                                component="p"
                                variant="h1"
                                sx={{
                                    color: colors.primary,
                                    textShadow: `0 0 20px ${colors.glowPrimary}`,
                                    lineHeight: 1,
                                }}
                            >
                                {banner.subtitle}
                            </Typography>
                        )}
                    </Box>

                    {/* Description */}
                    <Typography
                        variant="body1"
                        sx={{
                            color: colors.textPrimary,
                            maxWidth: 512,
                        }}
                    >
                        {banner.description}
                    </Typography>

                    {/* CTAs */}
                    {actions.length > 0 && (
                        <Stack
                            direction="row"
                            gap={3}
                            flexWrap="wrap"
                            pt={2}
                        >
                            {actions.map((button, index) => (
                                <DeBtn
                                    key={button.label}
                                    label={button.label}
                                    size="large"
                                    action={button.action}
                                    variant={
                                        index === 0
                                            ? "contained"
                                            : "outlined"
                                    }
                                    layoutBtn={
                                        index === 0
                                            ? "default"
                                            : "dark"
                                    }
                                />
                            ))}
                        </Stack>
                    )}
                </Stack>
            </Container>
        </Grid>
    );
}


export default function DeHeroBanner({
    banners,
}: IDeHeroBannerProps) {

    /*
     * Banner único:
     * não precisamos do Swiper.
     */
    if (banners.length === 1) {
        return (
            <DeHeroBannerItem
                banner={banners[0]}
            />
        );
    }

    /*
     * Nenhum banner:
     * evita renderizar um componente quebrado.
     */
    if (banners.length === 0) {
        return null;
    }

    /*
     * Dois ou mais banners:
     * utiliza o Swiper.
     */
    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                width: "100%",

                "& .swiper": {
                    width: "100%",
                    minHeight: 800,
                },

                "& .swiper-slide": {
                    height: "auto",
                },

                "& .swiper-pagination": {
                    bottom: 28,
                },

                "& .swiper-pagination-bullet": {
                    width: 8,
                    height: 8,
                    opacity: 1,
                    backgroundColor: colors.borderStrong,
                    transition: "all 200ms ease",
                },

                "& .swiper-pagination-bullet-active": {
                    width: 32,
                    borderRadius: 9999,
                    backgroundColor: colors.primary,
                    boxShadow: `0 0 10px ${colors.glowPrimary}`,
                },
            }}
        >
            <Swiper
                modules={[
                    Autoplay,
                    EffectFade,
                    Pagination,
                ]}
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                }}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true,
                }}
                loop
                speed={800}
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={`${banner.title}-${index}`}>
                        <DeHeroBannerItem
                            banner={banner}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}