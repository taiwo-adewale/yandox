import {
  Drawer,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NextLinkComposed } from "utils/Link";
import { useRouter } from "next/router";

import { navLinks } from "utils/data";

function DesktopNavigation() {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <Drawer
      sx={{
        width: "250px",
        flexShrink: 0,
        display: {
          xs: "none",
          lg: "block",
        },
        "& .MuiDrawer-paper": {
          width: "250px",
          boxSizing: "border-box",
          zIndex: 1000,
          backgroundColor: "cardBg",
          border: "none",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* Makes sure fixed Appbar is not on top of another element */}
      <Box sx={{ py: "0.5rem" }}>
        <Toolbar />
      </Box>

      <List
        sx={{
          px: "1rem",
          py: "1.5rem",
          "& .MuiListItem-root": {
            borderRadius: "0.75rem",
            overflow: "hidden",
            marginBottom: "0.25rem",
          },
          "& .MuiListItemButton-root": { py: "0.75rem", px: "1.5rem" },
          "& .MuiListItemIcon-root": {
            minWidth: "auto",
            marginRight: "0.625rem",
          },
        }}
      >
        {navLinks.map((link, index) => (
          <ListItem
            key={`navLink-${index}`}
            sx={{
              backgroundColor:
                pathname === link.url ? "primary.main" : "transparent",
              "& .MuiListItemText-primary, & .MuiListItemIcon-root": {
                color: pathname === link.url ? "#FCFCFC" : "textSecondary.main",
              },
              "& .MuiListItemText-primary": {
                fontSize: "0.875rem !important",
                fontWeight: "700",
              },
            }}
            disablePadding
          >
            <ListItemButton component={NextLinkComposed} to={link.url}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default DesktopNavigation;
