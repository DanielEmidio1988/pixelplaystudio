import { SxProps, Theme } from "@mui/material/styles";
import { Colors } from "../../../assets/styles/MainStyle";

export const LastNewBlog: SxProps<Theme> = {
    height: "60%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    alignItems: "center",
    clipPath: "polygon(0 0, 92% 0, 100% 16%, 100% 100%, 8% 100%, 0 84%)",
    position: "relative",

    "&::after": {
        content: '" "',
        position: "absolute",
        top: 10,
        left: 10,
        width: "96%",
        height: "90%",
        border: `1px solid ${Colors.primary}`,
        clipPath: "polygon(0 0, 92% 0, 100% 16%, 100% 100%, 8% 100%, 0 84%)",
    },

    "&::before": {
        content: '" "',
        position: "absolute",
        top: 4,
        left: 16,
        width: "96%",
        height: "92%",
        border: `1px solid ${Colors.primary}`,
        clipPath: "polygon(0 0, 92% 0, 100% 16%, 100% 100%, 8% 100%, 0 84%)",
    }
}

export const lastNewsBlogContent: SxProps<Theme> = {

    ".lastNewBlogContent__info": {
        display: "flex",
        gap: 4,
        alignItems: "center",
        padding: "8px 0 0",

        ".lastNewBlogContent__info__cattegory": {
            color: Colors.primary,
            textTransform: "uppercase",
            fontWeight: "bold",
            cursor: "pointer",
        },

        ".lastNewBlogContent__info__date": {
            color: Colors.white,
            cursor: "default",
        }
    },

    ".titleBlog": {
        color: Colors.white,
        textTransform: "uppercase",
        margin: "8px 0",
    },

    ".contentBlog": {
        color: Colors.white,
    },

    ".readMoreBlog": {
        color: Colors.primary,
        marginTop: 2,
        textTransform: "uppercase",
        cursor: "pointer",
        fontWeight: "bold",
    }
}

export const cardsNewBlog: SxProps<Theme> = {
    height: "100px",

    "& .imgCard": {
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        alignItems: "center",
        position: "relative",
        clipPath: "polygon(0 0, 92% 0, 100% 16%, 100% 100%, 8% 100%, 0 84%)",

        "&::after": {
            content: '" "',
            position: "absolute",
            top: 10,
            left: 10,
            width: "96%",
            height: "90%",
            border: `1px solid ${Colors.primary}`,
            clipPath: "polygon(0 0, 92% 0, 100% 16%, 100% 100%, 8% 100%, 0 84%)",
        },

        "&::before": {
            content: '" "',
            position: "absolute",
            top: 4,
            left: 16,
            width: "96%",
            height: "92%",
            border: `1px solid ${Colors.primary}`,
            clipPath: "polygon(0 0, 92% 0, 100% 16%, 100% 100%, 8% 100%, 0 84%)",
        }
    },

    ".newBlogContent__info": {
        display: "flex",
        gap: 2,

        ".newBlogContent__info__cattegory": {
            fontWeight: "bold",
            color: Colors.primary,
            cursor: "pointer",
        },

        ".newBlogContent__info__date": {
            fontWeight: "bold",
            color: Colors.white,
            cursor: "default",
        },
    },

    ".titleBlog": {
        fontWeight: "bold",
        textTransform: "uppercase",
        cursor: "pointer",
        color: Colors.white,
    },
}