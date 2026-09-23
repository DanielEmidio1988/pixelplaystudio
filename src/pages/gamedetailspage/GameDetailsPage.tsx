import { Grid } from "@mui/material";
import { useParams } from "react-router-dom"
import DeHeroBanner from "../../components/partials/deherobanner/DeHeroBanner";
import controller from "./GameDetailsPage.controller";
import { IBannerItem } from "../../components/partials/deherobanner/DeHeroBanner.types";
import { validGames, GameSlug } from "../../components/routercomponent/Routes";

export function GameDetailsPage() {
    const { gameId } = useParams();
    const isValidGame = validGames.includes(gameId as GameSlug);

    if(!isValidGame){
        return "";
    }

    const banner: IBannerItem = controller.fetchBanner(gameId as GameSlug);

    return (
        <Grid component="main" container size={12}>
            <DeHeroBanner
                banners={[
                    banner
                ]}
            />
 
        </Grid>
    )
}