import { Button } from "@mui/material";
import { IDeBtnProps } from "./DeBtn.types";
import services from "./DeBtn.services";
import { colors } from "../../../layout/theme";

export function DeBtn(props: IDeBtnProps) {

    const isUnderline =
        props.variant === "text" &&
        props.underline && {
            textDecoration: "underline",
            textDecorationColor: props.layoutBtn === "light" ? colors.secondary : colors.primary,
            textDecorationThickness: "2px",
            textUnderlineOffset: "4px",
            color: colors.white,
        };

    return (
        <Button
            variant={props.variant}
            size={props.size}
            onClick={props.action}
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            sx={{
                ...services.getLayoutBtn(
                    props.variant,
                    props.layoutBtn,
                    props.reverse,
                ),

                ...isUnderline,

                textTransform: props.uppercase
                    ? "uppercase"
                    : "none",
            }}
        >
            {props.label}
        </Button>
    );
}