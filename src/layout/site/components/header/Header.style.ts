import { SxProps, Theme } from "@mui/material/styles";
import { Colors } from "../../../../assets/styles/MainStyle";

const sHeaderContainer: SxProps<Theme> = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    position: "relative",
    zIndex: 1,
    transition: "background-image 1s ease-in-out",

    "&::after": {
        content: '""',
        position: "absolute",
        zIndex: 0,
        top: "10%",
        left: 0,
        width: "100%",
        height: "90%",
        backgroundColor: Colors.black,
        opacity: "0.7",
    },
}

const sTypography: SxProps<Theme> = {
    color: Colors.white, 
    cursor: "default",
}

const sNavButton: SxProps<Theme> = {
    fontWeight: 400,
    backgroundColor: "transparent",
    color: Colors.white,
    borderRadius: 0,

    "&:hover": {
        color: Colors.primary,
        borderBottom: `2px solid ${Colors.primary}`,
        // fontWeight: 600,
    },
    "&.isActive": {
        color: Colors.primary,
        borderBottom: `2px solid ${Colors.primary}`,
        fontWeight: 600,
    },

};

const sBannerBtnSlider: SxProps<Theme> = { 
    position: "absolute",  
    top: "50%" 
};

const sBannerArrowSlider: SxProps<Theme> = {
    fill: Colors.white,
    height: "40px",
    width: "40px",
}

export const sHeader = {
    sHeaderContainer,
    sTypography,
    sNavButton,
    sBannerBtnSlider,
    sBannerArrowSlider,
}