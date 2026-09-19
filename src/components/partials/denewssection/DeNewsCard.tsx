import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Card, CardMedia, Chip, Stack, Typography } from "@mui/material";
import { colors } from "../../../layout/theme";
import { IDeNewsCardProps } from "./DeNewsSection.types";
import { DeBtn } from "../debtn/DeBtn";

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

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start"
          }}
        >
          <DeBtn
            variant="text"
            layoutBtn="white"
            size="small"
            label="Ler mais"
            uppercase
            endIcon={<ArrowForwardIosIcon sx={{ fontSize: "0.7rem !important" }} />}
            action={() => { }}
          />
        </Box>

      </Stack>
    </article>
  );
}
