import { SxProps, Theme } from "@mui/material/styles";

export const LastNewBlog: SxProps<Theme> = {
    height: "60%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    alignItems: "center",
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