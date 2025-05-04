import { Button } from "@mui/material";
import { IdeBtnProps } from "./deBtn.types";
import { deBtnStyle } from "./deBtn.styles";

export function DeBtn(props: IdeBtnProps){

    return (
        <Button
            className={`${
                props.variant ? String(props.variant) : "default"
            }
            ${
                props.size ? String(props.size) : "medium"
            }
            `
            }
            action={props.action}
            sx={deBtnStyle}
        >
            {props.label}
        </Button>
    )
}