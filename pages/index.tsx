import { Container, Box } from "@mui/material";
import { LatestSales } from "components";

export default function Home() {
  return (
    <>
      <Container>
        <Box sx={{ maxWidth: "416px" }}>
          <LatestSales />
        </Box>
      </Container>
    </>
  );
}
