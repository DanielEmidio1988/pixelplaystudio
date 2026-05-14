import { Button } from "@mui/material";
import { IdeBtnProps } from "./DeBtn.types";
import { deBtnStyle, baseButton, btnDefault } from "./DeBtn.styles";
import { CSSProperties } from "react";

export function DeBtn(props: IdeBtnProps) {

    const styleBtn: CSSProperties = {
        ...baseButton, 
        ...btnDefault
    }

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
                style={styleBtn}
            >
                {props.label}
            </button>
        </>
    )
}