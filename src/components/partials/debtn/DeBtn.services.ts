import { SxProps, Theme } from "@mui/material/styles";
import { colors } from "../../../layout/theme";

function getLayoutBtn(
    variant: "text" | "contained" | "outlined",
    layoutBtn: "default" | "dark" | "light" | "white",
    reverse?: boolean,
): SxProps<Theme> {

    switch (layoutBtn) {

        case "dark":
            return {
                color: colors.textPrimary,

                ...(variant === "contained" && {
                    backgroundColor: colors.surface,
                    border: `1px solid ${colors.border}`,
                }),

                ...(variant === "outlined" && {
                    border: `1px solid ${colors.border}`,
                    backgroundColor: "transparent",
                }),

                ...(variant === "text" && {
                    backgroundColor: "transparent",
                }),

                backdropFilter: "blur(8px)",
                px: variant === "text" ? 0 : 5,
                py: variant === "text" ? 0 : 2,

                "&:hover": {
                    ...(variant === "contained" && {
                        backgroundColor: colors.surface,
                    }),

                    ...(variant === "outlined" && {
                        backgroundColor: colors.surface,
                    }),

                    ...(variant === "text" && {
                        backgroundColor: "transparent",
                        opacity: 0.8,
                    }),
                },
            };

        case "light":
            return {
                color: reverse
                    ? colors.secondary
                    : colors.secondaryStrong,

                fontFamily: '"Manrope", sans-serif',
                fontWeight: 700,

                ...(variant === "contained" && {
                    backgroundColor: reverse
                        ? colors.surface
                        : colors.secondary,

                    border: reverse
                        ? `1px solid ${colors.secondary}`
                        : "1px solid transparent",

                    boxShadow: reverse
                        ? "none"
                        : `0 0 10px ${colors.glowSecondary}`,
                }),

                ...(variant === "outlined" && {
                    backgroundColor: "transparent",
                    border: `1px solid ${colors.secondary}`,
                }),

                ...(variant === "text" && {
                    backgroundColor: "transparent",
                }),

                "&:hover": {
                    ...(variant === "contained" && {
                        backgroundColor: reverse
                            ? colors.surface
                            : colors.secondary,
                    }),

                    ...(variant === "outlined" && {
                        backgroundColor: colors.secondary,
                    }),

                    ...(variant === "text" && {
                        backgroundColor: "transparent",
                        color: colors.secondary,
                        opacity: 0.8,
                    }),
                },
            };

        case "white":
            return {
                color: reverse
                    ? colors.background
                    : colors.white,

                fontFamily: '"Manrope", sans-serif',
                fontWeight: 700,

                ...(variant === "contained" && {
                    backgroundColor: reverse
                        ? colors.white
                        : colors.white,

                    border: reverse
                        ? `1px solid transparent`
                        : "1px solid transparent",

                    color: reverse
                        ? colors.background
                        : colors.primaryStrong,
                }),

                ...(variant === "outlined" && {
                    backgroundColor: reverse
                        ? colors.white
                        : "transparent",

                    border: reverse
                        ? "1px solid transparent"
                        : `1px solid ${colors.white}`,

                    color: reverse
                        ? colors.surface
                        : colors.white,
                }),

                ...(variant === "text" && {
                    backgroundColor: "transparent",
                }),

                px: variant === "text" ? 0 : 3,
                py: variant === "text" ? 0 : 1.5,

                "&:hover": {
                    ...(variant === "contained" && {
                        backgroundColor: colors.white,
                    }),

                    ...(variant === "outlined" && {
                        backgroundColor: reverse
                            ? colors.white
                            : "rgba(255,255,255,0.08)",
                    }),

                    ...(variant === "text" && {
                        backgroundColor: "transparent",
                        opacity: 0.8,
                    }),
                },
            };

        default:
            return {
                color: reverse
                    ? colors.primary
                    : colors.primaryStrong,

                ...(variant === "contained" && {
                    background: reverse
                        ? colors.surface
                        : `linear-gradient(90deg, ${colors.primary}, ${colors.primary})`,

                    border: reverse
                        ? `1px solid ${colors.primary}`
                        : "1px solid transparent",

                    boxShadow: reverse
                        ? "none"
                        : `0 0 20px ${colors.glowPrimary}`,
                }),

                ...(variant === "outlined" && {
                    backgroundColor: "transparent",
                    border: `1px solid ${colors.primary}`,
                    color: colors.primary,
                }),

                ...(variant === "text" && {
                    backgroundColor: "transparent",
                    color: colors.primary,
                }),

                px: variant === "text" ? 0 : 5,
                py: variant === "text" ? 0 : 2,

                "&:hover": {
                    ...(variant === "contained" && {
                        background: reverse
                            ? colors.surface
                            : `linear-gradient(90deg, ${colors.primary}, ${colors.primary})`,
                    }),

                    ...(variant === "outlined" && {
                        backgroundColor: `${colors.primary}15`,
                    }),

                    ...(variant === "text" && {
                        backgroundColor: "transparent",
                        color: colors.primary,
                        opacity: 0.8,
                    }),
                },
            };
    }
}

export default {
    getLayoutBtn,
};
