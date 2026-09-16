import { Grid } from "@mui/material";
import DeHeroBanner from "../../components/partials/deherobanner/DeHeroBanner";
import DeGamesSection from "../../components/partials/degamesection/DeGameSection";
import AboutSection from "./components/aboutsection/AboutSection";
import DeNewsSection from "../../components/partials/denewssection/DeNewsSection";
import DeEventsSection from "../../components/partials/deeventssection/DeEventsSection";
import { IBannerItem } from "../../components/partials/deherobanner/DeHeroBanner.types";

import heroBackground from "../../assets/gallery/homepage/herobannerhome_aethercore.png";

export function HomePage() {

    const banners: IBannerItem[] = [{
        img: heroBackground,
        eyebrow: "Live Event: Eclipse da Mente",
        title: "AETHERCORE",
        subtitle: "v1.8",
        description: "O Loop Zero começou! Enfrente simulações corrompidas por Host Zero/9. Skins e dados espectrais te esperam.",
        action: [
            {
                action: () => {},
                label: "Jogar Agora",
            },
            {
                action: () => {},
                label: "Ver Detalhes do Evento",
            }
        ],
    }];

    return (
        <Grid component="main" container size={12}>
            <DeHeroBanner 
                banners={banners}
            />
            <DeGamesSection />
            <AboutSection />
            <DeNewsSection />
            <DeEventsSection />
        </Grid>
    );
};