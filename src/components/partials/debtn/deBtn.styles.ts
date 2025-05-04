import { SxProps, Theme } from "@mui/material/styles";
import { Colors } from "../../../assets/styles/MainStyle";

export const deBtnStyle: SxProps<Theme> = {
    position: "relative",
    marginTop: "12px",
    clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
    padding: "10px 24px",
    overflow: "visible",
    zIndex: 2,
    fontWeight: 600,

    "&.default":{
        color: Colors.dark,
        backgroundColor: Colors.basecolor,

        "&:hover": {
            backgroundColor: Colors.dark,
            color: Colors.white,
        }
    },

    "&.reverse":{
        color:  Colors.white,
        backgroundColor: Colors.dark,

        "&:hover": {
            backgroundColor: Colors.basecolor,
            color: Colors.dark,
        }
    },

    "&.small": {
        fontSize: "10px",
    },

    "&.medium": {
        fontSize: "12px",
    },

    "&.large": {
        fontSize: "14px",
    },

    "&.extralarge": {
        fontSize: "16px",
    },

}