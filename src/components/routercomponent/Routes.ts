import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { SiteLayout } from "../../layout/site/Site";
import { HomePage } from "../../pages/homepage/HomePage";
import { GamesPage } from "../../pages/gamespage/GamesPage";
import { GameDetailsPage } from "../../pages/gamedetailspage/GameDetailsPage";
import { DeGuardianRouter } from "../partials/deguardianrouter/DeGuardianRouter";

export const routesMap = {
    home: "/",
    games: "/nossos-jogos",
    gameDetails: "/jogos/:gameId",
    about: "/sobre-nos",
    loja: "/loja",
    blog: "/blog",
}

export const validGames = [
    "aethercore",
    "lumina",
    "twilight-nexus",
    "wasteland-riders",
] as const;

export type GameSlug = typeof validGames[number];

export const routes = createBrowserRouter([
    {
        path: routesMap.home,
        element: React.createElement(SiteLayout),
        children: [
            {
                path: routesMap.home,
                element: React.createElement(HomePage),
            },
            {
                path: routesMap.games,
                element: React.createElement(GamesPage),
            },
            {
                path: routesMap.gameDetails,
                element: React.createElement(GameDetailsPage),
            },
            {
                path: "*",
                element: React.createElement(DeGuardianRouter),
            },
        ]
    },
])