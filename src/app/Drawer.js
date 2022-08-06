import {
  Box,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { AppIcon, ChevronLeftIcon, ChevronRightIcon } from "../resources/icons";
import React from "react";

const Drawer = ({ drawerOpen, setDrawerOpen, theme }) => {
  const [selectedMenu, setSelectedMenu] = React.useState(0);
  const [selectedSubMenu, setSelectedSubMenu] = React.useState(0);

  return (
    <MuiDrawer
      variant="permanent"
      sx={{
        width: `${
          drawerOpen
            ? theme.dimensions.drawer.width.open
            : theme.dimensions.drawer.width.closed
        }`,
        ...(drawerOpen
          ? theme.transitions.drawer.open
          : theme.transitions.drawer.close),
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          overflowX: "hidden",
          whiteSpace: "nowrap",
          width: `${
            drawerOpen
              ? theme.dimensions.drawer.width.open
              : theme.dimensions.drawer.width.closed
          }`,
          ...(drawerOpen
            ? theme.transitions.drawer.open
            : theme.transitions.drawer.close),
        },
      }}
    >
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: theme.spacing(0, 1),
          mt: "0.5em",
          mb: "0.5em",
        }}
      >
        <IconButton
          aria-label="Drawer"
          id="long-button"
          aria-controls={drawerOpen ? "long-menu" : undefined}
          aria-expanded={drawerOpen ? "true" : undefined}
          aria-haspopup="true"
          color="inherit"
          sx={{ pr: "11px" }}
          onClick={() => {
            setDrawerOpen(!drawerOpen);
          }}
        >
          {drawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>
      <List>
        {[...Array(4).keys()].map((_, index) => (
          <ListItem key={`key_${index}`} disablePadding>
            <ListItemButton
              selected={selectedMenu === index}
              onClick={() => setSelectedMenu(index)}
            >
              <ListItemIcon>
                <AppIcon />
              </ListItemIcon>
              <ListItemText primary={`Boutton ${index + 1}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[...Array(3).keys()].map((number, index) => (
          <ListItem key={`key_${number}`} disablePadding>
            <ListItemButton
              selected={selectedSubMenu === index}
              onClick={() => setSelectedSubMenu(index)}
            >
              <ListItemIcon>
                <AppIcon />
              </ListItemIcon>
              <ListItemText primary={`Boutton ${number + 5}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  );
};

export default Drawer;
