import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Typography,
  styled,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import DrawerItem from "./DrawerItem";
import { Link, useLocation, useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const itemList = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Career",
    to: "/career",
  },
  {
    text: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "#87CEEB",
      }}
      elevation={0}
    >
      <StyledToolbar>
        <Typography
          sx={{
            color: "#fff",
            padding: "0.8rem",
            margin: "0.3rem",
            border: "0.25rem solid #fff",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => {
            navigate("/");
          }}
          variant="h6"
          component="h2"
        >
          WeAssure
        </Typography>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <DrawerItem />
        </Box>
        <ListMenu>
          {itemList.map((item) => {
            const { text } = item;
            return (
              <ListItem key={text}>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  sx={{
                    color: item.to === pathname ? "navy" : "#fff",
                    borderBottom: "0.2rem solid #fff",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#1e2a5a",
                      borderBottom: "0.2rem solid cyan",
                    },
                    border: item.to === pathname ? "0.2rem solid #fff" : "",
                    textShadow: item.to === pathname ? "2px 0px #fff" : "",
                  }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
