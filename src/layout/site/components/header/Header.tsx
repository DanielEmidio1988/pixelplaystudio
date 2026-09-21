import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { colors } from "../../../theme";
import { useNavigate } from "react-router-dom";
import { routesMap } from "../../../../components/routercomponent/Routes";
import { useState } from "react";

export default function Header() {
  const navigation = useNavigate();

  const [isOpenMenu, setIsOpenMenu] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpenMenu(event.currentTarget);
  }

  const handleNavigate = (url: string) => {
    navigation(url);
    setIsOpenMenu(null);
  }

  const navLinks = [
    {
      label: "JOGOS",
      url: routesMap.games
    },
    {
      label: "SOBRE",
      url: routesMap.home,
    },
    {
      label: "EVENTOS",
      url: routesMap.home,
    },
    {
      label: "LOJA",
      url: routesMap.home,
    },
    {
      label: "BLOG",
      url: routesMap.home,
    }
  ]

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(2,6,23,0.6)",
        borderBottom: `1px solid ${colors.border}`,
        boxShadow: `0 8px 32px 0 ${colors.glowPrimary}30`,
      }}
    >
      <Toolbar
        component="nav"
        sx={{
          maxWidth: 1280,
          width: "100%",
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: 2,
          justifyContent: "space-between",
          gap: 6,
          minHeight: "unset !important",
        }}
      >
        {/* Logo + Nav links */}
        <Stack direction="row" alignItems="center" gap={{ xs: 2, md: 6 }}>

          <IconButton
            aria-label="Abrir menu de navegação"
            onClick={handleOpenMenu}
            sx={{ display: { xs: "flex", md: "none" }, color: colors.textMuted }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            component="a"
            href={routesMap.home}
            variant="h4"
            aria-label="Pixel Play - Ir para home"
            sx={{
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textDecoration: "none",
              whiteSpace: "nowrap",
              textShadow: "none",
              filter: `drop-shadow(0 0 15px ${colors.glowPrimary})`,
            }}
          >
            PIXEL PLAY
          </Typography>

          <Stack
            component="ul"
            direction="row"
            gap={4}
            sx={{ listStyle: "none", m: 0, p: 0, display: { xs: "none", md: "flex" } }}
          >
            {navLinks.map((link) => (
              <li
                key={link.label}
                onClick={() => navigation(link.url)}
                style={{ cursor: "pointer" }}
              >
                <Typography
                  variant="button"
                  sx={{
                    color: colors.textSecondary,
                    textDecoration: "none",
                    "&:hover": { color: colors.textPrimary },
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </Typography>
              </li>
            ))}
          </Stack>
        </Stack>

        <Menu
          anchorEl={isOpenMenu}
          open={Boolean(isOpenMenu)}
          onClose={() => setIsOpenMenu(null)}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiPaper-root": {
              backgroundColor: "rgba(2,6,23,0.95)",
              backdropFilter: "blur(12px)",
              border: `1px solid ${colors.border}`,
              color: colors.textSecondary,
              width: "200px",
              mt: 1.5,
            },
          }}
        >
          {navLinks.map((link) => (
            <MenuItem
              key={link.label}
              onClick={() => handleNavigate(link.url)}
              sx={{
                py: 1.5,
                "&:hover": {
                  backgroundColor: colors.surfaceSecondary,
                  color: colors.textPrimary,
                },
              }}
            >
              {link.label}
            </MenuItem>
          ))}
        </Menu>

        {/* icons */}
        <Stack direction="row" alignItems="center" gap={3}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton aria-label="Carrinho de compras" sx={{ color: colors.textMuted }}>
              <ShoppingCartOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="Perfil do usuário" sx={{ color: colors.textMuted }}>
              <PersonOutlineIcon fontSize="small" />
            </IconButton>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}