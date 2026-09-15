import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";
import { colors } from "../../../layout/theme";
import { IDeEventCardProps } from "./DeEventsSection.types";



export default function DeEventCard(
    { 
        title, 
        subtitle, 
        status, 
        statusColor = colors.secondary, 
        image, 
        borderColor = colors.secondary 
    }: IDeEventCardProps) {
  return (
    <Card
      sx={{
        position: "relative",
        height: 200,
        flex: "0 0 400px",
        overflow: "hidden",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(25,25,35,0.4)",
        border: `1px solid ${borderColor}66`,
        boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }}
      />

      {/* left-to-right dark gradient */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to right, ${colors.background} 0%, transparent 60%)`,
          opacity: 0.7,
        }}
      />

      <Stack
        sx={{
          position: "relative",
          height: "100%",
          justifyContent: "center",
          p: 4,
          gap: 0.5,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: statusColor === colors.secondary ? colors.secondary : statusColor,
            textShadow: `0 0 20px ${statusColor}cc`,
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: colors.textMuted, fontSize: "0.875rem" }}>
          {subtitle}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: statusColor,
            textShadow: `0 0 20px ${statusColor}cc`,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 700,
            mt: 2,
            display: "block",
          }}
        >
          {status}
        </Typography>
      </Stack>
    </Card>
  );
}
