import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes";

export function RouterComponent(){
    return(
        <RouterProvider router={routes} />
    )
}