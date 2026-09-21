import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { colors } from "../../../../layout/theme";
import { IDeGameCardProps } from "./DeGameCard.types";
import { DeBtn } from "../../debtn/DeBtn";


export default function DeGameCard({
  title,
  genre,
  image,
  variant,
  ctaLabel,
  layoutBtn,
  accentColor = colors.secondary,
}: IDeGameCardProps) {
  const isLarge = variant === "large";
  const isMedium = variant === "medium";
  const isSmall = variant === "small";

  const padding = isLarge ? 5 : isMedium ? 4 : 3;
  const titleVariant = isLarge ? "h3" : isMedium ? "h4" : "h5";

  return (
    <Card
      sx={{
        position: "relative",
        height: isLarge ? 400 : 196,
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
          alignItems: "flex-start",
          gap: 0,
        }}
      >
        {isLarge && (
          <Typography
            variant="overline"
            sx={{
              color: accentColor,
              textShadow: `0 0 20px ${accentColor}cc`,
              letterSpacing: "0.225em",
              marginBottom: 0,
            }}
          >
            {genre}
          </Typography>
        )}


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

        {isSmall && (
          <Typography
            variant="body2"
            fontWeight="light"
            sx={{
              color: accentColor,
              textShadow: `0 0 20px ${accentColor}cc`,
              // marginBottom: "8px"
            }}
          >
            {genre}
          </Typography>
        )}


        <DeBtn
          variant={isLarge ? `contained` : `text`}
          layoutBtn={layoutBtn}
          size={variant}
          label={ctaLabel}
          action={() => { }}
          {...isSmall && { 
            uppercase: true,
            underline: true,
          }}
          {...isMedium && { endIcon: (<ArrowForwardIcon sx={{ color: colors.primary, fontSize: 16 }} />) }}
        />
      </Box>
    </Card>
  );
}
