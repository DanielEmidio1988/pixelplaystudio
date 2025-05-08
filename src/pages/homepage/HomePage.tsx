import { Grid } from "@mui/material";
import { SectionArea } from "./HomePage.style";
import { DeBlogHighlights } from "../../components/partials/debloghighlights/deBlogHighlights";
import { DeTitleSection } from "../../components/partials/detitlesection/deTitleSection";
import twiligthnexusposter from "../../assets/gallery/homepage/twilightnexus.png";
import aethercoreposter from "../../assets/gallery/homepage/aethercore.png";
import luminaposter from "../../assets/gallery/homepage/lumina.jpeg";

export function HomePage() {
    const gamesData = [
        {
            poster: twiligthnexusposter,
            title: "Twilight Nexus",
        },
        {
            poster: aethercoreposter,
            title: "Aethercore",
        },
        {
            poster: luminaposter,
            title: "Lumina",
        }
    ];

    return (
        <Grid container size={12}>
            <Grid
                container
                size={12}
                sx={SectionArea}
                justifyContent="center"
            >
                <Grid size={10}>
                    <DeTitleSection
                        label="Ultimas noticias"
                        size="small"
                    />
                    <DeBlogHighlights
                        range={4}
                    />
                </Grid>

            </Grid>
            <Grid
                container
                size={12}
                sx={SectionArea}
                justifyContent="center"
            >
                <Grid size={10}>
                    <DeTitleSection
                        label="Nossos jogos"
                        size="small"
                    />
                    <Grid
                        container
                        size={12}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "12px",
                            flexWrap: "wrap",
                        }}
                    >
                        {gamesData.map((game, index) => {
                            return (
                                <Grid
                                    key={index}
                                    sx={{
                                        height: "240px",
                                        width: "46%",
                                        backgroundImage: `url(${game.poster})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                />
                            )
                        })}
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
};