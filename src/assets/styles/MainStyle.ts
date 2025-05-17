import { SxProps, Theme } from "@mui/material";

export const BaseLayout: Record<string, string | Record<string, string>> = {
    colors: {
        white: "#FFF",
        black: "#000",
        dark: "#0D0F1E",
    }
};

export const Colors: Record<string, string> = {
    white: "#FFF",
    black: "#000",
    dark: "#0C0F0F",
    terciary: "#0C0F0F",
    secondary: "#E3BA1B",
    primary: "#FFD53B",
    basecolor: "#FFD53B", // Remover
};
// #FFD53B
// #F5C91D
// #0C0F0F


export const SpacingSection: Record<string, string> = {
    innerSpaceSm: "30px 0",
    innerSpaceMd: "50px 0",
    innerSpaceLg: "70px 0",
}

export const sSectionYellow: SxProps<Theme> = {
    backgroundColor: Colors.primary,
    clipPath: "polygon(2% 0, 98% 0, 100% 2%, 100% 98%, 98% 100%, 2% 100%, 0 98%, 0 2%);",
    position: "relative",
}