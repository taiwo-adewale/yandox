import { PageContainer, PropertyListHome, ProfileCard } from "components";
import { Stack } from "@mui/material";

export default function Profile() {
  return (
    <PageContainer title="My Profile">
      <Stack spacing="1.25rem">
        <ProfileCard />
        <PropertyListHome />
      </Stack>
    </PageContainer>
  );
}
