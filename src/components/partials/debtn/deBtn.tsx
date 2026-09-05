import {
    IDeBtnProps,
} from "./DeBtn.types";
import {
    baseButton,
    btnDefault,
    btnDark,
    btnLight,
    btnWhite
} from "./DeBtn.styles";
import { CSSProperties } from "react";
import { Button } from "@mui/material";

export function DeBtn(props: IDeBtnProps) {

    const variantBtn = {
        default: btnDefault,
        dark: btnDark,
        light: btnLight,
        white: btnWhite,
    }

    const styleBtn: CSSProperties = {
        ...baseButton,
    }

    return (
         <Button
            sx={styleBtn}
            action={props.action}
            variant={props.variant}
        >
            {props.label}
        </Button>
    )
}