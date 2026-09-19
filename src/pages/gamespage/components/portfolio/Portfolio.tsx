import { Box, Container, Divider, Grid, Stack } from "@mui/material";
import { IPortfolioCardsProps } from "./Portfolio.types";
import { colors } from "../../../../layout/theme";
import DeSectionTitle from "../../../../components/partials/desectiontitle/DeSectionTitle";
import PortfolioCards from "./PortfolioCards";
import { cardgameaethercore, cardgamelumina, cardgametwilight, cardgamewasteland } from "../../../../layout/theme/images";

export function Portfolio() {

    const portfolioCards: IPortfolioCardsProps[] = [
        {
            image: cardgametwilight,
            title: "Twilight Nexus",
            url: "/",
            tag: "RPG de ação",
            tagColor: colors.primary,
            tagColorStrong: colors.primaryStrong,
        },
        {
            image: cardgameaethercore,
            title: "Aethercore",
            url: "/",
            tag: "Combate tático",
            tagColor: colors.secondary,
            tagColorStrong: colors.secondaryStrong,
        },
        {
            image: cardgamelumina,
            title: "Lumina",
            url: "/",
            tag: "Aventura",
            tagColor: colors.tertiary,
            tagColorStrong: colors.tertiaryStrong,
        },
       {
            image: cardgamewasteland,
            title: "Wasteland Riders",
            url: "/",
            tag: "Corrida MMO",
            tagColor: colors.primary,
            tagColorStrong: colors.primaryStrong,
        },
    ];

    return (
        <Grid
            container
            size={12}
            component="section"
            aria-label="Titulos em destaque"
            sx={{ py: 16, position: "relative" }}
            spacing={6}
        >
            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: "0 20% 40% 20%",
                    opacity: 0.5,
                    background: `radial-gradient(ellipse at center, ${colors.glowPrimary}40 0%, transparent 70%)`,
                    pointerEvents: "none",
                }}
            />
            <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 }, position: "relative" }}>
                <Stack gap={8}>
                    {/* Header row */}
                    <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 4 }}>
                        <DeSectionTitle
                            label="TITULOS EM"
                            accent="DESTAQUE"
                        />
                        <Divider
                            flexItem
                            sx={{
                                flex: 1,
                                alignSelf: "flex-end",
                                mb: 1,
                                borderColor: "transparent",
                                backgroundImage: `linear-gradient(90deg, transparent, ${colors.glowSecondary}, transparent)`,
                                height: 1,
                            }}
                        />
                    </Box>
                </Stack>
            </Container>
            <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 }, position: "relative" }}>
                <Grid
                    container
                    size={12}
                    spacing={2}
                    sx={{
                        display: "flex",
                        overflowX: "auto",
                        pb: 1,
                        scrollSnapType: "x mandatory",
                        "&::-webkit-scrollbar": { height: 4 },
                        "&::-webkit-scrollbar-track": { backgroundColor: "transparent" },
                        "&::-webkit-scrollbar-thumb": { backgroundColor: colors.border, borderRadius: 2 },
                    }}
                >
                    {portfolioCards.map((card) => (
                        <Grid size={{ xs: 12, md: 3 }} key={card.title.trim()} sx={{ scrollSnapAlign: "start", flexShrink: 0 }}>
                            <PortfolioCards {...card} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Grid>
    )
}