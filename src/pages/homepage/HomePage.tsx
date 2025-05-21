import { Grid } from "@mui/material";
import { SectionArea } from "./HomePage.style";
import { DeBlogHighlights } from "../../components/partials/debloghighlights/deBlogHighlights";
import { DeTitleSection } from "../../components/partials/detitlesection/deTitleSection";
import twiligthnexusposter from "../../assets/gallery/homepage/twilightnexus.png";
import aethercoreposter from "../../assets/gallery/homepage/aethercore.png";
import luminaposter from "../../assets/gallery/homepage/lumina.jpeg";
import wastelandriders from "../../assets/gallery/homepage/wastelandriders.png";
import bannereventphantom from "../../assets/gallery/homepage/ligaphantombanner.png";
import { sSectionYellow, SpacingSection } from "../../assets/styles/MainStyle";
import { DeCard } from "../../components/partials/decard/DeCard";
import { DeBtn } from "../../components/partials/debtn/deBtn";

export function HomePage() {
    const gamesData = [
        {
            image: twiligthnexusposter,
            label: "Twilight Nexus",
        },
        {
            image: aethercoreposter,
            label: "Aethercore",
        },
        {
            image: luminaposter,
            label: "Lumina",
        },
        {
            image: wastelandriders,
            label: "Wasteland Riders",
        },
    ];

    const eventsBanners = [
        {
            image: bannereventphantom,
        }
    ]

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
                        size="medium"
                    />
                    <DeBlogHighlights
                        range={4}
                    />
                </Grid>

            </Grid>
            <Grid
                container
                size={12}
                marginTop={4}
                marginBottom={4}
                justifyContent="center"
            >
                <Grid size={10} sx={{ ...sSectionYellow, padding: SpacingSection.innerSpaceMd }}>
                    <DeTitleSection
                        label="Nossos jogos"
                        size="medium"
                        variant="reverse"
                    />
                    <Grid
                        container
                        size={12}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "12px",
                            flexWrap: "wrap",
                            padding: "0 20px",
                        }}
                    >
                        <DeCard
                            items={gamesData}
                            size={3}
                            variant="model1"
                        />
                        <DeBtn
                            label="Veja mais"
                            variant="reverse"
                            action={() => { }}
                        />
                    </Grid>
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
                        label="Eventos"
                        size="medium"
                    />
                    <Grid
                        container
                        size={12}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "12px",
                            padding: "0 20px",
                        }}
                    >
                        <DeCard
                            items={eventsBanners}
                            size={8}
                            variant="model2"
                        />
                        <DeBtn
                            label="Veja mais"
                            action={() => { }}
                        />
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
};