import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Container, Grid, Stack, } from "@mui/material";
import { newsAethercore, newsTwilight, newsWasteland } from "../../../layout/theme/images";
import { colors } from "../../../layout/theme";
import DeNewsCard from "./DeNewsCard";
import { DeBtn } from "../debtn/DeBtn";
import DeSectionTitle from "../desectiontitle/DeSectionTitle";

const articles = [
  {
    date: "24 DE MARÇO, 2024",
    title: "AETHERCORE: NOVA VERSÃO 1.8 DISPONÍVEL",
    excerpt: "Descubra as últimas otimizações para a engine Aethercore e novas recompensas espectrais.",
    image: newsAethercore,
    tag: "Updates",
    tagColor: colors.primary,
    tagTextColor: colors.primaryStrong,
  },
  {
    date: "20 DE MARÇO, 2024",
    title: "TORNEIO: TWILIGHT INVITATIONAL",
    excerpt: "As inscrições estão abertas para o maior torneio de Twilight Nexus da temporada. Prepare sua equipe e…",
    image: newsTwilight,
    tag: "Comunidade",
    tagColor: colors.secondary,
    tagTextColor: "#005359",
  },
  {
    date: "15 DE MARÇO, 2024",
    title: "BASTIDORES: O SOM DE WASTELAND RIDERS",
    excerpt: "Conheça a nossa equipe de áudio e descubra como criamos a trilha sonora imersiva para o mundo de…",
    image: newsWasteland,
    tag: "Bastidores",
    tagColor: colors.tertiary,
    tagTextColor: "#47001D",
  },
];

export default function DeNewsSection() {
  return (
    <Grid container size={12} component="section" aria-label="Últimas Notícias" sx={{ py: 16 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 6 } }}>
        <Stack gap={8}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <DeSectionTitle
              label="ULTIMAS"
              accent="NOTÍCIAS"
              description=""
            />

            <DeBtn 
              variant="text"
              layoutBtn="white"
              size="large"
              label="Ver Arquivo"
              uppercase
              endIcon={<ArrowForwardIosIcon sx={{ fontSize: "0.7rem !important" }} />}
              action={() => {}}
            />

          </Box>

          <Grid container spacing={4}>
            {articles.map((article) => (
              <Grid key={article.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <DeNewsCard {...article} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Grid>
  );
}
