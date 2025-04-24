import { SxProps, Theme } from "@mui/material/styles";
import { Colors } from "../../../../assets/styles/MainStyle";

export const styleButton: SxProps<Theme> = {
    fontWeight: 400,
    backgroundColor: "transparent",
    color: Colors.white,
    clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
    
    "&:hover": {
        backgroundColor: Colors.basecolor,
        color: Colors.dark,
        fontWeight: 600,
    },
    "&.isActive": {
        backgroundColor: Colors.basecolor,
        color: Colors.dark,
        fontWeight: 600,
    },
};

export const styleButtonReadMore: SxProps<Theme> = {
    position: "relative",
    marginTop: "12px",
    clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
    backgroundColor: Colors.basecolor,
    color: Colors.dark,
    padding: "8px 20px",
    overflow: "visible",
    zIndex: 1,
    fontWeight: 400,

    "&:hover": {
        fontWeight: 600,
        backgroundColor: Colors.white,
        color: Colors.basecolor,
        borderTop: `3px solid ${Colors.basecolor}`,
        borderBottom: `3px solid ${Colors.basecolor}`,
    },
}
