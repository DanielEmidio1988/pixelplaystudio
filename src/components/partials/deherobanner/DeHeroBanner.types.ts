export interface IDeHeroBannerProps{
    banners: IBannerItem[];
}

export interface IBannerItem{
    img: string;
    eyebrow: string;
    title?: string;
    subtitle?: string;
    description: string;
    colorAction?: string; 
    action?: IActionBtnBanner[];
}

interface IActionBtnBanner {
    action: () => void;
    label: string;
}