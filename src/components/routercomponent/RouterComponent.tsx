import { RouterProvider } from "react-router-dom";
import { routes } from "./useRouterComponent";

export function RouterComponent(){
    return(
        <RouterProvider router={routes} />
    )
}