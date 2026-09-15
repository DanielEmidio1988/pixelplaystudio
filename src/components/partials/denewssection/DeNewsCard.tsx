import { Box, Button, Card, CardMedia, Chip, Stack, Typography } from "@mui/material";
import { colors } from "../../../layout/theme";
import { IDeNewsCardProps } from "./DeNewsSection.types";

export default function DeNewsCard(
  { 
    date, 
    title, 
    excerpt, 
    image, 
    tag, 
    tagColor = colors.primary, 
    tagTextColor = colors.primaryStrong 
  }: IDeNewsCardProps) {
  return (
    <article>
      <Stack gap={1}>
        {/* image */}
        <Card
          sx={{
            position: "relative",
            height: 231,
            overflow: "hidden",
            borderColor: colors.border,
            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Chip
            label={tag}
            size="small"
            sx={{
              position: "absolute",
              top: 17,
              left: 17,
              backgroundColor: tagColor,
              color: tagTextColor,
              fontFamily: '"Manrope", sans-serif',
              fontWeight: 800,
              fontSize: "0.625rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              height: 23,
              boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            }}
          />
        </Card>

        {/* meta */}
        <Typography variant="caption" sx={{ color: colors.secondary, pt: 2, display: "block" }}>
          {date}
        </Typography>
        <Typography variant="h5" sx={{ color: colors.textPrimary }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: colors.textMuted, fontSize: "0.875rem", lineHeight: 1.43 }}>
          {excerpt}
        </Typography>

        <Button
          endIcon={<Box component="span" sx={{ fontSize: "0.65rem", ml: 0.5, lineHeight: 1 }}>›</Box>}
          size="small"
          sx={{
            alignSelf: "flex-start",
            color: colors.textPrimary,
            p: 0,
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 700,
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            "&:hover": { background: "transparent", opacity: 0.8 },
          }}
        >
          LER MAIS
        </Button>
      </Stack>
    </article>
  );
}
