import { LayoutBtn } from "../../debtn/DeBtn.types";

export type GameCardVariant = "large" | "medium" | "small";

export interface IDeGameCardProps {
  title: string;
  genre?: string;
  image: string;
  variant: GameCardVariant;
  ctaLabel: string;
  accentColor?: string;
  colSpan?: number;
  rowSpan?: number;
  layoutBtn: LayoutBtn,
}