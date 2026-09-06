import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../../layout/theme";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes";

export function RouterComponent(){
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={routes} />
        </ThemeProvider>
    )
}