export interface IdeBtnProps { // Todo: Apagar
    label: string;
    variant?: "default" | "reverse";
    size?: "small" | "medium" | "large" | "extralarge";
    action: () => void;
}

export interface IDeBtnProps {
    label: string;
    variant: "text" | "contained" | "outlined";
    action: () => void;
    layoutBtn: LayoutBtn; 
    fontSize?: "default" | "high"; 
}

type LayoutBtn = "default" | "dark" | "light" | "white";