import { Stack, Box } from "@mui/material";
import {
  PageContainer,
  DashboardCards,
  PropertyListHome,
  PropertyReferrals,
  TopAgent,
  LatestSales,
  TotalRevenue,
  Customers,
} from "components";

export default function Home() {
  return (
    <PageContainer title="Dashboard">
      <Stack spacing="1.5rem">
        <DashboardCards />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            rowGap: "1.5rem",
            columnGap: "1.25rem",
          }}
        >
          <TotalRevenue width={65} rowItems={2} />
          <PropertyReferrals width={35} rowItems={2} />
          <TopAgent width={33} rowItems={3} />
          <Customers width={30} rowItems={3} />
          <LatestSales width={37} rowItems={3} />
        </Box>

        <PropertyListHome />
      </Stack>
    </PageContainer>
  );
}
