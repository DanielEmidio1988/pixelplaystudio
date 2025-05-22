import { Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MailIcon from '@mui/icons-material/Mail';
import { Colors } from "../../../../assets/styles/MainStyle";
import logo from "../../../../assets/gallery/utils/logoreverse.png"
import { DeSocialNetworks } from "../../../../components/partials/desocialnetworks/deSocialNetworks";

export function Footer(){

    return(
        <Grid
            component="footer"
            container
            size={12}
            justifyContent="center"
            paddingTop={4}
            sx={{
                paddingTop: 4,
                justifyContent: "center",
                backgroundColor: Colors.primary,
                clipPath: "polygon(44% 4%, 56% 4%, 60% 0, 100% 0, 100% 100%, 0 100%, 0 0, 40% 0)",
            }}
        >
            <Grid container size={11}>
                <Grid size={{xs: 12, sm: 4}}>
                    <img src={logo} alt="Logo Pixel Play Studio" style={{width: "80px"}} />
                    <Typography variant="body1" sx={{color: Colors.dark, opacity: 0.7}}>
                        Pixel Play é uma das maiores desenvolvedoras de jogos mobile do Brasil.
                    </Typography>
                    <List
                        sx={{width: "100%"}}
                        component="nav"
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <LocationOnIcon sx={{fill: Colors.dark}}/>
                            </ListItemIcon>
                            <ListItemText primary="Endereço: Rua AstroDev, 99 - São Paulo, SP" sx={{color: Colors.dark, opacity: 0.7}} />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <HeadphonesIcon sx={{fill: Colors.dark}}/>
                            </ListItemIcon>
                            <ListItemText primary="Telefone: +99 9999 9999" sx={{color: Colors.dark, opacity: 0.7}}/>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <MailIcon sx={{fill: Colors.dark}}/>
                            </ListItemIcon>
                            <ListItemText primary="Email: contato@pixelplaystudio.com" sx={{color: Colors.dark, opacity: 0.7}}/>
                        </ListItemButton>
                    </List>
                </Grid>
                <Grid size={{xs: 12, sm: 4}}>
                    <Typography variant="subtitle1" fontWeight="bold" color={Colors.dark}>
                        Mapa do site
                    </Typography>
                    <List
                        sx={{width: "100%"}}
                        component="nav"
                    >
                        <ListItemButton>
                            <ListItemText 
                                primary="Home" 
                                sx={{
                                    color: Colors.dark, 
                                    opacity: 0.7,

                                    "&:hover" :{
                                        color: Colors.secondary,
                                        opacity: 1,
                                    }
                                }}
                            />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText 
                                primary="Jogos" 
                                sx={{
                                    color: Colors.dark, 
                                    opacity: 0.7,

                                    "&:hover" :{
                                        color: Colors.dark,
                                        opacity: 1,
                                    }
                                    }}
                            />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText 
                                primary="Loja" 
                                sx={{
                                    color: Colors.dark,
                                    opacity: 0.7,

                                    "&:hover" :{
                                        color: Colors.secondary,
                                        opacity: 1,
                                    }
                                    }}
                            />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText 
                                primary="Contato" 
                                sx={{
                                    color: Colors.dark, 
                                    opacity: 0.7,

                                    "&:hover" :{
                                        color: Colors.secondary,
                                        opacity: 1,
                                    }
                                    }}/>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText 
                                primary="Blog" 
                                sx={{
                                    color: Colors.dark, 
                                    opacity: 0.7,

                                    "&:hover" :{
                                        color: Colors.secondary,
                                        opacity: 1,
                                    }
                                    }}
                                />
                        </ListItemButton>    
                    </List>
                </Grid>
                <Grid size={{xs: 12, sm: 4}}>
                    <Typography variant="subtitle1"  fontWeight="bold" sx={{color: Colors.dark}}>
                        Redes Sociais
                    </Typography>
                    <DeSocialNetworks size="medium" reverse/>
                </Grid>
            </Grid>
            <Grid container size={12} justifyContent="center" sx={{background: Colors.secondary, padding: "20px 0"}}>
                <Typography variant="body2" sx={{color: Colors.dark, opacity: 0.7}}>
                    Copyright © 2025 - Este projeto foi desenvolvido por Daniel Emidio
                </Typography>
            </Grid>
        </Grid>
    )
}