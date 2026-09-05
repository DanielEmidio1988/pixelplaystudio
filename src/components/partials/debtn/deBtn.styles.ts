import { 
    MainLayout
} from "../../../assets/styles/MainStyle";
import { CSSProperties } from "react";

export const baseButton: CSSProperties = {
    padding: "16px 40px",
    border: "1px solid transparent",
    borderRadius: 9999,
    fontWeight: "bold",
    fontFamily: MainLayout.fonts.typography.headline,
}

export const btnDefault: CSSProperties = {
    backgroundColor: MainLayout.colors.primary,
    color: MainLayout.colors.primaryStrong,
}

export const btnDefaultHover: CSSProperties = {
    backgroundColor: MainLayout.colors.primaryStrong,
    color: MainLayout.colors.white,
    borderColor: MainLayout.colors.primary,
}

export const btnDark: CSSProperties = {
    backgroundColor: MainLayout.colors.primary,
    color: MainLayout.colors.white,
    borderColor: MainLayout.colors.gray,
}

export const btnDarkHover: CSSProperties = {
    backgroundColor: MainLayout.colors.primaryStrong,
    color: MainLayout.colors.white,
    borderColor: MainLayout.colors.primary,
}

export const btnLight: CSSProperties = {
    backgroundColor: MainLayout.colors.primary,
    color: MainLayout.colors.primaryStrong,
}

export const btnLightHover: CSSProperties = {
    backgroundColor: MainLayout.colors.primaryStrong,
    color: MainLayout.colors.white,
    borderColor: MainLayout.colors.primary,
}

export const btnWhite: CSSProperties = {
    backgroundColor: MainLayout.colors.primary,
    color: MainLayout.colors.primaryStrong,
}

export const btnWhiteHover: CSSProperties = {
    backgroundColor: MainLayout.colors.primaryStrong,
    color: MainLayout.colors.white,
    borderColor: MainLayout.colors.primary,
}