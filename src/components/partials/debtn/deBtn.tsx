import { IDeBtnProps } from "./DeBtn.types";
import { Button } from "@mui/material";
import services from "./DeBtn.services";

export function DeBtn(props: IDeBtnProps) {

    return (
        <Button
            variant={props.variant}
            size={props.size}
            sx={services.getLayoutBtn(props.layoutBtn)}
            action={props.action}
        >
            {props.label}
        </Button>
    )
}
