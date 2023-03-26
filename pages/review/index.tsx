import { useState } from "react";
import { PageContainer, RatingComponent } from "components";
import { Stack, Box, Tabs, Tab } from "@mui/material";

import { reviews } from "utils/data";

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

export default function Review() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function TabPanel(props: TabPanelProps) {
    const { children, value, index } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
      >
        {value === index && children}
      </div>
    );
  }

  return (
    <PageContainer title="Review List">
      <Stack spacing="1.5rem">
        <Box
          sx={{
            bgcolor: "cardBg",
            borderRadius: "1rem",
            px: {
              xs: "0.75rem",
              sm: "1rem",
            },
            mx: {
              xs: "1rem",
              sm: 0,
            },
            width: {
              sm: "fit-content",
            },
            "& .MuiTabs-flexContainer": {
              justifyContent: "center",
            },
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 500,
              color: "textSecondary.main",
              px: {
                xs: "0.5rem",
                sm: "1rem",
              },
              minWidth: {
                xs: "70px",
                sm: "90px",
              },
            },
            "& .MuiTab-root.Mui-selected": {
              color: "primary.main",
              fontWeight: 700,
            },
          }}
        >
          <Tabs value={value} onChange={handleChange}>
            <Tab label="All Reviews" />
            <Tab label="Good" />
            <Tab label="Bad" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Stack spacing="1.5rem">
            {reviews.map((item, index) => (
              <RatingComponent key={`rating-${index}`} {...item} />
            ))}
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Stack spacing="1.5rem">
            {reviews
              .filter((item) => item.ratingType === "good")
              .map((item, index) => (
                <RatingComponent key={`rating-${index}`} {...item} />
              ))}
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Stack spacing="1.5rem">
            {reviews
              .filter((item) => item.ratingType === "bad")
              .map((item, index) => (
                <RatingComponent key={`rating-${index}`} {...item} />
              ))}
          </Stack>
        </TabPanel>
      </Stack>
    </PageContainer>
  );
}
