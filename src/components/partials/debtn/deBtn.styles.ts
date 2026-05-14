import { SxProps, Theme } from "@mui/material/styles";
import { Colors, MainLayout } from "../../../assets/styles/MainStyle";
import { CSSProperties } from "react";

export const baseButton: CSSProperties = {
    padding: "16px 40px",
    borderRadius: 9999,
    fontWeight: "bold",
}

export const btnDefault: CSSProperties = {
    backgroundColor: MainLayout.colors.primary,
    color: MainLayout.colors.primaryStrong,
    fontFamily: MainLayout.fonts.typography.headline,
}

export const btnDark: CSSProperties = {
    backgroundColor: MainLayout.colors.primary,
    color: MainLayout.colors.primaryStrong,
    fontFamily: MainLayout.fonts.typography.headline,
}

export const btnLight: CSSProperties = {
    backgroundColor: MainLayout.colors.primary,
    color: MainLayout.colors.primaryStrong,
    fontFamily: MainLayout.fonts.typography.headline,
}

export const btnWhite: CSSProperties = {
    backgroundColor: MainLayout.colors.primary,
    color: MainLayout.colors.primaryStrong,
    fontFamily: MainLayout.fonts.typography.headline,
}


// APAGAR 

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
        backgroundColor: Colors.primary,

        "&:hover": {
            backgroundColor: Colors.dark,
            color: Colors.white,
        }
    },

    "&.reverse":{
        color:  Colors.white,
        backgroundColor: Colors.dark,

        "&:hover": {
            backgroundColor: Colors.secondary,
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