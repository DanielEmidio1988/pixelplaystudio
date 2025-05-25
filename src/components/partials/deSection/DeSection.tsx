import { Grid } from "@mui/material";
import { IDeSection } from "./DeSection.types";
import { DeBtn } from "../debtn/deBtn";
import { useNavigate } from "react-router-dom";
import { sDeSection } from "./DeSection.styles";

export function DeSection(props: IDeSection) {
    const navigate = useNavigate();
    return (
        <Grid 
            container 
            size={12} 
            spacing={2}
            sx={sDeSection}
        >
            <Grid 
                className="contentArea" 
                size={{ xs: 12, md: 6 }} 
            >
                <Grid 
                    size={12} 
                    className="contentArea__content" 
                    dangerouslySetInnerHTML={{ __html: props.content}} 
                />
                {
                    props.showActionButton &&
                    props.labelActionButton &&
                    props.urlActionButton && (
                        <Grid 
                            container
                            className="contentSection__actionArea" 
                            size={12}
                        >
                            <DeBtn 
                                label={props.labelActionButton} 
                                action={() => navigate(props.urlActionButton!)}
                            />
                        </Grid>
                    )}
            </Grid>
            <Grid 
                container 
                className="imageArea"
                size={{ xs: 12, md: 6 }}
            >
                    <Grid 
                        size={12} 
                        className="imageArea__img"
                        sx={{ 
                            backgroundImage: `url(${props.image})`
                        }} 
                    />
            </Grid>
        </Grid>
    )
}