import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Colors } from "../../assets/styles/MainStyle";

export function SiteLayout() {
    return (
        <Grid container>
            <Grid size={12} sx={{ margin: 0, padding: 0, backgroundColor: Colors.black }}>
                <Header/>
                <Outlet />
                <Footer />
            </Grid>
        </Grid>

    )
}