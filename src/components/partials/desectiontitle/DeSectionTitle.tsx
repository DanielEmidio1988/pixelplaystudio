import { Box, Stack, Typography } from "@mui/material";
import { colors } from "../../../layout/theme"
import { IDeSectionTitle } from "./DeSectionTitle.types";


export default function DeSectionTitle({ label, accent, description, accentFirst }: IDeSectionTitle) {
  return (
    <Stack gap={2}>
      <Typography
        variant="h2"
        sx={{ textShadow: `0 0 20px ${colors.glowPrimary}`, textTransform: "uppercase" }}
      >
        {accentFirst ? (
          <>
            <Box component="span" sx={{ color: colors.secondary }}>{accent} </Box>
            {label}
          </>
        ) : (
          <>
            {label}{" "}
            {accent && <Box component="span" sx={{ color: colors.secondary }}>{accent}</Box>}
          </>
        )}
      </Typography>
      {description && (
        <Typography variant="body2" sx={{ color: colors.textMuted, maxWidth: 448 }}>
          {description}
        </Typography>
      )}
    </Stack>
  );
}
