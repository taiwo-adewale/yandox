import { Stack, Typography, Pagination } from "@mui/material";

function PaginationComponent() {
  return (
    <Stack
      justifyContent="space-between"
      direction={{ xs: "column", sm: "row" }}
      alignItems="center"
      spacing="1rem"
    >
      <Typography variant="body1">Showing 1 to 8 Properties</Typography>

      <Stack
        sx={{
          ".MuiPaginationItem-text": {
            color: "textSecondary.main",
          },
          ".Mui-selected": {
            color: "#FCFCFC",
          },
          backgroundColor: "cardBg",
          py: "0.325rem",
          px: "0.5rem",
          borderRadius: "0.375rem",
        }}
      >
        <Pagination count={5} color="primary" shape="rounded" size="medium" />
      </Stack>
    </Stack>
  );
}

export default PaginationComponent;
