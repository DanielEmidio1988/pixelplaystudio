import { SxProps, Theme } from "@mui/material";
import { Colors } from "../../../assets/styles/MainStyle";

export const sTitleSection: SxProps<Theme> = {
    position: "relative",
    display: "inline-block",
    textAlign: "center",
    textTransform: "uppercase",
    color: Colors.primary,
    fontWeight: "bold",
    zIndex: 0,
    cursor: "default",

    "&.reverse": {
        color: Colors.black,
    },
}