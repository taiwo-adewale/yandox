import { useState } from "react";
import {
  Stack,
  FormControl,
  Select,
  MenuItem,
  SvgIcon,
  SvgIconProps,
  InputBase,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { SelectChangeEvent } from "@mui/material/Select";

function PropertyListFilter() {
  const [status, setStatus] = useState<string>("any-status");
  const [type, setType] = useState<string>("any-type");
  const [country, setCountry] = useState<string>("all-countries");
  const [state, setState] = useState<string>("all-states");

  const selectSx = {
    backgroundColor: "secondary.main",
    borderRadius: "0.5rem",
    color: "textSecondary.main",
    "&:hover": {
      backgroundColor: "altPrimary.main",
      color: "textPrimary.main",
      "& .MuiSelect-icon": {
        color: "textPrimary.main",
      },
    },
    "& .MuiInputBase-input": {
      fontSize: "0.75rem",
    },
    "& .MuiSelect-icon": {
      color: "textSecondary.main",
      width: "1.125rem",
    },
    "& fieldset.MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  };

  const Search = styled("div")(() => ({
    position: "relative",
    flex: 2,
  }));

  const SearchIconWrapper = styled("div")(() => ({
    padding: "0.75rem",
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    zIndex: 2,
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // @ts-ignore
    fontSize: "0.75rem !important",
    fontWeight: "300 !important",
    width: "100%",
    "& .MuiInputBase-input": {
      borderRadius: "0.5rem",
      padding: "0.625rem",
      paddingLeft: "2.25rem",
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  return (
    <Grid container spacing="0.625rem">
      <Grid item xs={12} sm={8} md={4}>
        <Search>
          <SearchIconWrapper>
            <SearchSvg sx={{ width: "1rem", height: "1rem" }} />
          </SearchIconWrapper>

          <StyledInputBase
            placeholder="Enter an address, city or Zip code"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Grid>

      <Grid item xs={6} sm={4} md={2}>
        <FormControl size="small" sx={{ flex: 1, width: "100%" }}>
          <Select
            value={status}
            onChange={(event: SelectChangeEvent) =>
              setStatus(event.target.value)
            }
            displayEmpty
            IconComponent={ExpandMoreRoundedIcon}
            sx={selectSx}
          >
            <MenuItem value="any-status">Any Status</MenuItem>
            <MenuItem value="for-sale">For Sale</MenuItem>
            <MenuItem value="for-rent">For Rent</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6} sm={4} md={2}>
        <FormControl size="small" sx={{ flex: 1, width: "100%" }}>
          <Select
            value={type}
            onChange={(event: SelectChangeEvent) => setType(event.target.value)}
            displayEmpty
            IconComponent={ExpandMoreRoundedIcon}
            sx={selectSx}
          >
            <MenuItem value="any-type">Any Type</MenuItem>
            <MenuItem value="apartments">Apartments</MenuItem>
            <MenuItem value="houses">Houses</MenuItem>
            <MenuItem value="commercial">Commercial</MenuItem>
            <MenuItem value="garages">Garages</MenuItem>
            <MenuItem value="lots">Lots</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6} sm={4} md={2}>
        <FormControl size="small" sx={{ flex: 1, width: "100%" }}>
          <Select
            value={country}
            onChange={(event: SelectChangeEvent) =>
              setCountry(event.target.value)
            }
            displayEmpty
            IconComponent={ExpandMoreRoundedIcon}
            sx={selectSx}
          >
            <MenuItem value="all-countries">All Countries</MenuItem>
            <MenuItem value="apartments">Apartments</MenuItem>
            <MenuItem value="houses">Houses</MenuItem>
            <MenuItem value="commercial">Commercial</MenuItem>
            <MenuItem value="garages">Garages</MenuItem>
            <MenuItem value="lots">Lots</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6} sm={4} md={2}>
        <FormControl size="small" sx={{ flex: 1, width: "100%" }}>
          <Select
            value={state}
            onChange={(event: SelectChangeEvent) =>
              setState(event.target.value)
            }
            displayEmpty
            IconComponent={ExpandMoreRoundedIcon}
            sx={selectSx}
          >
            <MenuItem value="all-states">All States</MenuItem>
            <MenuItem value="apartments">Apartments</MenuItem>
            <MenuItem value="houses">Houses</MenuItem>
            <MenuItem value="commercial">Commercial</MenuItem>
            <MenuItem value="garages">Garages</MenuItem>
            <MenuItem value="lots">Lots</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

function SearchSvg(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg viewBox="0 0 16 16">
        <path
          d="M12.803 13.8637C13.0959 14.1566 13.5708 14.1566 13.8637 13.8637C14.1566 13.5708 14.1566 13.0959 13.8637 12.803L12.803 13.8637ZM11.25 7C11.25 9.34721 9.34721 11.25 7 11.25V12.75C10.1756 12.75 12.75 10.1756 12.75 7H11.25ZM7 11.25C4.65279 11.25 2.75 9.34721 2.75 7H1.25C1.25 10.1756 3.82436 12.75 7 12.75V11.25ZM2.75 7C2.75 4.65279 4.65279 2.75 7 2.75V1.25C3.82436 1.25 1.25 3.82436 1.25 7H2.75ZM7 2.75C9.34721 2.75 11.25 4.65279 11.25 7H12.75C12.75 3.82436 10.1756 1.25 7 1.25V2.75ZM13.8637 12.803L11.0719 10.0113L10.0113 11.0719L12.803 13.8637L13.8637 12.803Z"
          fill="#808191"
        />
      </svg>
    </SvgIcon>
  );
}

export default PropertyListFilter;
