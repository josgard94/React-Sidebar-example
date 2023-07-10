import React from "react";
import {
  Drawer,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SummarizeIcon from "@mui/icons-material/Summarize";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          backgroundColor: "#17181b",
          color: "#fff",
          boxSizing: "border-box",
        },
        "& .MuiListItemIcon-root": {
          color: "#fff",
          opacity: 0.5,
        },
      }}
    >
      <List sx={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
        <ListItemButton
          component={Link}
          to="React-Sidebar-example/"
          sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              style: {
                color: (theme) => theme.palette.primary.main,
                opacity: 0.5,
              },
            }}
            primary="HOME"
          />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="React-Sidebar-example/cats"
          sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              style: {
                color: (theme) => theme.palette.primary.main,
                opacity: 0.5,
              },
            }}
            primary="CATS"
          />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="React-Sidebar-example/dogs"
          sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}
        >
          <ListItemIcon>
            <SummarizeIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              style: {
                color: (theme) => theme.palette.primary.main,
                opacity: 0.5,
              },
            }}
            primary="DOGS"
          />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
