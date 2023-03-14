import Image from "next/image";
import { useState } from "react";
import {
  Stack,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ApartmentIcon from "@mui/icons-material/Apartment";

import agent1 from "public/assets/agent-1-large.jpg";

function AgentDetails() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      sx={{ p: "1.25rem", backgroundColor: "cardBg", borderRadius: "0.625rem" }}
      spacing="1.25rem"
      direction={{
        xs: "column",
        sm: "row",
      }}
    >
      <Box
        sx={{
          maxWidth: {
            xs: "300px",
            sm: "225px",
            md: "250px",
          },
        }}
      >
        <Image
          src={agent1}
          alt="seller"
          style={{
            borderRadius: "0.5rem",
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </Box>

      <Stack direction="row" spacing="1.25rem" flex={1}>
        <Stack
          sx={{ flex: 1, justifyContent: "space-between", py: "0.25rem" }}
          spacing="1.5rem"
        >
          <Stack
            direction="row"
            spacing="1.25rem"
            justifyContent="space-between"
          >
            <Stack spacing="0.5rem">
              <Typography
                variant="h2"
                sx={{
                  md: {
                    fontSize: "1.375rem",
                  },
                  xs: {
                    fontSize: "0.875rem",
                  },
                }}
              >
                Karen Eilla Boyette
              </Typography>

              <Typography variant="body2">Real-Estate Agent</Typography>
            </Stack>

            <Box>
              <IconButton
                aria-label="open more"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                size="small"
                onClick={handleClick}
              >
                <MoreHorizIcon sx={{ color: "textSecondary.main" }} />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "open more",
                }}
                PaperProps={{
                  variant: "outlined",
                  elevation: 0,
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Option 2</MenuItem>
                <MenuItem onClick={handleClose}>Option 3</MenuItem>
              </Menu>
            </Box>
          </Stack>

          <Box
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(1, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            gap={2}
          >
            <Stack
              direction="row"
              spacing="0.625rem"
              alignItems="center"
              gridColumn="span 1"
              sx={{ color: "textSecondary.main" }}
            >
              <MailIcon sx={{ width: "1.125rem", height: "1.125rem" }} />
              <Typography variant="body2">kareneboyette@armyspy.com</Typography>
            </Stack>

            <Stack
              direction="row"
              spacing="0.625rem"
              alignItems="center"
              gridColumn="span 1"
              sx={{ color: "textSecondary.main" }}
            >
              <LocationOnIcon sx={{ width: "1.125rem", height: "1.125rem" }} />
              <Typography variant="body2">Manchester</Typography>
            </Stack>

            <Stack
              direction="row"
              spacing="0.625rem"
              alignItems="center"
              gridColumn="span 1"
              sx={{ color: "textSecondary.main" }}
            >
              <LocalPhoneIcon sx={{ width: "1.125rem", height: "1.125rem" }} />
              <Typography variant="body2">+502-324-4194</Typography>
            </Stack>

            <Stack
              direction="row"
              spacing="0.625rem"
              alignItems="center"
              gridColumn="span 1"
              sx={{ color: "textSecondary.main" }}
            >
              <ApartmentIcon sx={{ width: "1.125rem", height: "1.125rem" }} />
              <Typography variant="body2">15 Properties</Typography>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default AgentDetails;
