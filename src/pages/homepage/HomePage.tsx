import { Grid } from "@mui/material";
import DeHeroBanner from "../../components/partials/deherobanner/DeHeroBanner";
import DeGamesSection from "../../components/partials/degamesection/DeGameSection";

export function HomePage() {


    return (
        <Grid component="main" container size={12}>
            <DeHeroBanner />
            <DeGamesSection />

        </Grid>
    );
};