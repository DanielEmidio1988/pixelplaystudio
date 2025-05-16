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

export const sTitleSectionShadow: SxProps<Theme> = {
    position: "absolute",
    display: "inline-block",
    width: "100%",
    top: 3,
    left: 5,
    color: Colors.secondary,
    opacity: 0.1,
    zIndex: -1,  
    cursor: "default",
    transform: "scale(1.2)",

    "&.reverse": {
        color: Colors.secondary,
        display: "inline-block",
        opacity: 1,
    } 
}