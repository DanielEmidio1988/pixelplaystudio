
import { ColorPalette, FontConfig, MainLayoutStyle, SpacingConfig } from "./MainStyle.types";


export const Fonts: FontConfig = {
    typography: {
        headline: "Space Grotesk", // Space Grotesk - Uso em títulos e destaque visual
        body: "Manrope", // Manrope - Leitura contínua e conteúdo
        label: "Plus Jakarta Sans", // Plus Jakarta Sans - Botões e elementos de UI
    },
    size: {
        h1: "",
        h2: "",
        h3: "",
        h4: "",
        h5: "",
        h6: "",
        p: "",
        span: "",
        label: "",
    },
}

export const BaseLayout: Record<string, string | Record<string, string>> = {
    colors: {
        white: "#FFF",
        black: "#000",
        dark: "#0D0F1E",
    }
};

export const Colors: ColorPalette = {
    white: "#FFF",
    black: "#000",
    gray: "#F2EFFB",
    error: "",
    success: "",
    neutral: "#0A0A12",
    terciary: "#FF007A",
    secondary: "#00F0FF",
    primary: "#BD00FF",
    primaryStrong: "#4F006D",
};


export const SpacingSection: SpacingConfig = {
    innerSpaceSm: "30px 0",
    innerSpaceMd: "50px 0",
    innerSpaceLg: "70px 0",
}

export const MainLayout: MainLayoutStyle = {
    colors: Colors,
    spacing: SpacingSection,
    fonts: Fonts,
}
