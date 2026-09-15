import { Grid } from "@mui/material";
import DeHeroBanner from "../../components/partials/deherobanner/DeHeroBanner";
import DeGamesSection from "../../components/partials/degamesection/DeGameSection";
import AboutSection from "./components/aboutsection/AboutSection";
import DeNewsSection from "../../components/partials/denewssection/DeNewsSection";
import DeEventsSection from "../../components/partials/deeventssection/DeEventsSection";

export function HomePage() {


    return (
        <Grid component="main" container size={12}>
            <DeHeroBanner />
            <DeGamesSection />
            <AboutSection />
            <DeNewsSection />
            <DeEventsSection />
        </Grid>
    );
};