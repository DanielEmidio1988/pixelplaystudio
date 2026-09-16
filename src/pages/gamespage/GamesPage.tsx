import { Grid } from "@mui/material";
import DeHeroBanner from "../../components/partials/deherobanner/DeHeroBanner";
import { IBannerItem } from "../../components/partials/deherobanner/DeHeroBanner.types";
import heroBackground from "../../assets/gallery/gamespage/banner.png"

export function GamesPage() {

    const banners: IBannerItem[] = [{
        img: heroBackground,
        eyebrow: "Catálogo de Jogos",
        title: "Nossos jogos",
        description: "Conheça os mundos que criamos",
    }];

    return (
        <Grid component="main" container size={12}>
            <DeHeroBanner
                banners={banners}
            />
        </Grid>
    )
}