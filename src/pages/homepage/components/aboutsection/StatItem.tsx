import { Stack, Typography } from "@mui/material";
import { colors } from "../../../../layout/theme";
import { IStatItemProps } from "./AboutSection.types";

export function StatItem({ value, label, color }: IStatItemProps) {
  return (
    <Stack>
      <Typography
        variant="h3"
        sx={{ color, textShadow: `0 0 20px ${color}cc`, lineHeight: 1.1 }}
      >
        {value}
      </Typography>
      <Typography
        variant="overline"
        sx={{ color: colors.textMuted, fontSize: "0.875rem", letterSpacing: "0.1em" }}
      >
        {label}
      </Typography>
    </Stack>
  );
}