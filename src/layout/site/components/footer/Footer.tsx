import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { colors } from "../../../theme";
import { FooterLinkList } from "./FooterLinkList";
import { SocialIconLink } from "./SocialIconLink";
import { DeBtn } from "../../../../components/partials/debtn/DeBtn";

const shopLinks = ["Ofertas Diárias", "Probabilidades", "Troca de Itens", "Eventos Ativos"];
const supportLinks = ["Central de Ajuda", "Problemas de Compra", "Política de Privacidade", "Termos de Serviço"];

const socialLinks = [
  {
    url: "#",
    ariaLabel: "linkedin-icon",
    icon: <LinkedInIcon />
  },
  {
    url: "#",
    ariaLabel: "youtube-icon",
    icon: <YouTubeIcon />
  },
  {
    url: "#",
    ariaLabel: "linkedin-icon",
    icon: <InstagramIcon />
  },
]


export default function Footer() {
  return (
    <Grid
      container
      size={12}
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
        <Grid container size={12} spacing={8}>
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
                {socialLinks.map((link) => (
                  <SocialIconLink 
                    key={link.ariaLabel} 
                    ariaLabel={link.ariaLabel}
                    url={link.url}
                    icon={link.icon} 
                  />
                ))}
              </Box>
            </Stack>
          </Grid>

          <Grid size={{xs: 12, md: 3 }}>
            <FooterLinkList heading="Loja" links={shopLinks} />
          </Grid>

          <Grid size={{xs: 12, md: 3 }}>
            <FooterLinkList heading="Suporte" links={supportLinks} />
          </Grid>

          <Grid size={{xs: 12, md: 3 }}>
            <Stack gap={4}>
              <Typography variant="h6" sx={{ color: colors.textPrimary }}>
                Idioma
              </Typography>
              <Stack gap={2}>
                <DeBtn 
                  startIcon={<LanguageIcon sx={{ fontSize: 15 }} />}
                  label="Português (Brasil)"
                  variant="contained"
                  layoutBtn="dark"
                  size="small"
                  action={() => {}}
                />
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
    </Grid>
  );
}
