import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { SiteLayout } from "../../layout/site/Site";
import { HomePage } from "../../pages/homepage/HomePage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: React.createElement(SiteLayout),
        children: [
            {
                path: "/",
                element: React.createElement(HomePage),
            }
        ]
    }
])