import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { colors } from "../theme";

export function SiteLayout() {
    return (
        <Grid container size={12}>
            <Grid 
                size={12} 
                sx={{ margin: 0, padding: 0, backgroundColor: colors.black }}
            >
                <Header/>
                <Outlet />
                <Footer />
            </Grid>
        </Grid>

    )
}