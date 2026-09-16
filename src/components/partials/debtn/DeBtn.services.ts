import { SxProps, Theme } from "@mui/material/styles";
import { colors } from "../../../layout/theme";

function getLayoutBtn(style: "default" | "dark" | "light" | "white"): SxProps<Theme> {
    switch (style) {
        case "dark":
            return {
                backdropFilter: "blur(8px)",
                backgroundColor: colors.surface,
                border: `1px solid ${colors.border}`,
                color: colors.textPrimary,
                px: 5,
                py: 2,
            };
        default:
            return {
                background: `linear-gradient(90deg, ${colors.primary}, ${colors.primary})`,
                color: colors.primaryStrong,
                boxShadow: `0 0 20px ${colors.glowPrimary}`,
                px: 5,
                py: 2,
            };
    }

}

export default {
    getLayoutBtn,
}