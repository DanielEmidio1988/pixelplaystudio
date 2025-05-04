import React from 'react';
import { Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import { Colors } from '../../../assets/styles/MainStyle';
import { IDeSocialNetworksProps } from './deSocialNetworks.types';


export function DeSocialNetworks(props: IDeSocialNetworksProps) {

    const socialLinksButtons = [
        {
            icon: LinkedInIcon,
            url: "",
        },
        {
            icon: FacebookIcon,
            url: "",
        },
        {
            icon: YouTubeIcon,
            url: "",
        },
        {
            icon: XIcon,
            url: "",
        }
    ];

    const sizeIcons = {
        small: "14px",
        medium: "24px",
        large: "32px",
    }

    return (
        <Grid
            sx={{
                display: "flex",
                gap: 1,
            }}
            component="ul"
        >
            {
                socialLinksButtons.map((button, index) => {
                    return (
                        <Grid
                            key={index}
                            component="li"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                margin: 0,
                            }}
                        >
                            {React.createElement(button.icon, {
                                sx: {
                                    fill: Colors.white,
                                    height: sizeIcons[props.size],
                                    width: sizeIcons[props.size],
                                    cursor: "pointer",
                                    margin: 0,

                                    "&:hover": {
                                        fill: Colors.primary,
                                    }
                                }
                            })}
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}