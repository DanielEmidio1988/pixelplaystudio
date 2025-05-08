import { Typography, Grid } from "@mui/material"
import { IDeTitleSectionProps } from "./deTitleSection.types";
import { Colors } from "../../../assets/styles/MainStyle";

export function DeTitleSection(props: IDeTitleSectionProps){
    const fontSize = {
        small: "2rem",
        medium: "2.5rem",
        large: "3rem",
    };

    return(
        <Grid
            container
            size={12}
            sx={{
                justifyContent: "center",
                padding: "20px 0"
            }}
        >
            <Typography 
                variant="h2" 
                fontWeight="bold" 
                sx={{
                    fontSize: fontSize[props.size], 
                    color: Colors.basecolor, 
                    textTransform: "uppercase"
                }}
            >
                {props.label}
            </Typography>
        </Grid>
    )
}