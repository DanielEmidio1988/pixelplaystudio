import { Grid, styled, SxProps, Theme } from "@mui/material";
import { Colors } from "../../../assets/styles/MainStyle";

export const StyledCard = styled(Grid, {
    shouldForwardProp: (prop) => prop !== "bgImage"
})<{ bgImage: string }>(({ bgImage }) => ({
    position: "relative",
    zIndex: 0,
    height: "400px",

    "&::after": {
        content: '""',
        position: "absolute",
        zIndex: -1,
        left: 0,
        top: 0,
        width: "96%",
        height: "96%",
        clipPath: "polygon(24% 0%, 100% 0%, 76% 100%, 0% 100%)",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "grayscale(100%)",
    },

    "&::before": {
        content: '""',
        position: "absolute",
        zIndex: -2,
        bottom: 0,
        right: 0,
        width: "98%",
        height: "98%",
        clipPath: "polygon(24% 0%, 100% 0%, 76% 100%, 0% 100%)",
        backgroundColor: Colors.secondary,
    }
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