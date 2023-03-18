import { useState } from "react";
import {
  Stack,
  Typography,
  IconButton,
  Divider,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import MoreVertIcon from "@mui/icons-material/MoreVert";

ChartJS.register(CategoryScale);

function Customers({ width, rowItems }: LayoutWidth) {
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

  const options = {
    scales: {
      y: {
        grid: { display: false },
        border: { display: false },
        ticks: { display: false },
      },
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { display: false },
      },
    },
  };

  return (
    <Stack
      sx={{
        backgroundColor: "cardBg",
        borderRadius: "0.625rem",
        width: {
          xs: "100%",
          md: "calc(50% - 0.625rem)",
          xl: `calc(${width}% - ${(1.25 * (rowItems - 1)) / rowItems}rem)`,
        },
      }}
      spacing="0.5rem"
    >
      <Stack sx={{ p: "1.25rem" }} spacing="1.25rem">
        <Stack alignItems="center" direction="row">
          <Typography variant="h2" flex={1}>
            Customer
          </Typography>

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
        </Stack>

        <Stack alignItems="flex-end" direction="row" spacing="0.5rem">
          <Stack spacing="0.75rem" sx={{ width: "50%" }}>
            <Typography
              variant="body2"
              sx={{ fontSize: "0.75rem !important", fontWeight: 600 }}
            >
              Total Customers
            </Typography>

            <Stack spacing="0.25rem">
              <Typography
                color="textPrimary.main"
                sx={{ fontSize: "1.625rem !important", fontWeight: 600 }}
              >
                5007k
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "0.75rem !important", fontWeight: 600 }}
                color="success.main"
              >
                21.77%
              </Typography>
            </Stack>
          </Stack>

          <Box sx={{ width: "50%" }}>
            <Bar
              data={{
                labels: [1, 2, 3, 4, 5],
                datasets: [
                  {
                    data: [9, 20, 13, 17, 10],
                    backgroundColor: [
                      "#A0D7E7",
                      "#2F80ED",
                      "#A0D7E7",
                      "#A0D7E7",
                      "#A0D7E7",
                    ],
                    barPercentage: 1,
                  },
                ],
              }}
              options={options}
            />
          </Box>
        </Stack>
      </Stack>

      <Divider />

      <Stack
        sx={{ p: "1.25rem" }}
        alignItems="flex-end"
        direction="row"
        spacing="0.5rem"
      >
        <Stack sx={{ width: "50%" }} spacing="0.75rem">
          <Typography
            variant="body2"
            sx={{ fontSize: "0.75rem !important", fontWeight: 600 }}
          >
            New Customers This Month
          </Typography>

          <Stack spacing="0.25rem">
            <Typography
              color="textPrimary.main"
              sx={{ fontSize: "1.625rem !important", fontWeight: 600 }}
            >
              21k
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "0.75rem !important", fontWeight: 600 }}
              color="success.main"
            >
              21.77%
            </Typography>
          </Stack>
        </Stack>

        <Box sx={{ width: "50%" }}>
          <Bar
            data={{
              labels: [1, 2, 3, 4, 5],
              datasets: [
                {
                  data: [7, 11, 20, 15, 10],
                  backgroundColor: [
                    "#CFC8FF",
                    "#CFC8FF",
                    "#475BE8",
                    "#CFC8FF",
                    "#CFC8FF",
                  ],
                  barPercentage: 1,
                },
              ],
            }}
            options={options}
          />
        </Box>
      </Stack>
    </Stack>
  );
}

export default Customers;
