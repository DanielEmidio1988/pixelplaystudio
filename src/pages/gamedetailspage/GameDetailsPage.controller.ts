import { IBannerItem } from "../../components/partials/deherobanner/DeHeroBanner.types";
import { GameSlug } from "../../components/routercomponent/Routes";
import { gamesContent } from "./FameDetailsPage.data";


function fetchBanner(endpoint: GameSlug): IBannerItem{
    const gameData = gamesContent[endpoint];

    if(!gameData){
        throw new Error(`Conteúdo do jogo "${endpoint}" não encontrado.`);
    }

    return gameData.heroBanner;
}

export default {
    fetchBanner,
}