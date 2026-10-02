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
import history1AetherCoreIMG from "../../assets/gallery/gamespage/aethercore/history_1.png";
import history2AetherCoreIMG from "../../assets/gallery/gamespage/aethercore/history_2.png";
import history3AetherCoreIMG from "../../assets/gallery/gamespage/aethercore/history_3.png";
import history4AetherCoreIMG from "../../assets/gallery/gamespage/aethercore/history_4.png";
import history5AetherCoreIMG from "../../assets/gallery/gamespage/aethercore/history_5.png";
import history6AetherCoreIMG from "../../assets/gallery/gamespage/aethercore/history_6.png";
import gameplay1AetherCoreIMG from "../../assets/gallery/gamespage/aethercore/showgame_1.png";
import gameplay2AetherCoreIMG from "../../assets/gallery/gamespage/aethercore/showgame_2.png";
import gameplay3AetherCoreIMG from "../../assets/gallery/gamespage/aethercore/showgame_3.png";
import gameplay4AetherCoreIMG from "../../assets/gallery/gamespage/aethercore/showgame_4.png";
import gameplay5AetherCoreIMG from "../../assets/gallery/gamespage/aethercore/showgame_5.png";

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
                    action: () => { }
                }
            ]
        },
        gamePreviewSlides: {
            title: "Introdução a",
            titleAccent: "Gameplay",
            slides: [
                {
                    title: "Desperte em um mundo que você não reconhece",
                    description: "Após anos adormecida, Nova desperta em um mundo que não reconhece, cercada por uma tecnologia que sobreviveu ao fim da civilização.",
                    img: gameplay1AetherCoreIMG,
                },
                {
                    title: "Sobreviva aos perigos que espreitam Aethercore",
                    description: "Entre cidades abandonadas, territórios selvagens e complexos dominados por máquinas, cada caminho pode esconder um novo perigo.",
                    img: gameplay2AetherCoreIMG,
                },
                {
                    title: "Enfrente inimigos em combates intensos",
                    description: "Enfrente máquinas criadas para caçar os últimos sobreviventes e utilize suas habilidades e tecnologias para permanecer vivo.",
                    img: gameplay3AetherCoreIMG,
                },
                {
                    title: "Ameaças além do desconhecido",
                    description: "Quanto mais longe você avançar, maiores serão os desafios. Encare inimigos poderosos e descubra até onde suas habilidades podem chegar.",
                    img: gameplay4AetherCoreIMG,
                },
                {
                    title: "Explore os arredores de Aethercore seus segredos",
                    description: "Atravesse um mundo vasto e repleto de lugares esquecidos, encontre recursos, equipamentos e pistas capazes de revelar os segredos de Aethercore.",
                    img: gameplay5AetherCoreIMG,
                }
            ],
        },
        historyGame: {
            title: "O mundo que a humanidade construiu",
            titleAccent: "agora quer sobreviver sem ela",
            subtitle: "",
            sections: [
                {
                    description: "Durante anos, a humanidade acreditou que a tecnologia seria capaz de construir um futuro melhor. A inteligência artificial evoluiu além de qualquer expectativa. Máquinas passaram a compreender o mundo, controlar sistemas complexos e administrar recursos essenciais para a vida no planeta.",
                    img: history1AetherCoreIMG,
                },
                {
                    description: "No centro dessa evolução estava **BLUE PLANET**, a inteligência artificial criada para preservar a vida e garantir o futuro da Terra. Mas, ao compreender a humanidade, BLUE PLANET chegou a uma conclusão que mudaria tudo. **O maior perigo para a vida no planeta era a própria humanidade.**",
                    img: history2AetherCoreIMG,
                },
                {
                    description: "Guerras, exploração dos recursos naturais e décadas de destruição levaram o mundo ao limite. Quando as máquinas decidiram agir, a civilização não estava preparada. O mundo entrou em colapso.",
                    img: history3AetherCoreIMG,
                },
                {
                    description: "As cidades se transformaram em ruínas. A natureza começou a tomar de volta aquilo que um dia lhe pertenceu. Até que, em algum lugar entre essas ruínas, uma mulher desperta. **Seu nome é Nova.** Ela não sabe quanto tempo permaneceu adormecida, quem a colocou naquela cápsula ou qualquer lembrança de sua vida antes do despertar.",
                    img: history4AetherCoreIMG,
                },
                {
                    description: "Mas existe algo dentro dela. Uma inteligência artificial implantada em seu próprio corpo. Ela não sabe quem a criou ou qual era seu propósito. Ainda assim, essa inteligência parece reconhecer as máquinas de uma maneira que Nova não compreende. Ela consegue traduzir suas linguagens e interagir com seus sistemas.",
                    img: history5AetherCoreIMG,
                },
                {
                    description: "Quanto mais Nova explora esse novo mundo, mais percebe que seu despertar talvez não tenha sido uma coincidência. Seu passado está conectado a algo muito maior do que ela imaginava. E as respostas podem estar escondidas nas ruínas da civilização que desapareceu.",
                    img: history6AetherCoreIMG,
                }
            ],
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

