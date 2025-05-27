export interface IdeBtnProps {
    label: string;
    variant?: "default" | "reverse";
    size?: "small" | "medium" | "large" | "extralarge";
    action: () => void;
}