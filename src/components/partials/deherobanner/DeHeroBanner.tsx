import { Box, Grid, Button, Chip, Container, Stack, Typography } from "@mui/material";
import heroBackground from "../../../assets/gallery/homepage/herobannerhome_aethercore.png";
import { colors } from "../../../layout/theme";

export default function DeHeroBanner() {
  return (
    <Grid
      component="section"
      size={12}
      aria-label="Destaque — Aethercore v1.8"
      sx={{
        position: "relative",
        minHeight: 800,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <Box
        component="img"
        src={heroBackground}
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

      {/* Gradient overlays */}
      <Box aria-hidden sx={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,13,22,0.85) 0%, rgba(13,13,22,0) 60%)" }} />
      <Box aria-hidden sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0D0D16 0%, transparent 50%)" }} />

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: "relative", pt: 10, pb: 10, px: { xs: 3, md: 6 } }}>
        <Stack gap={4} sx={{ maxWidth: 672 }}>
          {/* Live badge */}
          <Chip
            label="Live Event: Eclipse da Mente"
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
              border: `1px solid rgba(223,142,255,0.5)`,
              boxShadow: `0 0 15px rgba(223,142,255,0.2)`,
              borderRadius: 9999,
              color: colors.secondary,
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 700,
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              height: 34,
              "& .MuiChip-icon": { mr: 0.5 },
            }}
          />

          {/* Heading */}
          <Box>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                color: colors.textPrimary,
                textShadow: `0 0 20px ${colors.glowPrimary}`,
                lineHeight: 1,
                mb: 0,
              }}
            >
              AETHERCORE
            </Typography>
            <Typography
              component="p"
              variant="h1"
              sx={{
                color: colors.primary,
                textShadow: `0 0 20px ${colors.glowPrimary}`,
                lineHeight: 1,
              }}
            >
              v1.8
            </Typography>
          </Box>

          {/* Description */}
          <Typography variant="body1" sx={{ color: colors.textPrimary, maxWidth: 512 }}>
            O Loop Zero começou! Enfrente simulações corrompidas por{" "}
            <Box component="strong" sx={{ color: colors.secondary, fontWeight: 700 }}>
              Host Zero/9
            </Box>
            . Skins e dados espectrais te esperam.
          </Typography>

          {/* CTAs */}
          <Stack direction="row" gap={3} flexWrap="wrap" pt={2}>
            <Button
              variant="contained"
              size="large"
              sx={{
                background: `linear-gradient(90deg, ${colors.primary}, #D878FF)`,
                color: colors.primaryStrong,
                boxShadow: `0 0 20px ${colors.glowPrimary}`,
                px: 5,
                py: 2,
              }}
            >
              Jogar Agora
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                backdropFilter: "blur(8px)",
                backgroundColor: "rgba(25,25,35,0.4)",
                border: `1px solid rgba(72,71,81,0.4)`,
                color: colors.textPrimary,
                px: 5,
                py: 2,
              }}
            >
              Ver Detalhes do Evento
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Grid>
  );
}
