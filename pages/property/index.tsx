import {
  PageContainer,
  PaginationComponent,
  PropertyList,
  PropertyListFilter,
} from "components";
import { Stack } from "@mui/material";

export default function Property() {
  return (
    <PageContainer title="Property List" buttonText="+ Add Property">
      <Stack
        spacing="1.625rem"
        sx={{ padding: "1.25rem", bgcolor: "cardBg", borderRadius: "1rem" }}
      >
        <PropertyListFilter />
        <PropertyList />
        <PaginationComponent />
      </Stack>
    </PageContainer>
  );
}
