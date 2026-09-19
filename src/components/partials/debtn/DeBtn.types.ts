import { ReactNode } from "react";

export interface IDeBtnProps {
    label: string;
    variant: "text" | "contained" | "outlined";
    size: "small" | "medium" | "large";
    action: () => void;
    layoutBtn: LayoutBtn; 
    fontSize?: "default" | "high"; 
    endIcon?: ReactNode;
    startIcon?: ReactNode;
    uppercase?: boolean;
    underline?: boolean;
    reverse?: boolean;
}

export type LayoutBtn = 
    | "default" 
    | "dark" 
    | "light" 
    | "white";