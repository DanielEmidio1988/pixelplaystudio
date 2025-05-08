import { SxProps, Theme } from "@mui/material/styles";
import { Colors, SpacingSection } from "../../assets/styles/MainStyle";

export const SectionArea: SxProps<Theme> = {
    // background: `radial-gradient(circle,${Colors.secondary} 0%, ${Colors.dark} 100%)`,
    backgroundColor: Colors.black,
    padding: SpacingSection.innerSpaceSm,
}