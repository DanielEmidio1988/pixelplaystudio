import { Box, Grid, Typography } from "@mui/material";
import { error404img } from "../../../layout/theme/images";
import { colors } from "../../../layout/theme";
import { useNavigate } from "react-router-dom";
import { routesMap } from "../../routercomponent/Routes";
import { DeBtn } from "../debtn/DeBtn";

export function DeGuardianRouter() {

    const navigation = useNavigate();

    return (
        <Grid
            container
            size={12}
            component="section"
            sx={{
                width: "100%",
                height: "100vh",
                position: "relative",
                alignItems: "center"
            }}
        >
            <Box
                component="img"
                src={error404img}
                alt="erro-404"
                width="100%"
                sx={{
                    position: "absolute",
                    zIndex: 0,
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    opacity: 0.7
                }}
            />
            <Grid
                size={{
                    xs: 12,
                    md: 4
                }}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    zIndex: 1,
                    padding: 4,
                    backgroundColor: colors.white,
                    borderRadius: 2
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: colors.black,
                        textShadow: `0 0 20px ${colors.white}cc`,
                        textAlign: "center",
                        cursor: "default",
                    }}
                >
                    Oops...
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        color: colors.black,
                        textShadow: `0 0 20px ${colors.white}cc`,
                        textAlign: "center",
                        fontSize: "6rem",
                        cursor: "default",
                    }}
                >
                    404
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        color: colors.black,
                        textShadow: `0 0 20px ${colors.white}cc`,
                        textAlign: "center",
                        cursor: "default",
                        marginBottom: 2
                    }}
                >
                    Página não encontrada
                </Typography>
                <DeBtn
                    label="Home"
                    variant="contained"
                    layoutBtn="dark"
                    size="small"
                    action={() => navigation(routesMap.home)}
                />
            </Grid>
        </Grid>
    )
}