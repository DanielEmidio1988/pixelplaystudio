import { Box, Container, Divider, Grid, Stack } from "@mui/material";
import DeGameCard from "./degamecard/DeGameCard";
import DeSectionTitle from "../desectiontitle/DeSectionTitle";
import { colors } from "../../../layout/theme";
import { gameAethercore, gameLumina, gameTwilightNexus, gameWasteland} from "../../../layout/theme/images";


const games = [
  { title: "Twilight Nexus", genre: "RPG de Ação", image: gameTwilightNexus, variant: "large" as const, ctaLabel: "Baixar Agora", accentColor: colors.secondary },
  { title: "Aethercore", genre: "Adrenaline", image: gameAethercore, variant: "medium" as const, accentColor: colors.primary },
  { title: "Lumina", genre: "Aventura Puzzle", image: gameLumina, variant: "small" as const, accentColor: colors.primary },
  { title: "Wasteland Riders", genre: "Corrida MMO", image: gameWasteland, variant: "small" as const, accentColor: colors.secondary },
];

export default function DeGamesSection() {
  return (
    <Grid container size={12} component="section" aria-label="Nosso Universo" sx={{ py: 16, position: "relative" }}>
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
              label="NOSSO"
              accent="UNIVERSO"
              description="Explore experiências que desafiam a realidade criadas pela Pixel Play."
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

          {/* Bento grid */}
          <Grid container size={12} spacing={3}>
            {/* Large card — spans 2 rows on desktop */}
            <Grid size={{xs: 12, md: 6}} sx={{ display: "flex" }}>
              <Box sx={{ width: "100%", minHeight: { md: "648px" } }}>
                <DeGameCard {...games[0]} />
              </Box>
            </Grid>

            {/* Right column stacked */}
            <Grid size={{xs: 12, md: 6}} container spacing={3} alignContent="flex-start">
              <Grid size={12}>
                <DeGameCard {...games[1]} />
              </Grid>
              <Grid size={6}>
                <DeGameCard {...games[2]} />
              </Grid>
              <Grid size={6}>
                <DeGameCard {...games[3]} />
              </Grid>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Grid>
  );
}
