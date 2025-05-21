import { Grid, styled, SxProps, Theme } from "@mui/material";
import { Colors } from "../../../assets/styles/MainStyle";

export const StyledCard = styled(Grid, {
    shouldForwardProp: (prop) => prop !== "bgImage"
})<{ bgImage: string }>(({ bgImage }) => ({
    position: "relative",
    zIndex: 0,
    height: "400px",
    display: "block",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",

    "&.cardmodel1": {
        "&::after": {
            content: '""',
            position: "absolute",
            zIndex: -1,
            left: 10,
            top: 14,
            width: "96%",
            height: "96%",
            clipPath: "polygon(24% 0%, 100% 0%, 76% 100%, 0% 100%)",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "grayscale(100%)",
            transition: "all 0.3s ease-in-out",
        },

        "&:hover::after": {
            left: 0,
            top: 0,
            filter: "none",
        },

        "&::before": {
            content: '""',
            position: "absolute",
            zIndex: -2,
            bottom: 0,
            right: 0,
            width: "96%",
            height: "96%",
            clipPath: "polygon(24% 0%, 100% 0%, 76% 100%, 0% 100%)",
            backgroundColor: Colors.secondary,
        },

        "&:hover .cardLabel": {
            display: "none",
        },
    },

    "&.cardmodel2": {
        height: "60vh",
        "&::after": {
            content: '""',
            position: "absolute",
            zIndex: -1,
            left: "2%",
            top: "2%",
            width: "96%",
            height: "96%",
            clipPath: "polygon(0 0, 96% 0, 100% 10%, 100% 100%, 4% 100%, 0 90%)",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // filter: "grayscale(100%)",
            transition: "all 0.3s ease-in-out",
        },

        "&:hover::after": {
            left: 0,
            top: 0,
            // filter: "none",
        },

        "&::before": {
            content: '""',
            position: "absolute",
            zIndex: -2,
            bottom: 0,
            right: 0,
            width: "98%",
            height: "98%",
            clipPath: "polygon(0 0, 96% 0, 100% 10%, 100% 100%, 4% 100%, 0 90%)",
            backgroundColor: Colors.secondary,
        },

        "&:hover .cardLabel": {
            display: "none",
        },
    },
}));

export const sContainerTypoCard: SxProps<Theme> = {
    padding: "4px 8px",
    maxWidth: "60%",
    textAlign: "center",
    textTransform: "uppercase",
    clipPath: "polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)",
    backgroundColor: Colors.primary,
    borderBottom: `4px solid ${Colors.secondary}`,
    position: "absolute",
    bottom: 20,
    right: 80,
}