export interface IDeBtnProps {
    label: string;
    variant: "text" | "contained" | "outlined";
    size: "small" | "medium" | "large";
    action: () => void;
    layoutBtn: LayoutBtn; 
    fontSize?: "default" | "high"; 
}

type LayoutBtn = "default" | "dark" | "light" | "white";