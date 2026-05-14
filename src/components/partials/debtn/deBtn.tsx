import { Button } from "@mui/material";
import { IdeBtnProps } from "./DeBtn.types";
import { deBtnStyle } from "./DeBtn.styles";

export function DeBtn(props: IdeBtnProps) {

    return (
        <>
            <Button
                className={`${props.variant ? String(props.variant) : "default"
                    }
            ${props.size ? String(props.size) : "medium"
                    }
            `
                }
                action={props.action}
                sx={deBtnStyle}
            >
                {props.label}
            </Button>
            <button
                className=""
                onClick={props.action}
            >
                {props.label}
            </button>
        </>
    )
}