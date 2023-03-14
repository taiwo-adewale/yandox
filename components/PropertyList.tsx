import { useState } from "react";
import Image from "next/image";
import {
  Stack,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  Box,
  IconButton,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import propImage1 from "public/assets/property-large-1.jpg";
import propImage2 from "public/assets/property-large-2.jpg";
import propImage3 from "public/assets/property-large-3.jpg";

function PropertyList() {
  const theme = useTheme();
  const [activeFilter, setActiveFilter] = useState<string>("Popular");
  const [selectFilter, setSelectFilter] = useState<string>("most-recent");

  const properties = [
    {
      image: propImage1,
      name: "Metro Jayakar Apartment",
      location: "North Carolina, USA",
      price: 500,
    },
    {
      image: propImage2,
      name: "Letdo Ji Hotel & Aportment",
      location: "Carolina North, UK",
      price: 450,
    },
    {
      image: propImage3,
      name: "Metro Jayakar Apartment",
      location: "North Carolina, USA",
      price: 650,
    },
    {
      image: propImage2,
      name: "Taiwo Adewale Apartment",
      location: "Lagos, Nigeria",
      price: 340,
    },
  ];

  const handleChange = (event: SelectChangeEvent) => {
    setSelectFilter(event.target.value);
  };

  return (
    <Stack
      sx={{ p: "1.25rem", backgroundColor: "cardBg", borderRadius: "1rem" }}
      spacing="1.125rem"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap="1rem"
        flexWrap={{
          xs: "wrap",
          md: "nowrap",
        }}
      >
        <Typography variant="h2" marginRight="1.5rem">
          Property List
        </Typography>

        <Stack
          direction="row"
          gap="0.625rem"
          flexWrap={{
            xs: "wrap",
            md: "nowrap",
          }}
        >
          {["Popular", "Recommended", "Newest"].map((text, index) => (
            <Button
              key={`property-list-${index}`}
              sx={{
                textTransform: "none",
                backgroundColor:
                  activeFilter === text ? "primary.main" : "secondary.main",
                color: activeFilter === text ? "#FCFCFC" : "textSecondary.main",
                px: "0.625rem",
                py: "0.5rem",
                borderRadius: "0.375rem",
                fontSize: "0.75rem",
                "&:hover": {
                  backgroundColor:
                    activeFilter === text ? "primary.main" : "altPrimary.main",
                  color: activeFilter === text ? "#FCFCFC" : "textPrimary.main",
                },
              }}
              onClick={() => setActiveFilter(text)}
            >
              {text}
            </Button>
          ))}

          <FormControl size="small">
            <Select
              value={selectFilter}
              onChange={handleChange}
              displayEmpty
              IconComponent={ExpandMoreRoundedIcon}
              sx={{
                backgroundColor: "secondary.main",
                color: "textSecondary.main",
                "&:hover": {
                  backgroundColor: "altPrimary.main",
                  color: "textPrimary.main",
                  "& .MuiSelect-icon": {
                    color: "textPrimary.main",
                  },
                },
                "& .MuiInputBase-input": {
                  fontSize: "0.75rem",
                },
                "& .MuiSelect-icon": {
                  color: "textSecondary.main",
                  width: "1.125rem",
                },
                "& fieldset.MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="most-recent">Most Recent</MenuItem>
              <MenuItem value="lowest-price">Lowest Price</MenuItem>
              <MenuItem value="highest-price">Highest Price</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>

      <Stack direction="row" spacing="1.25rem">
        <Swiper
          slidesPerView="auto"
          spaceBetween={24}
          loop={true}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mySwiper"
        >
          {properties.map((item, index) => (
            <SwiperSlide
              key={`property-list-${index}`}
              style={{ maxWidth: "330px" }}
            >
              <Stack spacing="0.625rem">
                <Box>
                  <Image
                    src={item.image}
                    alt={item.name}
                    style={{
                      borderRadius: "0.625rem",
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Stack spacing="0.25rem">
                    <Typography variant="h3">{item.name}</Typography>

                    <Stack direction="row" alignItems="center" spacing="0.3rem">
                      <LocationOnIcon
                        sx={{ width: "1.125rem", height: "1.125rem" }}
                      />
                      <Typography variant="body2">{item.location}</Typography>
                    </Stack>
                  </Stack>

                  <Box
                    sx={{
                      backgroundColor:
                        theme.palette.mode === "light" ? "#DADEFA" : "#111315",
                      borderRadius: "0.25rem",
                      p: "0.5rem",
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        fontSize: "0.75rem !important",
                        color: "primary.main",
                        fontWeight: 600,
                      }}
                    >
                      ${item.price}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>

        <Stack justifyContent="center">
          <IconButton
            className=".swiper-button-next"
            sx={{
              boxShadow:
                theme.palette.mode === "light"
                  ? "0px 6px 11px rgba(133, 123, 123, 0.1)"
                  : "0px 6px 11px rgba(0, 0, 0, 0.1)",
            }}
          >
            <NavigateNextRoundedIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default PropertyList;
