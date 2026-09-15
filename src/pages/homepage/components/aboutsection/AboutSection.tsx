import { Box, Button, Card, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import { careerPhoto } from "../../../../layout/theme/images";
import { colors } from "../../../../layout/theme";
import { StatItem } from "./StatItem";

export default function AboutSection() {
  return (
    <Grid size={12}
      component="section"
      aria-label="Sobre a Pixel Play"
      sx={{ py: 16, backgroundColor: "rgba(19,19,28,0.5)", position: "relative", overflow: "hidden" }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: "20% 40% 20% 0",
          opacity: 0.2,
          background: `radial-gradient(ellipse at center, ${colors.primary} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 }, position: "relative" }}>
        <Grid size={12} container spacing={12} alignItems="center">
          {/* Left */}
          <Grid size={{xs: 12, md: 6}}>
            <Stack gap={6}>
              <Stack gap={3}>
                <Typography
                  variant="h2"
                  sx={{ color: colors.textPrimary, textShadow: `0 0 20px ${colors.glowPrimary}`, textTransform: "uppercase" }}
                >
                  SOBRE A PIXEL PLAY
                </Typography>
                <Box
                  aria-hidden
                  sx={{ width: 80, height: 6, borderRadius: 9999, background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }}
                />
                <Typography variant="body1" sx={{ color: colors.textPrimary }}>
                  A Pixel Play é um estúdio brasileiro dedicado a criar entretenimento interativo de alta fidelidade.
                  Expandimos os limites da narrativa através de tecnologia de ponta e excelência artística.
                </Typography>
              </Stack>

              <Grid size={12} container spacing={4}>
                <Grid size={6}>
                  <StatItem value="15M+" label="Jogadores Globais" color={colors.secondary} />
                </Grid>
                <Grid size={6}>
                  <StatItem value="04" label="Franquias Ativas" color={colors.primary} />
                </Grid>
              </Grid>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  alignSelf: "flex-start",
                  border: `2px solid rgba(223,142,255,0.5)`,
                  color: colors.primary,
                  px: 5,
                  py: 2.25,
                  boxShadow: `0 0 15px rgba(223,142,255,0.1)`,
                  "&:hover": { border: `2px solid ${colors.primary}`, backgroundColor: "rgba(223,142,255,0.05)" },
                }}
              >
                Saiba Mais
              </Button>
            </Stack>
          </Grid>

          {/* Right */}
          <Grid size={{xs: 12, md: 6}}>
            <Box sx={{ position: "relative" }}>
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 256,
                  height: 256,
                  borderRadius: "50%",
                  backgroundColor: "rgba(223,142,255,0.3)",
                  filter: "blur(50px)",
                  pointerEvents: "none",
                }}
              />
              <Card
                sx={{
                  borderRadius: 8,
                  overflow: "hidden",
                  border: `1px solid ${colors.borderStrong}`,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(25,25,35,0.4)",
                }}
              >
                <Box sx={{ height: 256, position: "relative", overflow: "hidden" }}>
                  <CardMedia
                    component="img"
                    image={careerPhoto}
                    alt="Escritório Pixel Play"
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <Box aria-hidden sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(37,37,49,0.6), transparent)", opacity: 0.6 }} />
                </Box>

                <Box sx={{ backdropFilter: "blur(12px)", backgroundColor: "rgba(37,37,49,0.8)", p: 5, display: "flex", flexDirection: "column", gap: 3 }}>
                  <Typography
                    variant="h4"
                    sx={{ color: colors.textPrimary, textShadow: `0 0 20px ${colors.secondary}cc` }}
                  >
                    Trabalhe Conosco
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.textMuted }}>
                    Junte-se à Pixel Play e vamos transformar a comunidade gamer, proporcionando experiências incríveis
                    para milhões de pessoas ao redor do mundo.
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: colors.white,
                      color: colors.background,
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 700,
                      py: 2,
                      boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
                      "&:hover": { backgroundColor: "#e0e0e0" },
                    }}
                  >
                    Ver Vagas
                  </Button>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
