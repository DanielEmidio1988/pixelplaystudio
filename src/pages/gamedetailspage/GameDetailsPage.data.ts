import { IGameContent } from "./GameDetailsPage.types";
import banneraethercore from "../../assets/gallery/gameaethercore/banner.png";
import personNovaIMG from "../../assets/gallery/gamespage/aethercore/person_nova.png";
import personNovaAvatarIMG from "../../assets/gallery/gamespage/aethercore/person_nova_avatar.png";

export const gamesContent: Record<string, IGameContent> = {
    aethercore: {
        heroBanner: {
            img: banneraethercore,
            eyebrow: "RPG DE TURNO",
            title: "Aethercore",
            description: "O mundo não terminou quando as máquinas despertaram. Terminou quando elas decidiram que a humanidade não fazia mais parte dele.",
            colorAction: "...",
            action: [
                {
                    label: "Jogue agora",
                    action: () => {}
                }
            ]
        },
        gamePreviewSlides: [],
        historyGame: {
            title: "",
            titleAccent: "",
            subtitle: "",
            sections: [],
        },
        persons: [
            {
               image: personNovaIMG,
               avatar: personNovaAvatarIMG,
               name: "Nova",
               class: "DPS",
               rarity: "",
               element: "",
               description: "", 
            }
        ]
    }
}

// export interface IPersonsGame {
//     /**
//      * imagem de apresentação do personagem
//      */
//     image: string,
//     /**
//      * imagem de avatar selecionavel
//      */
//     avatar: string,
//     /**
//      * nome do personagem
//      */
//     name: string,
//     /**
//      * classe do personagem (ex: guerreiro, atirador, etc..)
//      */
//     class: string,
//     /**
//      * raridade do personagem no jogo (Ex: Rank S, 5 estrelas, etc...). Tipo imagem
//      */
//     rarity: string,
//     /**
//      * atributo principal do personagem (Ex: fogo, gelo, etc...)
//      */
//     element: string,
//     /**
//      * Breve descrição de introdução do personagem
//      */
//     description: string,
// }
