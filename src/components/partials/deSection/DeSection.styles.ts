import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import { Colors } from "../../../assets/styles/MainStyle";

export const sDeSection: SxProps<Theme> = {

    ".contentArea": {
        marginTop: 4,

        "p, span": {
            color: Colors.white,
        },

        "h1, h2, h3, h4, h5, h6": {
            color: Colors.primary,
            textAlign: "center",
        },

        ".contentSection__actionArea": {
            marginTop: 4,
            display: "flex",
            justifyContent: "center"
        },
    },

    ".imageArea": {

        ".imageArea__img": {
            height: "60vh",
            clipPath: "polygon(0 0, 96% 0, 100% 10%, 100% 100%, 4% 100%, 0 90%)",
            position: "relative",
            zIndex: 1,
        }
    }
}

export const contentArea: SxProps<Theme> = {
    "p, span": {
        color: Colors.white,
    },

    "h1, h2, h3, h4, h5, h6": {
        color: Colors.primary,
        textAlign: "center",
    },

    ".contentSection__actionArea": {
        marginTop: 4,
    },

}

export const imageArea: SxProps<Theme> = {
    ".imageArea": {
        height: "60vh",
        clipPath: "polygon(0 0, 96% 0, 100% 10%, 100% 100%, 4% 100%, 0 90%)",
        position: "relative",
        zIndex: 1,
    }
}