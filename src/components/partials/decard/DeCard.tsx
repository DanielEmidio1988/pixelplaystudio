import { IDeCardProps } from "./DeCard.types";
import { Grid, Typography } from "@mui/material";
import { sContainerTypoCard, StyledCard } from "./DeCard.styles";
import { Colors } from "../../../assets/styles/MainStyle";

export function DeCard(props: IDeCardProps) {

    return (
        <Grid
            size={12}
            container
            justifyContent="center"
            wrap="wrap"
        >
            {props.items && props.items.map((item, index) => {
                return (
                    <StyledCard
                        key={index}
                        size={props.size}
                        className={props.variant ? `card${props.variant}` : "carddefault"}
                        bgImage={item.image}
                    >
                        <Grid
                            sx={sContainerTypoCard}
                        >
                            <Typography
                                // variant="h6"
                                component="span"
                                fontWeight="bold"
                                color={Colors.terciary}
                            >
                                {item.label}
                            </Typography>
                        </Grid>
                    </StyledCard>
                )
            })}

        </Grid>
    )
}