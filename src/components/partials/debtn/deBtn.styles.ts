import { SxProps, Theme } from "@mui/material/styles";
import { Colors, MainLayout } from "../../../assets/styles/MainStyle";
import { CSSProperties } from "react";

export const baseButton: CSSProperties = {
    padding: "16px 40px",
    border: "1px solid transparent",
    borderRadius: 9999,
    fontWeight: "bold",
    fontFamily: MainLayout.fonts.typography.headline,
}

export const btnDefault: CSSProperties = {
    backgroundColor: MainLayout.colors.primary,
    color: MainLayout.colors.primaryStrong,

    // ".&:hover": {
    //     backgroundColor: MainLayout.colors.primaryStrong,
    //     color: MainLayout.colors.white,
    //     BorderColor: MainLayout.colors.primary,
    // }
}

export const btnDark: CSSProperties = {
    backgroundColor: MainLayout.colors.primary,
    color: MainLayout.colors.white,
    borderColor: MainLayout.colors.gray,
}

export const btnLight: CSSProperties = {
    backgroundColor: MainLayout.colors.primary,
    color: MainLayout.colors.primaryStrong,
}

export const btnWhite: CSSProperties = {
    backgroundColor: MainLayout.colors.primary,
    color: MainLayout.colors.primaryStrong,
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