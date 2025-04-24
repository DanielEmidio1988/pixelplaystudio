import { Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

export function Footer(){
    return(
        <Grid
            component="footer"
            container
            size={12}
            justifyContent="center"
        >
            <Grid container size={11}>
                <Grid size={{xs: 12, sm: 4}}>
                    <Typography variant="body1">
                        Pixel Play é uma das maiores desenvolvedoras de jogos mobile do Brasil.
                    </Typography>
                    <List
                        sx={{width: "100%"}}
                        component="nav"
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <LocationOnIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Endereço: Rua AstroDev, 99 - São Paulo, SP" sx={{fontSize: "14px"}} />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <HeadphonesIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Telefone: +99 9999 9999"/>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <MailIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Email: contato@pixelplaystudio.com"/>
                        </ListItemButton>
                    </List>
                </Grid>
                <Grid size={{xs: 12, sm: 4}}>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Mapa do site
                    </Typography>
                    <List
                        sx={{width: "100%"}}
                        component="nav"
                    >
                        <ListItemButton>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Jogos" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Loja" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Contato" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Blog" />
                        </ListItemButton>    
                    </List>
                </Grid>
                <Grid size={{xs: 12, sm: 4}}>
                    <Typography variant="subtitle1"  fontWeight="bold">
                        Redes Sociais
                    </Typography>
                    <List
                        sx={{width: "100%", display: "flex"}}
                        component="nav"
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <LinkedInIcon/>
                            </ListItemIcon>
                        </ListItemButton>     
                        <ListItemButton>
                            <ListItemIcon>
                                <FacebookIcon/>
                            </ListItemIcon>
                        </ListItemButton>   
                        <ListItemButton>
                            <ListItemIcon>
                                <YouTubeIcon/>
                            </ListItemIcon>
                        </ListItemButton>   
                        <ListItemButton>
                            <ListItemIcon>
                                <XIcon/>
                            </ListItemIcon>
                        </ListItemButton>        
                    </List>
                </Grid>
            </Grid>
            <Grid container size={12} justifyContent="center">
                <Typography variant="body2">
                Copyright © 2025 - Este projeto foi desenvolvido por Daniel Emidio
                </Typography>
            </Grid>
        </Grid>
    )
}