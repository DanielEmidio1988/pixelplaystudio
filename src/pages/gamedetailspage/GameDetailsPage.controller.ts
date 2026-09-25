import { IBannerItem } from "../../components/partials/deherobanner/DeHeroBanner.types";
import { GameSlug } from "../../components/routercomponent/Routes";
import { gamesContent } from "./GameDetailsPage.data";
import { IPersonsGame } from "./GameDetailsPage.types";


function fetchBanner(endpoint: GameSlug): IBannerItem{
    const gameData = gamesContent[endpoint];

    if(!gameData){
        throw new Error(`Conteúdo do jogo "${endpoint}" não encontrado.`);
    }

    return gameData.heroBanner;
}

function fetchPersons(endpoint: GameSlug): IPersonsGame[]{
    const gameData = gamesContent[endpoint];

    if(!gameData){
        throw new Error(`Conteúdo do jogo "${endpoint}" não encontrado.`);
    }

    return gameData.persons || [];
}

export default {
    fetchBanner,
    fetchPersons,
}