import { Box, Card, CardMedia, Chip, Stack, Typography } from "@mui/material";
import { colors } from "../../../../layout/theme";
import { IPortfolioCardsProps } from "./Portfolio.types";
import { useNavigate } from "react-router-dom";

export default function PortfolioCards(
  {
    title,
    tag,
    tagColor = colors.primaryStrong,
    tagColorStrong = colors.primary,
    url = "/",
    image,
  }: IPortfolioCardsProps) {

  const navigate = useNavigate();

  return (
      <Card
        onClick={() => navigate(url)}
        sx={{
          position: "relative",
          height: 400,
          flex: "0 0 400px",
          overflow: "hidden",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(25,25,35,0.4)",
          border: `1px solid ${tagColor}66`,
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />

        <Chip
          label={tag}
          size="small"
          sx={{
            position: "absolute",
            top: 17,
            left: 17,
            alignSelf: "flex-start",
            backdropFilter: "blur(12px)",
            backgroundColor: `${tagColorStrong}80`,
            border: `1px solid ${tagColor}`,
            boxShadow: `0 0 8px -3px ${tagColor}`,
            borderRadius: 9999,
            color: colors.white,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            height: 34,
            padding: "0 8px",
          }}
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
            justifyContent: "flex-end",
            p: 4,
            gap: 0.5,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: colors.white,
              textShadow: `0 0 20px ${colors.white}cc`,
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        </Stack>
      </Card>
  );
}
