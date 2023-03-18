import React from "react";
import {
  IconButton,
  Badge,
  Menu,
  ListItemIcon,
  ListItemText,
  Stack,
  ListItem,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

function TopBarNotifications() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const notifications = [
    {
      title: "Payment Success",
      icon: <CustomPaymentIcon />,
      description:
        "Payment success in your order from star sun apartment in the amount of $320",
      time: "10 minutes ago",
    },
    {
      title: "Update Apps",
      icon: <CustomSettingsIcon />,
      description: "The application has made updates to improve services",
      time: "23 minutes ago",
    },
    {
      title: "Booking Success",
      icon: <CustomBookingIcon />,
      description: "You completed the order from star sun hotel and apartment",
      time: "47 minutes ago",
    },
  ];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick} sx={{ ml: 1 }}>
        <Badge
          color="error"
          overlap="circular"
          variant="dot"
          sx={{
            "& .MuiBadge-dot": {
              top: "0.5rem",
              right: "0.4375rem",
            },
          }}
        >
          {/* @ts-ignore */}
          <NotificationsNoneRoundedIcon color="textSecondary" />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          variant: "outlined",
          sx: {
            backgroundColor: "cardBg",
            marginTop: "1.75rem",
            width: "90%",
            maxWidth: "22.5rem",
            minWidth: "15rem",
            boxShadow:
              theme.palette.mode === "light"
                ? "0px 40px 50px 1px rgba(120, 114, 114, 0.15)"
                : "0px 60px 30px -10px rgba(0, 0, 0, 0.2)",
            borderRadius: "0.625rem",
            px: "1.25rem",
            "& .MuiListItem-root": {
              py: "1.25rem",
              px: 0,
            },
            "& .MuiListItemIcon-root": {
              p: { xs: "0.5rem", sm: "0.625rem" },
              mt: "0",
              mr: "0.625rem",
              minWidth: "auto",
              borderRadius: "0.3125rem",
              color: "#FCFCFC",
            },
            "& .MuiListItemText-root": {
              m: 0,
            },
          },
        }}
      >
        {notifications.map((item, index) => [
          <ListItem alignItems="flex-start" key={`notification-${index}`}>
            {item.icon}

            <ListItemText
              disableTypography
              primary={
                <Typography
                  variant="body1"
                  sx={{ fontSize: "0.875rem !important", fontWeight: 600 }}
                >
                  {item.title}
                </Typography>
              }
              secondary={
                <Stack spacing="0.25rem" paddingTop="0.25rem">
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{
                      fontSize: "0.75rem !important",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Typography sx={{ fontSize: "0.75rem !important" }}>
                    {item.time}
                  </Typography>
                </Stack>
              }
            />
          </ListItem>,
          index < notifications.length - 1 && <Divider />,
        ])}
      </Menu>
    </>
  );
}

const CustomPaymentIcon = () => (
  <ListItemIcon sx={{ backgroundColor: "#38B259" }}>
    <AccountBalanceWalletIcon fontSize="small" />
  </ListItemIcon>
);

const CustomSettingsIcon = () => (
  <ListItemIcon sx={{ backgroundColor: "#006CE4" }}>
    <SettingsRoundedIcon fontSize="small" />
  </ListItemIcon>
);

const CustomBookingIcon = () => (
  <ListItemIcon sx={{ backgroundColor: "#EC4E2C" }}>
    <CalendarTodayOutlinedIcon fontSize="small" />
  </ListItemIcon>
);

export default TopBarNotifications;
