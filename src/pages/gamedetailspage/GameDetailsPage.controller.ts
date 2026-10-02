import { IBannerItem } from "../../components/partials/deherobanner/DeHeroBanner.types";
import { GameSlug } from "../../components/routercomponent/Routes";
import { gamesContent } from "./GameDetailsPage.data";
import { IGamePreviewSlidesArea, IHistoryGame, IPersonsGame } from "./GameDetailsPage.types";


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

function fetchHistory(endpoint: GameSlug): IHistoryGame{
    const gameData = gamesContent[endpoint];

    if(!gameData){
        throw new Error(`Conteúdo do jogo "${endpoint}" não encontrado.`);
    }

    return gameData.historyGame;
}

function fetchGameShow(endpoint: GameSlug): IGamePreviewSlidesArea {
    const gameData = gamesContent[endpoint];

    if(!gameData){
        throw new Error(`Conteúdo do jogo "${endpoint}" não encontrado.`);
    }

    return gameData.gamePreviewSlides;
}

export default {
    fetchBanner,
    fetchPersons,
    fetchHistory,
    fetchGameShow,
}