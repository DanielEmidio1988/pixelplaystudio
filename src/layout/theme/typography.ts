import type { ThemeOptions } from "@mui/material/styles";

type TypographyOptions = NonNullable<ThemeOptions["typography"]>;

const spaceGrotesk = '"Space Grotesk", sans-serif';
const manrope = '"Manrope", sans-serif';
const plusJakarta = '"Plus Jakarta Sans", sans-serif';

const typography: TypographyOptions = {
  fontFamily: manrope,
  h1: {
    fontFamily: spaceGrotesk,
    fontWeight: 700,
    fontSize: "6rem",
    lineHeight: 1,
    letterSpacing: "-0.05em",
  },
  h2: {
    fontFamily: spaceGrotesk,
    fontWeight: 700,
    fontSize: "3rem",
    lineHeight: 1,
    letterSpacing: "-0.05em",
  },
  h3: {
    fontFamily: spaceGrotesk,
    fontWeight: 700,
    fontSize: "1.875rem",
    lineHeight: 1.2,
  },
  h4: {
    fontFamily: spaceGrotesk,
    fontWeight: 700,
    fontSize: "1.5rem",
    lineHeight: 1.33,
  },
  h5: {
    fontFamily: spaceGrotesk,
    fontWeight: 700,
    fontSize: "1.25rem",
    lineHeight: 1.4,
  },
  h6: {
    fontFamily: spaceGrotesk,
    fontWeight: 700,
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: "0.087em",
    textTransform: "uppercase",
  },
  body1: {
    fontFamily: manrope,
    fontWeight: 400,
    fontSize: "1.25rem",
    lineHeight: 1.625,
  },
  body2: {
    fontFamily: manrope,
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  caption: {
    fontFamily: plusJakarta,
    fontWeight: 700,
    fontSize: "0.75rem",
    lineHeight: 1.33,
  },
  overline: {
    fontFamily: plusJakarta,
    fontWeight: 700,
    fontSize: "0.875rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
  button: {
    fontFamily: spaceGrotesk,
    fontWeight: 700,
    fontSize: "1rem",
    letterSpacing: "0",
    textTransform: "none",
  },
};

export default typography;
