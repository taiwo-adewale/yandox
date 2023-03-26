import { useState } from "react";
import Image from "next/image";

import {
  Stack,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import agent1 from "public/assets/agent-1.jpg";
import agent2 from "public/assets/agent-2.jpg";
import agent3 from "public/assets/agent-3.jpg";
import { NextLinkComposed } from "utils/Link";

function TopAgent({ width, rowItems }: LayoutWidth) {
  const topAgents = [
    {
      name: "Benny Chagur",
      image: agent1,
    },
    {
      name: "Chynita Heree",
      image: agent2,
    },
    {
      name: "David Yers",
      image: agent3,
    },
  ];

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
      sx={{
        p: "1.25rem",
        backgroundColor: "cardBg",
        borderRadius: "0.625rem",
        width: {
          xs: "100%",
          md: "calc(50% - 0.625rem)",
          xl: `calc(${width}% - ${(1.25 * (rowItems - 1)) / rowItems}rem)`,
        },
      }}
      spacing="1.25rem"
    >
      <Stack alignItems="center" direction="row">
        <Typography variant="h2" flex={1}>
          Top Agent
        </Typography>

        {/* @ts-ignore */}
        <Button
          variant="outlined"
          component={NextLinkComposed}
          to="/agent"
          //@ts-ignore
          color="textSecondary"
          sx={{ fontWeight: 600, textTransform: "capitalize !important" }}
        >
          View All
        </Button>
      </Stack>

      {topAgents.map((agent, index) => (
        <Stack
          key={`agent-${index}`}
          direction="row"
          spacing="0.625rem"
          alignItems="center"
        >
          <Image
            src={agent.image}
            alt={agent.name}
            width={50}
            height={50}
            style={{
              objectFit: "cover",
              borderRadius: "0.625rem",
            }}
          />

          <Stack flex={1}>
            <Typography
              variant="h3"
              color="textPrimary"
              marginBottom="0.375rem"
            >
              {agent.name}
            </Typography>
            <Typography variant="body2">Top Agent</Typography>
          </Stack>

          <Box>
            <IconButton
              aria-label="open more"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              size="small"
              onClick={handleClick}
            >
              <MoreVertIcon sx={{ color: "textSecondary.main" }} />
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
      ))}
    </Stack>
  );
}

export default TopAgent;
