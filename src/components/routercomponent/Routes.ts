import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { SiteLayout } from "../../layout/site/Site";
import { HomePage } from "../../pages/homepage/HomePage";
import { GamesPage } from "../../pages/gamespage/GamesPage";
import { DeGuardianRouter } from "../partials/deguardianrouter/DeGuardianRouter";

export const routesMap = {
    home: "/",
    games: "/nossos-jogos",
    about: "/sobre-nos",
    loja: "/loja",
    blog: "/blog",
}

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
                path: "*",
                element: React.createElement(DeGuardianRouter),
            },
        ]
    },
])