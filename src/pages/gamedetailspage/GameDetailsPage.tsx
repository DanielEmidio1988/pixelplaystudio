import { Grid } from "@mui/material";
import { useParams } from "react-router-dom"
import DeHeroBanner from "../../components/partials/deherobanner/DeHeroBanner";
import controller from "./GameDetailsPage.controller";
import { IBannerItem } from "../../components/partials/deherobanner/DeHeroBanner.types";
import { validGames, GameSlug } from "../../components/routercomponent/Routes";
import { PersonSection } from "./components/personsection/PersonSection";
import { IPersonsGame } from "./GameDetailsPage.types";

export function GameDetailsPage() {
    const { gameId } = useParams();
    const isValidGame = validGames.includes(gameId as GameSlug);

    if(!isValidGame){
        return "";
    }

    const banner: IBannerItem = controller.fetchBanner(gameId as GameSlug);
    const persons: IPersonsGame[] = controller.fetchPersons(gameId as GameSlug);

    return (
        <Grid component="main" container size={12}>
            <DeHeroBanner
                banners={[
                    banner
                ]}
            />
            <PersonSection
                title="Personagens"
                persons={persons}
            />
        </Grid>
    )
}