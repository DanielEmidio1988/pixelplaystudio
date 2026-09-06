import { Box } from "@mui/material";
import { colors } from "../../../theme";

export function SocialIconLink({ label }: { label: string }) {

  return (
    <Box
      component="a"
      href="#"
      aria-label={label}
      sx={{
        width: 20,
        height: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: colors.textMuted,
        "&:hover": { color: colors.textPrimary },
        transition: "color 0.2s",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    </Box>
  );
}