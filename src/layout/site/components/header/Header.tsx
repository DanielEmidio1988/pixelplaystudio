import { useNavigate } from "react-router-dom";
import { ButtonGroup, Grid, Button, Typography } from "@mui/material";
import logo from "../../../../assets/gallery/utils/logo.png";
import bannerHomeAetherCore from "../../../../assets/gallery/banners/bannerHomeAetherCore.png";
import { Colors } from "../../../../assets/styles/MainStyle";
import { sHeader } from "./Header.style";
import { DeBtn } from "../../../../components/partials/debtn/deBtn";

export function Header() {
    // const location = useLocation();
    const navigation = useNavigate();
    const bannerInfo = {
        backgroundImage: bannerHomeAetherCore,
        title: "AetherCore 1.8",
        subtitle: "Eclipse da Mente:",
        description: "O Loop Zero começou. Enfrente simulações corrompidas por Host Zero/9. Skins, coop e dados espectrais te esperam!",
        buttonText: "SAIBA MAIS"
    };

    return (
        <Grid
            component="header"
            sx={{
                ...sHeader.sHeaderContainer,
                backgroundImage: `url(${bannerInfo.backgroundImage})`,
            }}
        >

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
                    size={12}
                    sx={{
                        backgroundColor: Colors.terciary,
                        height: "60px",
                        borderRadius: "4px",
                    }}
                >
                    <Grid container justifyContent="center" size={2} sx={{ height: "100%" }}>
                        <img
                            src={logo}
                            alt="logo-pixelplay"
                            style={{
                                height: "100%",
                                cursor: "pointer",
                            }}
                        />
                    </Grid>
                    <Grid container size={6}>
                        <ButtonGroup
                            variant="text"
                            fullWidth
                            color="inherit"
                            sx={{ padding: "10px 12px" }}
                        >
                            <Button className="isActive" onClick={() => navigation("/")} sx={sHeader.sNavButton}>
                                Home
                            </Button>
                            <Button onClick={() => navigation("/")} sx={sHeader.sNavButton}>
                                Jogos
                            </Button>
                            <Button onClick={() => navigation("/")} sx={sHeader.sNavButton}>
                                Loja
                            </Button>
                            <Button onClick={() => navigation("/")} sx={sHeader.sNavButton}>
                                Contato
                            </Button>
                            <Button onClick={() => navigation("/")} sx={sHeader.sNavButton}>
                                Blog
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>

                <Grid container size={10} sx={{ position: "relative" }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="body1"
                            fontWeight="bold"
                            sx={{ ...sHeader.sTypography, textTransform: "uppercase" }}
                        >
                            {bannerInfo.title}
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" sx={sHeader.sTypography}>
                            <span style={{ color: Colors.white }}>{bannerInfo.subtitle}</span>{" "}
                            {bannerInfo.description.split(":")[1] ?? ""}
                        </Typography>
                        <Typography variant="body1" sx={sHeader.sTypography}>
                            {bannerInfo.description}
                        </Typography>
                        <DeBtn
                            label={bannerInfo.buttonText}
                            size="large"
                            action={() => navigation("/")}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}