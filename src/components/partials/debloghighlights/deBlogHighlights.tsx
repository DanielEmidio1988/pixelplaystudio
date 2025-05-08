import { Grid, Typography } from "@mui/material";
import { DeBlogHighlightsProps } from "./deBlogHighlights.types";
import { Colors } from "../../../assets/styles/MainStyle";
import { LastNewBlog, cardsNewBlog } from "./deBlogHighlights.style";
import imgblog1 from "../../../assets/gallery/blog/imgblog1.png";
import imgblog2 from "../../../assets/gallery/blog/imgblog2.jpg";
import imgblog3 from "../../../assets/gallery/blog/imgblog3.png";
import imgblog4 from "../../../assets/gallery/blog/imgblog4.jpg";

export function DeBlogHighlights(props: DeBlogHighlightsProps ){
    const newsBlog = [
        {
            img: imgblog2,
            title: "Festival do ouro: Promoções Épicas na Loja!",
            content: "hajshjashjasjhas",
            cattegory: "Noticias",
        },
        {
            img: imgblog3,
            title: "Tecnologia & Poder: Atualização Mobile Chegando com Tudo!",
            content: "hajshjashjasjhas",
            cattegory: "Noticias",
        },
        {
            img: imgblog4,
            title: "Diversão em Equipe: Os Melhores Momentos do Torneio!",
            content: "hajshjashjasjhas",
            cattegory: "Noticias",
        }
    ];

    console.log(props)
    
    return(
        <Grid container size={12} spacing={2}>
            <Grid container size={12}>
                <Grid size={6}>
                    <Grid size={12} sx={{...LastNewBlog, backgroundImage: `url(${imgblog1})`}}/>
                    <Grid size={12}>
                        <Typography variant="h5" fontWeight="bold" sx={{color: Colors.white, textTransform: "uppercase", margin: "8px 0"}}>
                            Aethercore 1.8: Nova versão disponível
                        </Typography>
                        <Typography variant="body1" sx={{color: Colors.white}}>
                            A nova versão de Aethercore já está disponivel! Explore a nova dimensão e...
                        </Typography>
                    </Grid>
                </Grid>
                <Grid size={6} sx={{display: "flex", flexDirection: "column", gap: 2,}}>
                    {newsBlog.map((blog, index) => {
                        return(
                            <Grid key={index} size={12} container sx={cardsNewBlog} spacing={2}>
                                <Grid size={5} className="imgCard" sx={{backgroundImage: `url(${blog.img})`}}/>
                                <Grid size={7}>
                                    <Typography variant="body2" fontWeight="bold" sx={{color: Colors.white, margin: "8px 0"}}>
                                        {blog.title}
                                    </Typography>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}