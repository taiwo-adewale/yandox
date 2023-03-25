import { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { revenueChartData as data } from "utils/data";
import { manrope } from "utils/theme";

ChartJS.register(CategoryScale);

function TotalRevenue({ width, rowItems }: LayoutWidth) {
  const theme = useTheme();

  ChartJS.defaults.color =
    theme.palette.mode === "light" ? "#808191" : "#6F767E";
  ChartJS.defaults.font.size = 12;
  ChartJS.defaults.font.weight = "400";
  ChartJS.defaults.font.family = manrope.style.fontFamily;
  ChartJS.defaults.plugins.legend.display = false;
  ChartJS.defaults.responsive = true;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getRevenueData = (items: number) => {
    return {
      labels: data.slice(0, items).map((item) => item.month),
      datasets: [
        {
          label: "Last Month",
          data: data.slice(0, items).map((item) => item.lastRevenue),
          backgroundColor: "#475BE8",
          borderRadius: 4,
          borderSkipped: false,
        },
        {
          label: "Running Month",
          data: data.slice(0, items).map((item) => item.runningRevenue),
          backgroundColor: "#CFC8FF",
          borderRadius: 4,
          borderSkipped: false,
        },
      ],
    };
  };

  return (
    <Stack
      sx={{
        backgroundColor: "cardBg",
        borderRadius: "0.625rem",
        px: "1.25rem",
        py: "1.25rem",
        width: {
          xs: "100%",
          xl: `calc(${width}% - ${(1.25 * (rowItems - 1)) / rowItems}rem)`,
        },
      }}
      spacing="1.25rem"
    >
      <Stack
        direction="row"
        sx={{
          flexWrap: { xs: "wrap", md: "nowrap" },
          alignItems: "center",
          columnGap: "2rem",
          rowGap: "0.75rem",
        }}
      >
        <Box sx={{ flexGrow: { xs: 1, md: 0 }, flexShrink: 0 }}>
          <Typography variant="h2">Total Revenue</Typography>
        </Box>

        <Stack
          direction="row"
          spacing="0.625rem"
          sx={{
            alignItems: "center",
            width: "100%",
            justifyContent: {
              md: "flex-end",
            },
            order: {
              xs: 3,
              md: 2,
            },
          }}
        >
          <Stack
            direction="row"
            spacing="0.375rem"
            sx={{ alignItems: "center" }}
          >
            <Box
              sx={{
                width: "0.875rem",
                height: "0.875rem",
                borderRadius: "50%",
                backgroundColor: "#475BE8",
              }}
            ></Box>
            <Typography
              variant="body2"
              sx={{ fontSize: "0.75rem !important", fontWeight: 500 }}
            >
              Last Month
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing="0.375rem"
            sx={{ alignItems: "center" }}
          >
            <Box
              sx={{
                width: "0.875rem",
                height: "0.875rem",
                borderRadius: "50%",
                backgroundColor: "#CFC8FF",
              }}
            ></Box>
            <Typography
              variant="body2"
              sx={{ fontSize: "0.75rem !important", fontWeight: 500 }}
            >
              Running Month
            </Typography>
          </Stack>
        </Stack>

        <Box
          sx={{
            order: {
              xs: 2,
              md: 3,
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

      <Stack direction="row" alignItems="center" spacing="2.25rem">
        <Typography
          variant="h1"
          component="span"
          sx={{ fontSize: "1.75rem !important", fontWeight: "700" }}
        >
          $236,535
        </Typography>

        <Stack direction="row" alignItems="center" spacing="0.875rem">
          <Box
            sx={{
              bgcolor: "primary.main",
              borderRadius: "50%",
              color: "#FCFCFC",
              width: "1.75rem",
              height: "1.75rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ArrowUpwardIcon fontSize="small" />
          </Box>
          <Stack>
            <Typography
              sx={{ fontSize: "0.9375rem !important", fontWeight: "500" }}
              color="primary.main"
            >
              0.8%
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.75rem !important" }}>
              Than last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* mobile chart */}
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <Bar
          data={getRevenueData(4)}
          options={{
            scales: {
              y: {
                grid: { display: false },
                border: { display: false },
                ticks: {
                  stepSize: 200,
                  callback: function (value) {
                    return value + "k";
                  },
                  padding: 0,
                },
              },
              x: {
                grid: { display: false },
                border: { display: false },
              },
            },
          }}
        />
      </Box>

      <Box
        sx={{
          display: { xs: "none", sm: "block", height: "220px" },
        }}
      >
        <Bar
          data={getRevenueData(7)}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                grid: { display: false },
                border: { display: false },
                ticks: {
                  stepSize: 200,
                  callback: function (value) {
                    return value + "k";
                  },
                },
              },
              x: {
                grid: { display: false },
                border: { display: false },
              },
            },
          }}
        />
      </Box>
    </Stack>
  );
}

export default TotalRevenue;
