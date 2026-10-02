import { IBannerItem } from "../../components/partials/deherobanner/DeHeroBanner.types";

export interface IGameContent {
    heroBanner: IBannerItem,
    gamePreviewSlides: IGamePreviewSlidesArea,
    historyGame: IHistoryGame,
    persons?: IPersonsGame[],
}

export interface IHistoryGame {
    title: string,
    titleAccent?: string,
    subtitle: string,
    sections: IImgAndLabelSection[],
}

export interface IImgAndLabelSection {
    description: string,
    img: string,
}

export interface IGameShowSlide extends IImgAndLabelSection {
    title: string,
}

export interface IGamePreviewSlidesArea{
    title: string;
    titleAccent: string;
    titleDescription?: string;
    slides: IGameShowSlide[];
}

export interface IPersonsGame {
    /**
     * imagem de apresentação do personagem
     */
    image: string,
    /**
     * imagem de avatar selecionavel
     */
    avatar: string,
    /**
     * nome do personagem
     */
    name: string,
    /**
     * classe do personagem (ex: guerreiro, atirador, etc..)
     */
    class: string,
    /**
     * raridade do personagem no jogo (Ex: Rank S, 5 estrelas, etc...). Tipo imagem
     */
    rarity: string,
    /**
     * atributo principal do personagem (Ex: fogo, gelo, etc...)
     */
    element: string,
    /**
     * Breve descrição de introdução do personagem
     */
    description: string,
}