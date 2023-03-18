import { useState, useEffect } from "react";
import { Stack, Typography, Box, LinearProgress } from "@mui/material";

import { referrals } from "utils/data";

interface IProps {
  name: string;
  value: number;
  color: string;
}

function PropertyReferrals({ width, rowItems }: LayoutWidth) {
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
          md: "calc(50% - 0.625rem)",
          xl: `calc(${width}% - ${(1.25 * (rowItems - 1)) / rowItems}rem)`,
        },
      }}
      spacing="1.25rem"
    >
      <Typography variant="h2">Property Referrals</Typography>

      <Stack spacing="1.25rem">
        {referrals.map((referral, index) => (
          <Referral key={`referral-${index}`} {...referral} />
        ))}
      </Stack>
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
