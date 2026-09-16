import { Box } from "@mui/material";
import { colors } from "../../../theme";
import { ReactNode } from "react";

export function SocialIconLink({ ariaLabel, url, icon }: { ariaLabel: string, url: string, icon: ReactNode }) {

  return (
    <Box
      component="a"
      href={url}
      aria-label={ariaLabel}
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
      {icon}
    </Box>
  );
}