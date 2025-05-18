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

    "span": {
        position: "absolute",
        top: 10,
        left: 10,
        textTransform: "uppercase",
        fontWeight: "bold",
        backgroundColor: Colors.primary,
        padding: "2px 8px",
        display: "none"
        // clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
    },

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

    ".lastNewBlogContent__info":{
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
    },  
}