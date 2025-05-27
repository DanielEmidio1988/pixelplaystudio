export interface IDeCardProps {
    items: CardItem[];
    size: number;
    variant?: "model1" | "model2" | "default";
}

type CardItem = {
    label?: string;
    url?: string;
    image: string;
}