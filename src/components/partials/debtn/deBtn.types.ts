export interface IdeBtnProps {
    label: string;
    variant?: "default" | "reverse";
    size?: "small" | "medium" | "large" | "extralarge";
    action: () => void;
}

export interface IDeBtnProps {
    label: string;
    variant?: "default" | "dark" | "light" | "white";
    fontSize?: "default" | "high"; 
    action: () => void;
}