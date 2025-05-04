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
