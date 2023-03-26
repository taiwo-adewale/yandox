import { PageContainer, AgentDetails } from "components";
import { Stack } from "@mui/material";

import { agents } from "utils/data";

export default function Agent() {
  return (
    <PageContainer title="Agents List" buttonText="+ Add Agent">
      <Stack spacing="1.5rem">
        {agents.map((agent, index) => (
          <AgentDetails key={`agent-${index}`} {...agent} />
        ))}
      </Stack>
    </PageContainer>
  );
}
