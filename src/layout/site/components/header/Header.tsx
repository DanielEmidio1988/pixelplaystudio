import { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { ButtonGroup, Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/gallery/logo.jpeg";
import bannerHomeAetherCore from "../../../../assets/gallery/banners/bannerHomeAetherCore.png";
import bannerHomeTwilightNexus from "../../../../assets/gallery/banners/bannerTwilightNexus.png";
import bannerHomeLumina from "../../../../assets/gallery/banners/bannerHomeLumina.png";
import { Colors } from "../../../../assets/styles/MainStyle";
import { styleButton, styleButtonReadMore } from "./Header.style";

export function Header() {
    // const location = useLocation();
    const navigation = useNavigate();
    const [slideIndex, setSlideIndex] = useState<number>(0);

    const slides = [
        {
            backgroundImage: bannerHomeAetherCore,
            title: "AetherCore 1.8",
            subtitle: "Eclipse da Mente:",
            description: "O Loop Zero começou. Enfrente simulações corrompidas por Host Zero/9. Skins, coop e dados espectrais te esperam!",
            buttonText: "LEIA MAIS"
        },
        {
            backgroundImage: bannerHomeTwilightNexus,
            title: "Twilight Nexus 2.1",
            subtitle: "A Canção dos Sangues Ancestrais:",
            description: "Quando a lua cheia ascende, velhos pactos são quebrados... e heróis precisam escolher seus lados.",
            buttonText: "SAIBA MAIS"
        },
        {
            backgroundImage: bannerHomeLumina,
            title: "Lúmina 2.3",
            subtitle: "Ecos do Inverno Eterno:",
            description: "Uma nova era de magia e mistério desperta sob os cristais do norte...",
            buttonText: "JOGAR AGORA"
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    const currentSlide = slides[slideIndex];

    return (
        <Grid
            sx={{
                backgroundImage: `url(${currentSlide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                position: "relative",
                zIndex: 1,
                transition: "background-image 1s ease-in-out",

                "&::after": {
                    content: '""',
                    position: "absolute",
                    zIndex: 0,
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: Colors.black,
                    opacity: "0.7",
                },
            }}
        >
            <Grid
                sx={{
                    backgroundColor: "#000",
                    height: "24px",
                    position: "relative",
                    zIndex: 1,
                }}
            />

            <Grid
                container
                sx={{
                    height: "calc(100vh - 40px)",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <Grid
                    container
                    size={10}
                    sx={{
                        backgroundColor: Colors.dark,
                        height: "80px",
                        marginTop: "20px",
                        borderRadius: "4px",
                    }}
                >
                    <Grid container justifyContent="center" size={2}>
                        <img
                            src={logo}
                            alt="logo-pixelplay"
                            style={{
                                width: "6vw",
                                maxWidth: "80px",
                                cursor: "pointer",
                            }}
                        />
                    </Grid>
                    <Grid container size={10}>
                        <ButtonGroup
                            variant="text"
                            fullWidth
                            color="inherit"
                            sx={{ padding: "20px 12px" }}
                        >
                            <Button className="isActive" onClick={() => navigation("/")} sx={styleButton}>
                                Home
                            </Button>
                            <Button onClick={() => navigation("/")} sx={styleButton}>
                                Jogos
                            </Button>
                            <Button onClick={() => navigation("/")} sx={styleButton}>
                                Loja
                            </Button>
                            <Button onClick={() => navigation("/")} sx={styleButton}>
                                Contato
                            </Button>
                            <Button onClick={() => navigation("/")} sx={styleButton}>
                                Blog
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>

                <Grid container size={10} sx={{ position: "relative" }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            sx={{ color: Colors.basecolor, cursor: "default" }}
                        >
                            {currentSlide.title}
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" sx={{ color: Colors.white, cursor: "default" }}>
                            <span style={{ color: Colors.basecolor }}>{currentSlide.subtitle}</span>{" "}
                            {currentSlide.description.split(":")[1] ?? ""}
                        </Typography>
                        <Typography variant="body1" sx={{ color: Colors.white, cursor: "default" }}>
                            {currentSlide.description}
                        </Typography>
                        <Button onClick={() => navigation("/")} sx={styleButtonReadMore}>
                            {currentSlide.buttonText}
                        </Button>
                    </Grid>
                </Grid>
                <Button 
                    sx={{ position: "absolute", left: 30, top: "50%" }}
                    onClick={() => setSlideIndex((prevIndex) => {
                        if(prevIndex <= 0){
                            return slides.length - 1
                        }
                        return (prevIndex - 1) % slides.length;
                    })}
                >
                    <KeyboardArrowLeftIcon
                        sx={{
                            fill: Colors.white,
                            height: "40px",
                            width: "40px",
                        }}
                    />
                </Button>
                <Button 
                    sx={{ position: "absolute", right: 70, top: "50%" }}
                    onClick={() => setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length)}
                >
                    <KeyboardArrowRightIcon
                        sx={{
                            fill: Colors.white,
                            height: "40px",
                            width: "40px",
                        }}
                    />
                </Button>
            </Grid>
        </Grid>
    );
}