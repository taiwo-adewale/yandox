import Image from "next/image";
import { useState } from "react";
import {
  Stack,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import profileImage from "public/assets/profile-card.jpg";
import personImg from "public/assets/profile.jpg";

function ProfileCard() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Detail = ({
    title,
    value,
    icon,
  }: {
    title: string;
    value: string;
    icon: React.ReactNode;
  }) => (
    <Stack spacing="0.375rem" sx={{ width: "100%" }}>
      <Typography
        variant="body2"
        sx={{
          fontSize: "0.875rem !important",
          fontWeight: "500 !important",
        }}
      >
        {title}
      </Typography>

      <Stack
        direction="row"
        spacing="0.625rem"
        sx={{
          p: "0.625rem",
          border: `1px solid ${
            theme.palette.mode === "light" ? "#E4E4E4" : "#272B30"
          }`,
          borderRadius: "0.375rem",
          color: "textPrimary",
          alignItems: "center",
        }}
      >
        {icon}
        <Typography variant="body1" sx={{ fontSize: "0.875rem !important" }}>
          {value}
        </Typography>
      </Stack>
    </Stack>
  );

  return (
    <Stack
      direction={{
        xs: "column",
        md: "row",
      }}
      sx={{
        bgcolor: "cardBg",
        borderRadius: "1rem",
        width: "100%",
        alignItems: {
          md: "center",
          xs: "flex-start",
        },
        gap: "3.75rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          p: {
            xs: "0",
            md: "1rem 0 1rem 1rem",
          },
        }}
      >
        <Box
          sx={{
            overflow: "hidden",
            borderRadius: {
              xs: "1rem",
              md: "1rem 0 0 1rem",
            },
            width: {
              xs: "100%",
              md: "240px",
              lg: "280px",
              xl: "340px",
            },
            height: {
              xs: "280px",
              md: "340px",
              lg: "360px",
              xl: "340px",
            },
          }}
        >
          <Image
            src={profileImage}
            alt=""
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: {
              xs: "1.125rem",
              md: "calc(100% - 2.5rem)",
            },
            top: {
              xs: "calc(100% - 2.5rem)",
              md: "calc(50% -  2.5rem)",
            },
          }}
        >
          <Image
            src={personImg}
            alt="Hawkins Maru"
            style={{ width: "5rem", height: "5rem", borderRadius: "50%" }}
          />
        </Box>
      </Box>

      <Stack
        spacing="1rem"
        direction="row"
        flex={1}
        sx={{
          width: "100%",
          p: { xs: "0 1rem 1.5rem 1rem", md: "1rem 1rem 1rem 0" },
        }}
      >
        <Stack flex={1} spacing="1.875rem">
          <Stack spacing="0.375rem">
            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  md: "1.375rem",
                },
                fontWeight: {
                  xs: "600 !important",
                  md: "500 !important",
                },
                color: "textPrimary.main",
              }}
            >
              Mr. Hawkins Maru
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "0.875rem",
                  md: "1rem",
                },
                color: "textSecondary.main",
              }}
            >
              Admin
            </Typography>
          </Stack>

          <Stack
            spacing={{
              xs: "1.25rem",
              md: "1rem",
              xl: "1.375rem",
            }}
          >
            <Detail
              title="Address"
              value="4517 Washington Ave. Manchaster, Kentucky"
              icon={<LocationOnIcon fontSize="small" />}
            />

            <Stack
              direction={{
                lg: "column",
                xl: "row",
              }}
              spacing={{
                xs: "1.25rem",
                md: "1rem",
                xl: "1.375rem",
              }}
            >
              <Detail
                title="Phone Number"
                value="+0123 456 7890"
                icon={<LocalPhoneRoundedIcon fontSize="small" />}
              />
              <Detail
                title="Email"
                value="hawkins4578@gmail.com"
                icon={<EmailRoundedIcon fontSize="small" />}
              />
            </Stack>
          </Stack>
        </Stack>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
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
              sx: {
                borderRadius: "0.5rem",
                "& .MuiMenuItem-root": {
                  fontSize: "0.875rem",
                },
              },
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Option 2</MenuItem>
            <MenuItem onClick={handleClose}>Option 3</MenuItem>
          </Menu>
        </Box>
      </Stack>
    </Stack>
  );
}

export default ProfileCard;
