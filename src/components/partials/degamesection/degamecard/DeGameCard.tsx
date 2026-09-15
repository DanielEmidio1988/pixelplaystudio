import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { colors } from "../../../../layout/theme";
import { IDeGameCardProps } from "./DeGameCard.types";


export default function DeGameCard({
  title,
  genre,
  image,
  variant,
  ctaLabel,
  accentColor = colors.secondary,
}: IDeGameCardProps) {
  const isLarge = variant === "large";
  const isMedium = variant === "medium";

  const padding = isLarge ? 5 : isMedium ? 4 : 3;
  const titleVariant = isLarge ? "h3" : isMedium ? "h4" : "h5";
  const ctaSize = isLarge ? "medium" : "small";

  return (
    <Card
      sx={{
        position: "relative",
        height: "100%",
        minHeight: isLarge ? 624 : 300,
        overflow: "hidden",
        borderColor: colors.borderStrong,
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* gradient overlay */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(13,13,22,0.9) 0%, rgba(13,13,22,0.2) 50%, transparent 100%)",
        }}
      />

      {/* content */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: padding,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: accentColor,
            textShadow: `0 0 20px ${accentColor}cc`,
            letterSpacing: "0.225em",
          }}
        >
          {genre}
        </Typography>

        <Typography
          variant={titleVariant}
          sx={{
            color: colors.textPrimary,
            textShadow: `0 0 20px ${colors.glowPrimary}`,
            mb: isLarge ? 2 : 1,
          }}
        >
          {title}
        </Typography>

        {isLarge && ctaLabel ? (
          <Button
            variant="contained"
            color="secondary"
            size={ctaSize}
            sx={{
              alignSelf: "flex-start",
              color: "#005359",
              fontFamily: '"Manrope", sans-serif',
              fontWeight: 700,
              boxShadow: `0 0 10px ${colors.glowSecondary}`,
            }}
          >
            {ctaLabel}
          </Button>
        ) : (
          <Button
            endIcon={<ArrowForwardIcon sx={{ color: colors.primary, fontSize: 16 }} />}
            sx={{
              alignSelf: "flex-start",
              color: colors.primary,
              p: 0,
              fontFamily: '"Manrope", sans-serif',
              fontWeight: 700,
              fontSize: "1rem",
              "&:hover": { background: "transparent", opacity: 0.8 },
            }}
          >
            Saiba Mais
          </Button>
        )}
      </Box>
    </Card>
  );
}
