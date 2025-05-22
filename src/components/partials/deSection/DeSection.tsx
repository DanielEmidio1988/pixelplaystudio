import { Grid } from "@mui/material";
import { IDeSection } from "./DeSection.types";
import { DeBtn } from "../debtn/deBtn";
import { useNavigate } from "react-router-dom";

export function DeSection(props: IDeSection) {
    const navigate = useNavigate();
    return (
        <Grid container size={12}>
            <Grid size={{ xs: 12, md: 6 }}>
                <Grid 
                    size={12} 
                    className="contentSection" 
                    dangerouslySetInnerHTML={{ __html: props.content}} 
                />
                {
                    props.showActionButton &&
                    props.labelActionButton &&
                    props.urlActionButton && (
                        <Grid container size={12}>
                            <DeBtn 
                                label={props.labelActionButton} 
                                action={() => navigate(props.urlActionButton!)}
                            />
                        </Grid>
                    )}
            </Grid>
            <Grid container size={{ xs: 12, md: 6 }}>
                    <Grid size={12} sx={{ backgroundImage: `url(${props.image})`}} />
            </Grid>
        </Grid>
    )
}