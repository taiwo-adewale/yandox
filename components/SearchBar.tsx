import * as React from "react";
import { styled } from "@mui/material/styles";
import { InputBase, SvgIcon, SvgIconProps } from "@mui/material";

function SearchBar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    marginLeft: 0,
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.spacing(1),
    },
    [theme.breakpoints.down("lg")]: {
      width: "100%",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: "0.5rem",
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    zIndex: 2,
    // @ts-ignore
    color: theme.palette.textSecondary.main,
    [theme.breakpoints.up("lg")]: {
      padding: "0.75rem",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // @ts-ignore
    color: theme.palette.textSecondary.main,
    fontSize: "0.75rem !important",
    fontWeight: "500 !important",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: "0.5rem",
      paddingLeft: "1.5rem",
      borderRadius: "0.5rem",
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("md")]: {
        padding: "0.75rem",
        paddingLeft: "2.25rem",
      },
      [theme.breakpoints.up("lg")]: {
        width: "40ch",
        padding: "0.75rem",
        paddingLeft: "2.25rem",
        backgroundColor: theme.palette.background.default,
      },
      [theme.breakpoints.up("xl")]: {
        width: "50ch",
      },
      [theme.breakpoints.down("lg")]: {
        width: 0,
        cursor: "pointer",
        "&:focus": {
          width: "100%",
          paddingLeft: "2rem",
          cursor: "text",
          backgroundColor: theme.palette.background.default,
        },
      },
    },
  }));

  return (
    <Search>
      <SearchIconWrapper>
        <SearchSvg sx={{ width: "1rem", height: "1rem" }} />
      </SearchIconWrapper>

      <StyledInputBase
        placeholder="Search Property, Customer etc"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
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

export default SearchBar;
