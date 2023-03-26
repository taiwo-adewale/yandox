import Image from "next/image";
import { Stack, Typography, Button, Chip, Rating } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

function RatingComponent({
  name,
  id,
  dateJoined,
  time,
  rating,
  ratingType,
  ratingChips,
  image,
}: Reviews) {
  return (
    <Stack
      sx={{
        backgroundColor: "cardBg",
        borderRadius: "1.25rem",
        px: "1.5rem",
        paddingTop: "1.5rem",
        paddingBottom: "1.875rem",
        width: "100%",
        flexWrap: {
          xs: "wrap",
          lg: "nowrap",
        },
      }}
      gap="1.875rem"
      direction="row"
    >
      <Stack
        direction="row"
        spacing="1rem"
        sx={{ width: { sm: "46%", lg: "25%" } }}
      >
        <Image
          src={image}
          alt="rater"
          width={70}
          height={70}
          style={{ borderRadius: "0.625rem" }}
        />

        <Stack spacing="0.25rem">
          <Typography
            variant="body1"
            sx={{ color: "primary.main", fontWeight: "400 !important" }}
          >
            {id}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "500 !important" }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "400 !important" }}>
            Join On {dateJoined}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "400 !important" }}>
            {time}
          </Typography>
        </Stack>
      </Stack>

      <Stack
        spacing="1rem"
        sx={{
          width: { lg: "50%" },
          order: { xs: 2, sm: 3, lg: 2 },
        }}
      >
        <Stack>
          <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
            {ratingType === "good" ? "Friendly" : "Bad"} service
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
            Josh, Lunar and everyone at Just Property in Hastings deserved a big
            Thank You from us for moving us from Jakarta to Medan during the
            lockdown
          </Typography>
        </Stack>

        <Stack
          direction="row"
          gap="0.625rem"
          sx={{ flexWrap: { xs: "wrap", sm: "nowrap" } }}
        >
          {ratingChips.map((item, index) => (
            <Chip
              key={`rating-chip-${index}`}
              label={item.toUpperCase()}
              variant="outlined"
              color={ratingType === "good" ? "primary" : "error"}
              size="medium"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
              }}
            />
          ))}
        </Stack>
      </Stack>

      <Stack
        spacing="1rem"
        sx={{
          width: { sm: "46%", lg: "25%" },
          alignSelf: "center",
          alignItems: "flex-end",
          order: { xs: 3, sm: 2, lg: 3 },
        }}
      >
        <Stack direction="row" spacing="0.375rem" alignItems="center">
          <Typography sx={{ fontSize: "1.375rem !important", fontWeight: 600 }}>
            {rating}.0
          </Typography>

          <Rating
            icon={<StarRoundedIcon />}
            emptyIcon={<StarOutlineRoundedIcon />}
            value={rating}
            readOnly
          />
        </Stack>
        <Stack direction="row" spacing="0.625rem">
          <Button
            variant="outlined"
            color="error"
            sx={{ textTransform: "none", borderRadius: "1.125rem !important" }}
          >
            Reject
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{
              textTransform: "none",
              borderRadius: "1.125rem !important",
              color: "#FCFCFC",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
            disableElevation={true}
          >
            Approve
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default RatingComponent;
