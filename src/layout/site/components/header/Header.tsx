import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  AppBar,
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { colors } from "../../../theme";

const navLinks = ["JOGOS", "SOBRE", "EVENTOS", "LOJA", "BLOG"];

export default function Header() {
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
        <Stack direction="row" alignItems="center" gap={6}>
          <Typography
            component="a"
            href="/"
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
              <li key={link}>
                <Typography
                  component="a"
                  href="#"
                  variant="button"
                  sx={{
                    color: colors.textSecondary,
                    textDecoration: "none",
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: "1rem",
                    fontWeight: 500,
                    "&:hover": { color: colors.textPrimary },
                    transition: "color 0.2s",
                  }}
                >
                  {link}
                </Typography>
              </li>
            ))}
          </Stack>
        </Stack>

        {/* Search + icons */}
        <Stack direction="row" alignItems="center" gap={3}>
          <OutlinedInput
            inputProps={{ "aria-label": "Buscar itens" }}
            placeholder="Buscar itens..."
            size="small"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ color: colors.textMuted, fontSize: 18 }} />
              </InputAdornment>
            }
            sx={{
              width: 256,
              borderRadius: 9999,
              backgroundColor: colors.surfaceSecondary,
              display: { xs: "none", sm: "flex" },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
              "& input": { color: colors.textMuted, fontSize: "0.875rem", py: "9px" },
              "& input::placeholder": { color: colors.textMuted, opacity: 1 },
            }}
          />

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


// import { useNavigate } from "react-router-dom";
// import { DeBtn } from "../../../../components/partials/debtn/DeBtn";
// import { IMenuItem } from "./Header.types";
// import { Grid } from "@mui/material";

// const menuItem: IMenuItem[] = [
//     {
//         label: "Sobre",
//         link: "/",
//     },
//     {
//         label: "Jogos",
//         link: "/",
//     },
//     {
//         label: "Eventos",
//         link: "/",
//     },
//     {
//         label: "Loja",
//         link: "/",
//     },
//     {
//         label: "Blog",
//         link: "/",
//     }
// ] 

// export function Header() {

//     const navigation = useNavigate();

//     return (
//         <Grid 
//             component="header"
//             className=""
//         >
//             <Grid 
//                 className=""
//                 data-name="HeaderLink"
//             >
//                 {menuItem && menuItem.map((menu) => {
//                     return (
//                         <DeBtn 
//                             label={menu.label}
//                             action={() => navigation(menu.link)}
//                             variant="text"
//                             layoutBtn="white"
//                         />
//                     )
//                 })}
//             </Grid>
//         </Grid>
//     );
// }