import { Grid } from "@mui/material";
import { SectionArea } from "./HomePage.style";
import { DeBlogHighlights } from "../../components/partials/debloghighlights/deBlogHighlights";

export function HomePage() {
    return (
        <Grid container size={12}>
            <Grid container size={12} sx={SectionArea} justifyContent="center">
                <Grid size={10}>
                    <DeBlogHighlights
                        title="Ultimas noticias"
                        range={4}
                    />
                </Grid>

            </Grid>
        </Grid>
    );
};