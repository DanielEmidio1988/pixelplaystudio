export interface IMenuItem {
    label: string;
    link: LinkHeader;
}

type LinkHeader = "/" | "/sobre" | "/jogos" | "/eventos" | "/loja" | "blog";