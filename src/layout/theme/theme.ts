import { createTheme } from "@mui/material/styles";
import colors from "./colors";
import typography from "./typography";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: colors.background,
      paper: colors.surface,
    },
    primary: {
      main: colors.primary,
      contrastText: colors.primaryStrong,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.background,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textMuted,
    },
    error: {
      main: colors.error,
    },
    success: {
      main: colors.success,
    },
    divider: colors.border,
  },
  typography,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.background,
          color: colors.textPrimary,
          scrollbarColor: `${colors.surfaceSecondary} transparent`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.surface,
          borderRadius: 32,
          border: `1px solid ${colors.border}`,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: colors.surfaceSecondary,
          borderRadius: 9999,
          color: colors.textMuted,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "transparent",
        },
      },
    },
  },
});

export default theme;
