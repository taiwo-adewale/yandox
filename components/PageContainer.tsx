import React from "react";
import { Typography, Stack, Box } from "@mui/material";

interface IProps {
  children: React.ReactNode;
  title: string;
}

function PageContainer({ children, title }: IProps) {
  return (
    <Stack sx={{ px: { sm: "1.5rem" }, py: "1.75rem" }} spacing="1.25rem">
      <Box sx={{ px: { xs: "1.125rem", sm: 0 } }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            fontSize: "1.5625rem",
            color: "textPrimary.main",
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box>{children}</Box>
    </Stack>
  );
}

export default PageContainer;
