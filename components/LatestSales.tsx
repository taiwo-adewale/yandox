import Image from "next/image";

import { Stack, Typography, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import propImage1 from "public/assets/property-1.jpg";
import propImage2 from "public/assets/property-2.jpg";
import propImage3 from "public/assets/property-3.jpg";

function LatestSales() {
  const latestSales = [
    {
      image: propImage1,
      name: "Metro Jayakar Apartment",
      location: "North Carolina, USA",
      price: 35,
    },
    {
      image: propImage2,
      name: "Letdo Ji Hotel & Aportment",
      location: "Carolina North, UK",
      price: 40,
    },
    {
      image: propImage3,
      name: "Metro Jayakar Apartment",
      location: "North Carolina, USA",
      price: 55,
    },
  ];

  return (
    <Stack
      sx={{
        p: "1.25rem",
        backgroundColor: "cardBg",
        borderRadius: "0.625rem",
      }}
      spacing="1.25rem"
    >
      <Stack alignItems="center" direction="row">
        <Typography variant="h2" flex={1}>
          Latest Sales
        </Typography>

        <ArrowForwardIcon
          sx={{
            color: "textSecondary.main",
            "&:hover": { color: "primary.main" },
            cursor: "pointer",
            transition: "all 0.3s",
          }}
        />
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
