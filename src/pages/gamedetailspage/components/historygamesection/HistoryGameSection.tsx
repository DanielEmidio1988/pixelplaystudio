import { Box, Grid, Typography, IconButton, Card, CardMedia, SxProps } from "@mui/material";
import { IHistoryGameProps } from "./HistoryGameSection.types";
import { useState } from "react";
import { IHistoryGame, IImgAndLabelSection } from "../../GameDetailsPage.types";
import DeSectionTitle from "../../../../components/partials/desectiontitle/DeSectionTitle";
import { colors } from "../../../../layout/theme";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Theme } from "@mui/material/styles";

export function HistoryGameSection(props: IHistoryGameProps) {
    const [historySelected, setHistorySelected] = useState<IImgAndLabelSection>(props.history.sections[0]);
    const [pageHistory, setPageHistory] = useState<number>(0);
    const styleArrow: SxProps<Theme> = {
        color: colors.black,
        border: `1px solid ${colors.black}`,
        backgroundColor: colors.white,
        width: "40px",
        height: "40px"
    }

    function handleHistory(direction: number) {
        const sections = props.history.sections;
        const totalSections = sections.length;

        let nextIndex = pageHistory + direction;

        if (nextIndex < 0) {
            nextIndex = totalSections - 1;
        } else if (nextIndex >= totalSections) {
            nextIndex = 0;
        }

        setPageHistory(nextIndex);
        setHistorySelected(sections[nextIndex]);
    }

    return (
        <Grid
            container
            size={12}
            sx={{
                height: "100vh",
                position: "relative",
            }}
        >
            <Box
                component="img"
                src={historySelected.img}
                alt=""
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    opacity: 0.2,
                    zIndex: 0,
                }}
            />
            <Grid
                size={12}
                sx={{
                    height: "40%",
                    display: "flex",
                    alignItems: "center",
                    zIndex: 1,
                }}
            >
                <Grid
                    size={{
                        xs: 12, md: 4
                    }}
                    sx={{
                        padding: { xs: "0 2vw", md: "0 0 0 2vw" }
                    }}
                >
                    <Typography
                        component="h3"
                        sx={{
                            textTransform: "uppercase",
                            color: colors.primary,
                        }}
                    >
                        {props.gameName.replace("-", "")}
                    </Typography>
                    <DeSectionTitle
                        label={props.history.title}
                        accent={props.history.titleAccent}
                    />
                </Grid>
            </Grid>
            <Grid
                size={12}
                sx={{
                    height: "60%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    zIndex: 1,
                    padding: { xs: "0 2vw", md: "0 2vw 0 0" }
                }}
            >
                <Grid
                    size={{
                        xs: 12,
                        md: 4,
                    }}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            padding: "12px 16px",
                            position: "relative",
                        }}
                    >
                        <Box
                            component="img"
                            src={historySelected.img}
                            alt="Card-historia"
                            sx={{
                                borderRadius: "4px",
                                width: "100%",
                                height: "160px",
                                objectFit: "cover",
                                marginBottom: "12px",
                            }}
                        />
                        <Typography
                            component="p"
                            variant="body2"
                        >
                            {historySelected.description}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100px",
                                borderRadius: "24px",
                                backgroundColor: colors.surface,
                                marginTop: "12px",
                            }}
                        >
                            <IconButton
                                onClick={() => handleHistory(-1)}
                                sx={styleArrow}
                                aria-label="Anterior"
                            >
                                <KeyboardArrowLeftIcon />
                            </IconButton>
                            <IconButton
                                onClick={() => handleHistory(1)}
                                sx={styleArrow}
                                aria-label="Próximo"
                            >
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}