import Image from "next/image";

import { Stack, Typography, Box, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { latestSales } from "utils/data";

function LatestSales({ width, rowItems }: LayoutWidth) {
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
          Latest Sales
        </Typography>

        <IconButton aria-label="go to latest sales page">
          <ArrowForwardIcon
            sx={{
              color: "textSecondary.main",
            }}
          />
        </IconButton>
      </Stack>

      {latestSales.map((item, index) => (
        <Stack
          key={`sale-${index}`}
          direction="row"
          spacing="0.625rem"
          alignItems="center"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={60}
            height={55}
            style={{
              objectFit: "cover",
              borderRadius: "0.375rem",
            }}
          />

          <Stack flex={1}>
            <Typography
              variant="h3"
              color="textPrimary"
              marginBottom="0.375rem"
            >
              {item.name}
            </Typography>
            <Typography variant="body2">{item.location}</Typography>
          </Stack>

          <Box>
            <Typography
              variant="h2"
              component="span"
              sx={{ color: "primary.main" }}
            >
              +${item.price}
            </Typography>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
}

export default LatestSales;
