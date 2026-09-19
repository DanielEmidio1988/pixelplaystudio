import { Box, Stack, Typography } from "@mui/material";
import { colors } from "../../../theme";

export function FooterLinkList({ heading, links }: { heading: string; links: string[] }) {
  return (
    <Stack gap={4}>
      <Typography variant="h6" sx={{ color: colors.textPrimary }}>
        {heading}
      </Typography>
      <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexDirection: "column", gap: 2 }}>
        {links.map((link) => (
          <li key={link}>
            <Typography
              component="a"
              href="#"
              variant="body2"
              sx={{
                color: colors.textMuted,
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": { color: colors.textPrimary },
                transition: "color 0.2s",
              }}
            >
              {link}
            </Typography>
          </li>
        ))}
      </Box>
    </Stack>
  );
}