import { IGameContent } from "./GameDetailsPage.types";
import banneraethercore from "../../assets/gallery/gameaethercore/banner.png";
import iconRankS from "../../assets/gallery/gamespage/aethercore/rarity_rank_s.png";
import iconRankA from "../../assets/gallery/gamespage/aethercore/rarity_rank_a.png";
import personNovaIMG from "../../assets/gallery/gamespage/aethercore/person_nova.png";
import personNovaAvatarIMG from "../../assets/gallery/gamespage/aethercore/person_nova_avatar.png";
import personLucyIMG from "../../assets/gallery/gamespage/aethercore/person_lucy.png";
import personLucyAvatarIMG from "../../assets/gallery/gamespage/aethercore/person_lucy_avatar.png";
import personAkiraIMG from "../../assets/gallery/gamespage/aethercore/person_akira.png";
import personAkiraAvatarIMG from "../../assets/gallery/gamespage/aethercore/person_akira_avatar.png";
import personAtlasIMG from "../../assets/gallery/gamespage/aethercore/person_atlas.png";
import personAtlasAvatarIMG from "../../assets/gallery/gamespage/aethercore/person_atlas_avatar.png";
import personCassiaIMG from "../../assets/gallery/gamespage/aethercore/person_cassia.png";
import personCassiaAvatarIMG from "../../assets/gallery/gamespage/aethercore/person_cassia_avatar.png";
import personRedHoodIMG from "../../assets/gallery/gamespage/aethercore/person_redhood.png";
import personRedHoodAvatarIMG from "../../assets/gallery/gamespage/aethercore/person_redhood_avatar.png";

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
               rarity: iconRankS,
               element: "Void",
               description: "Encontrada adormecida em uma cápsula sem memórias de seu passado, Nova desperta em um mundo dominado por máquinas. Uma misteriosa IA vive dentro dela, concedendo habilidades que ela ainda não compreende. Em busca de respostas, ela parte para descobrir quem era antes de despertar.", 
            },
            {
               image: personLucyIMG,
               avatar: personLucyAvatarIMG,
               name: "Lucy",
               class: "Anomaly",
               rarity: iconRankA,
               element: "Volt",
               description: "Uma engenheira e inventora brilhante, Lucy dedica seu talento à criação de máquinas e equipamentos avançados que ajudam os sobreviventes a enfrentar o mundo hostil de Aethercore. Fazendo parte de uma comunidade de engenheiros e sobreviventes, ela transforma recursos escassos e tecnologias esquecidas em ferramentas capazes de dar à humanidade uma nova chance.", 
            },
            {
               image: personAkiraIMG,
               avatar: personAkiraAvatarIMG,
               name: "Akira",
               class: "DPS",
               rarity: iconRankS,
               element: "Kinetic",
               description: "Akira é um dos membros dos Caçadores, um grupo dedicado a enfrentar as máquinas que dominam as ruínas de Aethercore. Após perder seu irmão mais novo, a quem havia jurado proteger, Akira passou a carregar um profundo ódio pelas máquinas. Guiado por esse juramento, ele segue um caminho de disciplina e vingança, determinado a destruir aqueles que tiraram seu irmão dele.", 
            },
            {
               image: personAtlasIMG,
               avatar: personAtlasAvatarIMG,
               name: "Atlas",
               class: "Sub-DPS",
               rarity: iconRankA,
               element: "Kinetic",
               description: "Atlas é uma das integrantes dos Coletores, um grupo de sobreviventes que percorre o deserto em busca das máquinas e tecnologias deixadas para trás pela antiga civilização. Impulsiva e de temperamento explosivo, ela costuma agir antes de pensar, mas seu coração está sempre ao lado daqueles que considera sua família. Com equipamentos construídos a partir da sucata que encontra, Atlas está disposta a enfrentar qualquer perigo para proteger os seus.", 
            },
            {
               image: personCassiaIMG,
               avatar: personCassiaAvatarIMG,
               name: "Cassia",
               class: "Defense",
               rarity: iconRankS,
               element: "Cryo",
               description: "Especialista em armamentos pesados e combate de alta intensidade, Cassia é uma mulher centrada, determinada e difícil de abalar. Guiada por um juramento que escolheu carregar, ela luta para proteger aqueles que ainda precisam de esperança em um mundo dominado pelas máquinas. Para Cassia, a guerra só termina quando a humanidade puder lutar por seu próprio futuro.", 
            },
            {
               image: personRedHoodIMG,
               avatar: personRedHoodAvatarIMG,
               name: "Red Hood",
               class: "Support",
               rarity: iconRankS,
               element: "Thermal",
               description: "Gentil e curiosa, Red Hood cresceu imaginando como era o mundo antes da dominação das máquinas. Fascinada pelas histórias do passado, ela guarda como seu maior tesouro um antigo livro de contos de fadas — a última lembrança que possui de sua mãe. Em um mundo onde quase todas as memórias da humanidade foram perdidas, Red Hood se recusa a deixar essas histórias desaparecerem.", 
            },
        ]
    }
}

