import { IGameContent } from "./GameDetailsPage.types";
import banneraethercore from "../../assets/gallery/gameaethercore/banner.png";

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
        }
    }
}
