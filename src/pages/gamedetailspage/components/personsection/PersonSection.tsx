import { Box, Grid, Typography, IconButton } from "@mui/material";
import { IPersonSectionProps } from "./PersonSection.types";
import { useState, useEffect, useRef } from "react";
import { IPersonsGame } from "../../GameDetailsPage.types";
import { colors } from "../../../../layout/theme";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export function PersonSection(props: IPersonSectionProps) {
    const [personSelected, setPersonSelected] = useState<IPersonsGame | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Seleciona o primeiro personagem por padrão ao carregar a lista
    useEffect(() => {
        if (props.persons && props.persons.length > 0 && !personSelected) {
            setPersonSelected(props.persons[0]);
        }
    }, [props.persons, personSelected]);

    // Função para rolar o slider verticalmente pelas setas
    const handleScroll = (direction: "up" | "down") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 100; // pixels que vai mover por clique
            scrollContainerRef.current.scrollBy({
                top: direction === "up" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <Grid
            container 
            size={12}
            sx={{
                bgcolor: colors.background,
                color: colors.white,
                position: "relative",
                pb: { xs: 12, md: 0 },
            }}
        >
            {/* Conteúdo Principal: Imagem do Personagem + Informações */}
            <Grid
                container
                size={12}
                justifyContent="center"
                alignItems="center"
                spacing={4}
                sx={{
                    position: "relative",
                    minHeight: "100vh",
                }}
            >
                {/* Imagem principal com efeito de desfoque/fade nas bordas */}
                <Grid
                    size={{ xs: 12, md: 5 }}
                    sx={{
                        position: "relative",
                        height: { xs: "80vh", md: "100vh" },
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <Box
                        component="img"
                        src={personSelected?.image}
                        alt={personSelected?.name}
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top center",
                            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                            maskComposite: "intersect",
                            WebkitMaskComposite: "source-in",
                        }}
                    />
                </Grid>

                {/* Descrição do personagem ao lado (Desktop) ou sobreposta flutuante (Mobile) */}
                <Grid
                    size={{ xs: 11, md: 4 }}
                    sx={{
                        px: { xs: 2, md: 4 },
                        marginTop: { xs: 0, md: "10vh" },
                        position: { xs: "absolute", md: "relative" },
                        bottom: { xs: "6%", md: "auto" },
                        left: { xs: "50%", md: "auto" },
                        transform: { xs: "translateX(-50%)", md: "none" },
                        backdropFilter: { xs: "blur(6px)", md: "none" },
                        backgroundColor: { xs: "rgba(0,0,0,0.6)", md: "transparent" },
                        borderRadius: { xs: "12px", md: 0 },
                        border: { xs: `2px solid ${colors.white}`, md: "none" },
                        zIndex: 5
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2
                        }}
                    >
                        <Typography
                            component="h3"
                            sx={{
                                fontSize: "3rem",
                                fontWeight: "bold",
                                color: colors.white,
                            }}
                        >
                            {personSelected?.name?.toLocaleUpperCase()}
                        </Typography>
                        <Box
                            component="img"
                            src={personSelected?.rarity}
                            alt="rank"
                            sx={{
                                width: "80px",
                                height: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </Box>

                    <Grid
                        container
                        size={12}
                        sx={{ mt: 2 }}
                    >
                        <Grid
                            size={6}
                            sx={{
                                backgroundColor: colors.glowPrimary,
                                py: 1
                            }}
                        >
                            <Typography
                                component="h4"
                                textAlign="center"
                                fontWeight="bold"
                            >
                                {personSelected?.class?.toLocaleUpperCase()}
                            </Typography>
                        </Grid>
                        <Grid
                            size={6}
                            sx={{
                                backgroundColor: colors.white,
                                py: 1
                            }}
                        >
                            <Typography
                                component="h4"
                                textAlign="center"
                                fontWeight="bold"
                                sx={{
                                    color: colors.surface
                                }}
                            >
                                {personSelected?.element?.toLocaleUpperCase()}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography
                        component="p"
                        sx={{
                            fontSize: "1rem",
                            lineHeight: 1.6,
                            color: colors.white,
                            marginTop: 2,
                        }}
                    >
                        {personSelected?.description}
                    </Typography>
                </Grid>
            </Grid>

            {/* Painel Lateral / Inferior de Avatares */}
            <Grid
                size={12}
                sx={{
                    display: "flex",
                    flexDirection: { xs: "row", md: "column" },
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: { xs: "100%", md: "110px" },
                    height: { xs: "auto", md: "75vh" },
                    position: "absolute",
                    bottom: 0,
                    top: { xs: "auto", md: "12%" },
                    left: 0,
                    zIndex: 10,
                    backgroundColor: "transparent",
                    py: 2,
                    px: 1,
                }}
            >
                {/* Seta Para Cima (Apenas Desktop) */}
                <IconButton 
                    onClick={() => handleScroll("up")}
                    sx={{ 
                        display: { xs: "none", md: "flex" }, 
                        color: "rgba(255,255,255,0.7)",
                        mb: 1,
                        "&:hover": { color: "#fff" }
                    }}
                >
                    <KeyboardArrowUpIcon />
                </IconButton>

                {/* Container com Scroll controlado e barras de rolagem ocultas */}
                <Box
                    ref={scrollContainerRef}
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "row", md: "column" },
                        alignItems: "center",
                        width: "100%",
                        maxHeight: { xs: "auto", md: "55vh" },
                        overflowX: { xs: "auto", md: "hidden" },
                        overflowY: { xs: "hidden", md: "auto" },
                        padding: { xs: "20px", md: "20px 0" },
                        gap: 2.5,
                        px: 1,
                        scrollBehavior: "smooth",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        "&::-webkit-scrollbar": {
                            display: "none"
                        }
                    }}
                >
                    {props.persons?.map((person) => {
                        const isSelected = personSelected?.name === person.name;
                        return (
                            <Box
                                key={`${person.name.trim()}`}
                                onClick={() => setPersonSelected(person)}
                                component="img"
                                src={person.avatar}
                                alt={person.name}
                                sx={{
                                    width: "65px",
                                    height: "65px",
                                    minWidth: "65px",
                                    minHeight: "65px",
                                    borderRadius: "50%",
                                    cursor: "pointer",
                                    objectFit: "cover",
                                    transition: "all 0.3s ease",
                                    border: isSelected ? `3px solid ${colors.primary}` : "2px solid transparent",
                                    transform: isSelected ? "scale(1.1)" : "scale(1)",
                                    opacity: isSelected ? 1 : 0.5,
                                    boxShadow: isSelected ? `0px 0px 12px ${colors.textSecondary}` : "none",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        opacity: 1
                                    }
                                }}
                            />
                        )
                    })}
                </Box>

                {/* Seta Para Baixo (Apenas Desktop) */}
                <IconButton 
                    onClick={() => handleScroll("down")}
                    sx={{ 
                        display: { xs: "none", md: "flex" }, 
                        color: "rgba(255,255,255,0.7)",
                        mt: "auto",
                        "&:hover": { color: "#fff" }
                    }}
                >
                    <KeyboardArrowDownIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}