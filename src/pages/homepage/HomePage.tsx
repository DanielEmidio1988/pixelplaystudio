import { Grid } from "@mui/material";
import { SectionArea } from "./HomePage.style";
import { DeBlogHighlights } from "../../components/partials/debloghighlights/deBlogHighlights";
import { DeTitleSection } from "../../components/partials/detitlesection/deTitleSection";
import twiligthnexusposter from "../../assets/gallery/homepage/twilightnexus.png";
import aethercoreposter from "../../assets/gallery/homepage/aethercore.png";
import luminaposter from "../../assets/gallery/homepage/lumina.jpeg";
import { sSectionYellow, SpacingSection } from "../../assets/styles/MainStyle";
import { DeCard } from "../../components/partials/decard/DeCard";

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
                
                justifyContent="center"
            >
                <Grid size={10} sx={{...sSectionYellow, padding: SpacingSection.innerSpaceMd}}>
                    <DeTitleSection
                        label="Nossos jogos"
                        size="small"
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
                        }}
                    >
                        <DeCard
                            items={gamesData}
                            size={3}
                            variant="model1"
                        />
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
};