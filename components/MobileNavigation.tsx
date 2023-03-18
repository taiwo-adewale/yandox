import React from "react";
import {
  SwipeableDrawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NextLinkComposed } from "utils/Link";
import { useRouter } from "next/router";
import { Logo } from ".";

import { navLinks } from "utils/data";

interface IProps {
  mobileOpen: boolean;
  setMobileOpen: (val: boolean) => void;
}

function MobileNavigation({ mobileOpen, setMobileOpen }: IProps) {
  const drawerWidth = 250;
  const router = useRouter();
  const pathname = router.pathname;

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <Box component="nav">
      <SwipeableDrawer
        variant="temporary"
        open={mobileOpen}
        onOpen={() => setMobileOpen(true)}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        disableDiscovery={iOS}
        disableSwipeToOpen
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "cardBg",
            backgroundImage: "none",
          },
        }}
      >
        <List
          sx={{
            px: "1rem",
            paddingTop: "0.5rem",
            paddingBottom: "2.5rem",
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
          <Logo mobile={true} setMobileOpen={setMobileOpen} />
          {navLinks.map((link, index) => (
            <ListItem
              key={`navLink-${index}`}
              sx={{
                backgroundColor:
                  pathname === link.url ? "primary.main" : "transparent",
                "& .MuiListItemText-primary, & .MuiListItemIcon-root": {
                  color:
                    pathname === link.url ? "#FCFCFC" : "textSecondary.main",
                },
                "& .MuiListItemText-primary": {
                  fontSize: "0.875rem !important",
                  fontWeight: "700",
                },
              }}
              disablePadding
            >
              <ListItemButton
                onClick={() => setMobileOpen(false)}
                component={NextLinkComposed}
                to={link.url}
              >
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </Box>
  );
}

export default MobileNavigation;
