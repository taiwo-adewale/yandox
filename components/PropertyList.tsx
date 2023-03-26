import Image from "next/image";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

import { properties } from "utils/data";

function PropertyList() {
  const theme = useTheme();

  return (
    <Stack>
      <Grid container spacing="1.5rem">
        {properties.map((property, index) => (
          // @ts-ignore
          <Grid key={`property-${index}`} item xs={12} md={6} xxl={4}>
            <Stack
              sx={{
                flexWrap: { xs: "wrap", sm: "nowrap" },
                gap: "0.625rem",
                flexDirection: {
                  xs: "row",
                  md: "column",
                  xl: "row",
                },
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: "40%",
                    sm: "50%",
                    md: "100%",
                    xl: "200px",
                  },
                  minWidth: "180px",
                  flexGrow: {
                    xs: 1,
                    sm: 0,
                  },
                }}
              >
                <Image
                  src={property.image}
                  alt={property.name}
                  style={{
                    borderRadius: "0.625rem",
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Box>

              <Stack
                spacing="0.75rem"
                flex="1"
                justifyContent="space-between"
                sx={{
                  minWidth: "180px",
                  flexGrow: 1,
                }}
              >
                <Box
                  sx={{
                    backgroundColor:
                      theme.palette.mode === "light" ? "#DADEFA" : "#111315",
                    borderRadius: "0.25rem",
                    px: "0.5rem",
                    py: "0.25rem",
                    width: "fit-content",
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
                    ${property.price * 4.5}
                  </Typography>
                </Box>

                <Stack spacing="0.375rem">
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { sm: "1rem" }, fontWeight: "600" }}
                  >
                    {property.name}
                  </Typography>
                  <Typography variant="body2">{property.location}</Typography>
                </Stack>

                <Stack direction="row" spacing="1.5rem">
                  <Stack
                    direction="row"
                    spacing="0.25rem"
                    color="textSecondary.main"
                  >
                    <BedOutlinedIcon
                      sx={{ width: "1.125rem", height: "1.125rem" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.75rem !important",
                        fontWeight: "400 !important",
                      }}
                    >
                      3 Beds
                      {/* {Math.floor(Math.random() * 3) + 3} Beds */}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing="0.25rem"
                    color="textSecondary.main"
                  >
                    <ZoomOutMapIcon
                      sx={{
                        width: "1.125rem",
                        height: "1.125rem",
                        transform: "rotate(45deg)",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.75rem !important",
                        fontWeight: "400 !important",
                      }}
                    >
                      26M
                      {/* {Math.floor(Math.random() * 10) + 20}M */}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default PropertyList;
