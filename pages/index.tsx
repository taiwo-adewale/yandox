import { Container, Box, Stack } from "@mui/material";
import {
  PropertyList,
  AgentDetails,
  DashboardCards,
  LatestSales,
  PaginationComponent,
  PropertyReferrals,
  TopAgent,
} from "components";

export default function Home() {
  return (
    <>
      <Container>
        <PropertyList />

        <Box sx={{ maxWidth: "400px", mx: "auto", paddingTop: "2rem" }}>
          <Stack spacing="2rem">
            <LatestSales />
            <PropertyReferrals />
            <TopAgent />
          </Stack>
        </Box>

        <Stack spacing="2rem" paddingTop="2rem" paddingBottom="2rem">
          <AgentDetails />
          <DashboardCards />
          <PaginationComponent />
        </Stack>
      </Container>
    </>
  );
}
