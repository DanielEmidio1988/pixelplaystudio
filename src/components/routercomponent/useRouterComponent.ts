import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { SiteLayout } from "../../layout/site/Site";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: React.createElement(SiteLayout)
    }
])