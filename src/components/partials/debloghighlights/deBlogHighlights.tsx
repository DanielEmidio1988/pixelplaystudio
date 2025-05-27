import { Grid, Typography } from "@mui/material";
import { DeBlogHighlightsProps } from "./deBlogHighlights.types";
import { LastNewBlog, cardsNewBlog, lastNewsBlogContent } from "./deBlogHighlights.style";
import imgblog1 from "../../../assets/gallery/blog/imgblog1.png";
import imgblog2 from "../../../assets/gallery/blog/imgblog2.jpg";
import imgblog3 from "../../../assets/gallery/blog/imgblog3.png";
import imgblog4 from "../../../assets/gallery/blog/imgblog4.jpg";
import { DeBtn } from "../debtn/deBtn";

export function DeBlogHighlights(props: DeBlogHighlightsProps) {
    const newsBlog = [
        {
            img: imgblog2,
            title: "Festival do ouro: Promoções Épicas na Loja!",
            content: "hajshjashjasjhas",
            cattegory: "Eventos",
            postDate: "17/05/2025",
        },
        {
            img: imgblog3,
            title: "Tecnologia & Poder: Atualização Mobile Chegando com Tudo!",
            content: "hajshjashjasjhas",
            cattegory: "Noticias",
            postDate: "16/05/2025",
        },
        {
            img: imgblog4,
            title: "Diversão em Equipe: Os Melhores Momentos do Torneio!",
            content: "hajshjashjasjhas",
            cattegory: "Dicas",
            postDate: "15/05/2025"
        }
    ];

    console.log(props)

    return (
        <Grid container size={12} spacing={2}>
            <Grid container size={12}>
                <Grid size={6}>
                    <Grid size={12} sx={{ ...LastNewBlog, backgroundImage: `url(${imgblog1})` }} />
                    <Grid
                        size={12}
                        sx={lastNewsBlogContent}
                    >
                        <Grid
                            container
                            size={12}
                            className="lastNewBlogContent__info"
                        >
                            <Typography
                                variant="body2"
                                component="span"
                                className="lastNewBlogContent__info__cattegory"
                            >
                                Atualizações
                            </Typography>
                            <Typography
                                variant="body2"
                                component="span"
                                className="lastNewBlogContent__info__date"
                            >
                                18/05/2025
                            </Typography>
                        </Grid>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            className="titleBlog"
                        >
                            Aethercore 1.8: Nova versão disponível
                        </Typography>
                        <Typography
                            variant="body1"
                            className="contentBlog"
                        >
                            A nova versão de Aethercore já está disponivel! Explore a nova dimensão e...
                        </Typography>
                        <Typography
                            variant="body2"
                            className="readMoreBlog"
                        >
                            Leia Mais &gt;&gt;
                        </Typography>
                    </Grid>
                </Grid>
                <Grid size={6} sx={{ display: "flex", flexDirection: "column", gap: 2, }}>
                    {newsBlog.map((blog, index) => {
                        return (
                            <Grid
                                key={index}
                                size={12}
                                container
                                sx={cardsNewBlog}
                                spacing={2}
                            >
                                <Grid
                                    size={5}
                                    className="imgCard"
                                    sx={{ backgroundImage: `url(${blog.img})` }}
                                />
                                <Grid
                                    size={7}
                                >
                                    <Grid
                                        size={12}
                                        className="newBlogContent__info"
                                    >
                                        <Typography
                                            variant="caption"
                                            className="newBlogContent__info__cattegory"
                                        >
                                            {blog.cattegory}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            className="newBlogContent__info__date"
                                        >
                                            {blog.postDate}
                                        </Typography>
                                    </Grid>

                                    <Typography
                                        variant="body2"
                                        className="titleBlog"
                                    >
                                        {blog.title}
                                    </Typography>
                                </Grid>
                            </Grid>
                        )
                    })}
                    <Grid container size={12} justifyContent="center">
                        <DeBtn
                            label="Veja mais"
                            size="small"
                            action={() => { }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}