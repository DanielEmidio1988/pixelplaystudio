import { Box, Grid, Typography } from "@mui/material";
import { IPersonSectionProps } from "./PersonSection.types";
import { useState, useEffect } from "react";
import { IPersonsGame } from "../../GameDetailsPage.types";

export function PersonSection(props: IPersonSectionProps) {
    const [personSelected, setPersonSelected] = useState<IPersonsGame | null>(null);

    // Seleciona o primeiro personagem por padrão ao carregar a lista
    useEffect(() => {
        if (props.persons && props.persons.length > 0 && !personSelected) {
            setPersonSelected(props.persons[0]);
        }
    }, [props.persons, personSelected]);

    return (
        <Grid container size={12} sx={{ bgcolor: "#0b0b0b", color: "#fff", p: { xs: 2, md: 6 }, position: "relative" }}>
            {/* Título da Seção */}
            <Grid container size={12} sx={{ mb: 4 }}>
                <Typography component="h3" sx={{ fontSize: "2rem", fontWeight: "bold", letterSpacing: 2 }}>
                    {props.title}
                </Typography>
            </Grid>

            {/* Conteúdo Principal: Imagem do Personagem + Informações */}
            <Grid container size={12} alignItems="center" spacing={4}>
                {/* Imagem principal com efeito de desfoque/fade nas bordas */}
                <Grid size={{ xs: 12, md: 8 }} sx={{ position: "relative", minHeight: "400px", display: "flex", justifyContent: "center" }}>
                    <Box
                        component="img"
                        src={personSelected?.image}
                        alt={personSelected?.name}
                        sx={{
                            width: "100%",
                            maxHeight: "550px",
                            objectFit: "cover",
                            objectPosition: "top center",
                            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                            maskComposite: "intersect",
                            WebkitMaskComposite: "source-in",
                        }}
                    />
                </Grid>

                {/* Descrição do personagem ao lado */}
                <Grid size={{ xs: 12, md: 4 }} sx={{ px: { xs: 2, md: 4 } }}>
                    <Typography component="h4" sx={{ fontSize: "2.5rem", fontWeight: "bold", color: "#ff4d4d", mb: 2 }}>
                        {personSelected?.name}
                    </Typography>
                    <Typography component="p" sx={{ fontSize: "1rem", lineHeight: 1.6, color: "#ccc" }}>
                        {personSelected?.description}
                    </Typography>
                </Grid>
            </Grid>

            {/* Slider / Lista de Avatares Centralizados */}
            <Grid 
                container 
                size={12} 
                justifyContent="center" 
                alignItems="center"
                sx={{ 
                    mt: 6, 
                    gap: 2, 
                    overflowX: "auto", 
                    flexWrap: { xs: "nowrap", md: "wrap" }, // Vira slider horizontal em telas menores e quebra linha em telas grandes
                    py: 2,
                    px: 2,
                    scrollBehavior: "smooth",
                    "&::-webkit-scrollbar": { height: "6px" },
                    "&::-webkit-scrollbar-thumb": { backgroundColor: "#333", borderRadius: "3px" }
                }}
            >
                {props.persons.map((person) => {
                    const isSelected = personSelected?.name === person.name;
                    return (
                        <Box
                            key={`${person.name.trim()}`}
                            onClick={() => setPersonSelected(person)}
                            component="img"
                            src={person.avatar}
                            alt={person.name}
                            sx={{
                                width: "70px",
                                height: "70px",
                                minWidth: "70px",
                                borderRadius: "50%",
                                cursor: "pointer",
                                objectFit: "cover",
                                transition: "all 0.3s ease",
                                border: isSelected ? "3px solid #ff4d4d" : "2px solid transparent",
                                transform: isSelected ? "scale(1.1)" : "scale(1)",
                                boxShadow: isSelected ? "0px 0px 12px rgba(255, 77, 77, 0.6)" : "none",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                }
                            }}
                        />
                    )
                })}
            </Grid>
        </Grid>
    )
}