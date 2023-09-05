import { Typography, Box, SvgIcon, SvgIconProps, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NextLinkComposed } from "utils/Link";

interface IProps {
  mobile?: Boolean;
  setMobileOpen?: (val: boolean) => void;
}

function Logo({ mobile, setMobileOpen }: IProps) {
  const theme = useTheme();

  const handleMobileClick = () => {
    setMobileOpen && setMobileOpen(false);
  };

  return (
    <Box
      sx={{
        display: {
          xs: mobile ? "block" : "none",
          lg: mobile ? "none" : "block",
        },
        marginBottom: mobile ? "2.5rem" : 0,
      }}
    >
      <Button
        component={NextLinkComposed}
        to="/"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "fit-content",
          textTransform: "none",
          borderRadius: "0.625rem",
          px: mobile ? "0.75rem" : "0.5rem",
          "&:hover": {
            background: "none",
          },
        }}
        onClick={handleMobileClick}
      >
        <LogoSvg color="primary" fontSize="large" />

        <Typography
          color={theme.palette.mode === "dark" ? "#475BE8" : "textPrimary"}
          component="span"
          fontWeight={700}
          sx={{
            fontSize: "1.5625rem !important",
            marginLeft: "0.5rem",
          }}
        >
          Yandox
        </Typography>
      </Button>
    </Box>
  );
}

function LogoSvg(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg viewBox="0 0 39 35">
        <path d="M29.8398 16.1745C30.0314 16.5078 30.1322 16.8856 30.1322 17.27C30.1322 17.6545 30.0314 18.0322 29.8398 18.3656L25.531 25.799C25.3385 26.1308 25.0622 26.4063 24.7298 26.5979C24.3975 26.7895 24.0206 26.8904 23.637 26.8906L15.0656 26.8906C14.6846 26.8877 14.3109 26.7855 13.9815 26.5941C13.652 26.4026 13.3782 26.1286 13.187 25.799L8.87818 18.3656C8.68663 18.0322 8.58582 17.6545 8.58582 17.27C8.58582 16.8856 8.68663 16.5078 8.87818 16.1745L11.2583 12.0701L16.5546 21.1275C16.6418 21.2826 16.7691 21.4113 16.9232 21.5002C17.0772 21.5891 17.2524 21.6349 17.4302 21.6329L21.2877 21.6329C21.4656 21.6349 21.6408 21.5891 21.7948 21.5002C21.9489 21.4113 22.0762 21.2826 22.1634 21.1275L24.0921 17.7599C24.1795 17.6086 24.2255 17.437 24.2255 17.2623C24.2255 17.0876 24.1795 16.916 24.0921 16.7647L15.3973 1.72048C15.0956 1.1987 14.662 0.76543 14.14 0.464137C13.618 0.162845 13.0259 0.0041193 12.4232 0.00389045L11.644 0.00389048C10.9544 0.0036273 10.2769 0.184955 9.6797 0.529628C9.08244 0.874302 8.58648 1.37017 8.24169 1.96736L0.526706 15.3104C0.181668 15.9073 -7.84862e-07 16.5845 -7.54727e-07 17.2739C-7.24593e-07 17.9633 0.181668 18.6405 0.526706 19.2374L8.2417 32.5804C8.58697 33.1769 9.08314 33.672 9.68036 34.016C10.2776 34.3599 10.9548 34.5407 11.644 34.54L27.074 34.54C27.7636 34.5403 28.441 34.359 29.0383 34.0143C29.6355 33.6696 30.1315 33.1738 30.4763 32.5766L38.1913 19.2335C38.5363 18.6367 38.718 17.9594 38.718 17.27C38.718 16.5806 38.5363 15.9034 38.1913 15.3066L30.4763 1.9635C30.1315 1.36631 29.6355 0.87044 29.0383 0.525767C28.441 0.181094 27.7636 -0.000226281 27.074 3.31488e-05L20.5162 3.34355e-05L29.8398 16.1745Z" />
      </svg>
    </SvgIcon>
  );
}

export default Logo;
