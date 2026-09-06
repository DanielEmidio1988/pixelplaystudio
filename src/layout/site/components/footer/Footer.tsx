import LanguageIcon from "@mui/icons-material/Language";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { colors } from "../../../theme";
import { FooterLinkList } from "./FooterLinkList";
import { SocialIconLink } from "./SocialIconLink";

const shopLinks = ["Ofertas Diárias", "Probabilidades", "Troca de Itens", "Eventos Ativos"];
const supportLinks = ["Central de Ajuda", "Problemas de Compra", "Política de Privacidade", "Termos de Serviço"];


export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.backgroundSecondary,
        borderTop: `1px solid ${colors.border}`,
        py: 10,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* top gradient divider */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: 1,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${colors.primary}80, transparent)`,
        }}
      />

      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        <Grid container spacing={8}>
          <Grid size={{xs: 12, md: 3 }}>
            <Stack gap={3}>
              <Typography
                variant="h4"
                sx={{ color: colors.primary, textShadow: `0 0 15px ${colors.glowPrimary}`, textTransform: "uppercase" }}
              >
                Pixel Play
              </Typography>
              <Typography variant="body2" sx={{ color: colors.textMuted, fontSize: "0.875rem", lineHeight: 1.625 }}>
                O hub definitivo para colecionáveis digitais de alto nível e experiências gacha em todo o multiverso.
              </Typography>
              <Box sx={{ display: "flex", gap: 3 }}>
                {["Discord", "Twitter", "Instagram"].map((name) => (
                  <SocialIconLink key={name} label={name} />
                ))}
              </Box>
            </Stack>
          </Grid>

          <Grid size={{xs: 6, md: 2 }}>
            <FooterLinkList heading="Loja" links={shopLinks} />
          </Grid>

          <Grid size={{xs: 6, md: 2 }}>
            <FooterLinkList heading="Suporte" links={supportLinks} />
          </Grid>

          <Grid size={{xs: 6, md: 2 }}>
            <Stack gap={4}>
              <Typography variant="h6" sx={{ color: colors.textPrimary }}>
                Idioma
              </Typography>
              <Stack gap={2}>
                <Button
                  startIcon={<LanguageIcon sx={{ fontSize: 15 }} />}
                  variant="outlined"
                  sx={{
                    backgroundColor: colors.surfaceSecondary,
                    border: `1px solid ${colors.border}`,
                    borderRadius: 9999,
                    color: colors.textPrimary,
                    justifyContent: "flex-start",
                    px: 3,
                    py: 1.5,
                    fontSize: "0.875rem",
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    "&:hover": { borderColor: colors.borderStrong, backgroundColor: colors.surface },
                  }}
                >
                  Português (Brasil)
                </Button>
                <Typography
                  component="p"
                  sx={{
                    color: "#475569",
                    fontStyle: "italic",
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontSize: "0.625rem",
                  }}
                >
                  © 2026 Pixel Play. Desenvolvido com paixão no Brasil.
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
