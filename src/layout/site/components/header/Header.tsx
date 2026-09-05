import { useNavigate } from "react-router-dom";
import { DeBtn } from "../../../../components/partials/debtn/DeBtn";
import { IMenuItem } from "./Header.types";
import { Grid } from "@mui/material";

const menuItem: IMenuItem[] = [
    {
        label: "Sobre",
        link: "/",
    },
    {
        label: "Jogos",
        link: "/",
    },
    {
        label: "Eventos",
        link: "/",
    },
    {
        label: "Loja",
        link: "/",
    },
    {
        label: "Blog",
        link: "/",
    }
] 

export function Header() {

    const navigation = useNavigate();

    return (
        <Grid 
            component="header"
            className=""
        >
            <Grid 
                className=""
                data-name="HeaderLink"
            >
                {menuItem && menuItem.map((menu) => {
                    return (
                        <DeBtn 
                            label={menu.label}
                            action={() => navigation(menu.link)}
                            variant="text"
                            layoutBtn="white"
                        />
                    )
                })}
            </Grid>
        </Grid>
    );
}