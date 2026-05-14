import { Typography, Grid } from "@mui/material"
import { IDeTitleSectionProps } from "./DeTitleSection.types";
import { sTitleSection } from "./DeTitleSection.styles";

export function DeTitleSection(props: IDeTitleSectionProps) {
    const fontSize = {
        small: "2rem",
        medium: "2.5rem",
        large: "3rem",
    };

    return (
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
                className={props.variant ? props.variant : "default"}
                sx={{
                    ...sTitleSection,
                    fontSize: fontSize[props.size],
                }}
            >
                {props.label}
            </Typography>
        </Grid>
    )
}