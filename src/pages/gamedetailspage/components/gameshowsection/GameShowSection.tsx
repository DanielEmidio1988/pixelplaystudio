import { Box, Grid, Card, CardMedia, Typography } from "@mui/material";
import { IGameShowSectionProps } from "./GameShowSection.types";
import DeSectionTitle from "../../../../components/partials/desectiontitle/DeSectionTitle";
import { colors } from "../../../../layout/theme";

export function GameShowSection(props: IGameShowSectionProps) {
    return (
        <Grid
            container
            size={12}
            sx={{
                padding: "4vh 0"
            }}
        >
            <Grid 
                size={12} 
                sx={{ 
                    display: "flex", 
                    justifyContent: "center",
                    marginTop: "8vh",
                }}
            >
                <DeSectionTitle
                    label={props.gameshow.title}
                    accent={props.gameshow.titleAccent}
                    {...props.gameshow.titleDescription ? ({ description: props.gameshow.titleDescription }) : ""}
                />

            </Grid>
            <Grid
                size={12}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "8vh",
                    gap: 8,
                }}
            >
                {props.gameshow.slides.map((slide, index) => {
                    return (
                        <Box
                            sx={{
                                width: "46%",
                                minWidth: "300px",
                                backgroundColor: colors.glowPrimary,
                                borderRadius: "32px",
                            }}
                            key={index}
                        >
                            <Card
                                sx={{
                                    position: "relative",
                                    height: 420,
                                    overflow: "hidden",
                                    borderColor: colors.borderStrong,
                                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={slide.img}
                                    alt="card-game"
                                    sx={{
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </Card>
                            <Box
                                sx={{
                                    padding: "12px 24px",
                                }}
                            >
                                <Typography
                                    component="h4"
                                    variant="h4"
                                    fontWeight="bold"
                                    marginBottom={1}
                                >
                                    {slide.title}
                                </Typography>
                                <Typography
                                    component="p"
                                    variant="body2"
                                >
                                    "{slide.description}"
                                </Typography>
                            </Box>
                        </Box>
                    )
                })}

            </Grid>
        </Grid>
    )
}