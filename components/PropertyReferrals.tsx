import { useState, useEffect } from "react";
import { Stack, Typography, Box, LinearProgress } from "@mui/material";

interface IProps {
  name: string;
  value: number;
  color: string;
}

function PropertyReferrals({ width, rowItems }: LayoutWidth) {
  const referrals = [
    {
      name: "Social Media",
      value: 64,
      color: "#6C5DD3",
    },
    {
      name: "Marketplaces",
      value: 40,
      color: "#7FBA7A",
    },
    {
      name: "Websites",
      value: 50,
      color: "#FFCE73",
    },
    {
      name: "Digital Ads",
      value: 80,
      color: "#FFA2C0",
    },
    {
      name: "Others",
      value: 15,
      color: "#F45252",
    },
  ];

  return (
    <Stack
      sx={{
        backgroundColor: "cardBg",
        borderRadius: "0.625rem",
        px: "1.25rem",
        paddingTop: "1.25rem",
        paddingBottom: "2.375rem",
        width: {
          xs: "100%",
          lg: "calc(50% - 0.625rem)",
          xl: `calc(${width}% - ${(1.25 * (rowItems - 1)) / rowItems}rem)`,
        },
      }}
      spacing="1.25rem"
    >
      <Typography variant="h2">Property Referrals</Typography>

      {referrals.map((referral, index) => (
        <Referral key={`referral-${index}`} {...referral} />
      ))}
    </Stack>
  );
}

function Referral({ name, value, color }: IProps) {
  const [progressVal, setProgressVal] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressVal((prevVal) => {
        if (prevVal >= value) {
          clearInterval(timer);
          return value;
        } else {
          return prevVal + 5;
        }
      });
    }, 80);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack spacing="0.625rem">
      <Stack direction="row" justifyContent="space-between">
        <Typography
          component="span"
          sx={{ color: "textPrimary", fontSize: "1rem", fontWeight: "500" }}
        >
          {name}
        </Typography>

        <Typography
          component="span"
          sx={{ color: "textPrimary", fontSize: "1rem", fontWeight: "500" }}
        >
          {value}%
        </Typography>
      </Stack>

      <Box sx={{ color }}>
        <LinearProgress
          variant="determinate"
          value={progressVal}
          color="inherit"
          sx={{
            height: "0.5rem",
            borderRadius: "0.25rem",
            backgroundColor: "altPrimary.main",
            "&::before": {
              opacity: 0,
            },
          }}
        />
      </Box>
    </Stack>
  );
}

export default PropertyReferrals;
