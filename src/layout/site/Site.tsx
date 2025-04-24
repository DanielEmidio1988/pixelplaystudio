import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header";

export function SiteLayout() {
    return (
        <Grid container>
            <Grid size={12} sx={{ margin: 0, padding: 0 }}>
                <Header/>
                <Outlet />
            </Grid>
        </Grid>

    )
}