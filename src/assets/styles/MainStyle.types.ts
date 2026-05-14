type TypographyKeys = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label";

export interface FontConfig {
    typography: {
        headline: string;
        body: string;
        label: string;
    };
    size: Record<TypographyKeys, string>;
}

export interface ColorPalette {
    white: string;
    black: string;
    gray: string;
    error: string;
    success: string;
    neutral: string;
    terciary: string;
    secondary: string;
    primary: string;
    primaryStrong: string;
}

export interface SpacingConfig {
    innerSpaceSm: string;
    innerSpaceMd: string;
    innerSpaceLg: string;
}

export interface MainLayoutStyle {
    colors: ColorPalette;
    spacing: SpacingConfig;
    fonts: FontConfig;
}