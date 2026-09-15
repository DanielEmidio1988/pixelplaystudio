import { Box, Grid, Container } from "@mui/material";
import DeEventCard from "./EventCard";
import { eventEclipse, eventLumina, eventNeonRally } from "../../../layout/theme/images";
import { colors } from "../../../layout/theme";

const events = [
  {
    title: "Eclipse Mente",
    subtitle: "Desafio de Tempo Limitado",
    status: "ATIVO AGORA",
    statusColor: colors.secondary,
    image: eventEclipse,
    borderColor: colors.primary,
  },
  {
    title: "Neon Rally",
    subtitle: "Corrida da Comunidade",
    status: "EM 2 DIAS",
    statusColor: colors.primary,
    image: eventNeonRally,
    borderColor: colors.secondary,
  },
  {
    title: "Lumina Bloom",
    subtitle: "Semana de Puzzles Botânicos",
    status: "EM BREVE",
    statusColor: colors.secondary,
    image: eventLumina,
    borderColor: colors.tertiary,
  },
];

export default function DeEventsSection() {
  return (
    <Grid
      container
      size={12}
      component="section"
      aria-label="Eventos"
      sx={{
        py: 10,
        backgroundColor: "rgba(13,13,22,0.5)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* decorative glow */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: "40% 0 0 0",
          opacity: 0.1,
          background: `radial-gradient(ellipse at center, ${colors.secondary} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

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
          {events.map((event) => (
            <Grid size={{xs: 12, md: 4}} key={event.title} sx={{ scrollSnapAlign: "start", flexShrink: 0 }}>
              <DeEventCard {...event} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
}
