import React from "react";
import { Switch } from "@mui/material";

interface IProps {
  mode: PaletteMode;
  setMode: (val: PaletteMode) => void;
}

function SwitchTheme({ mode, setMode }: IProps) {
  const handleChange = () => {
    // @ts-ignore
    setMode((prevMode: PaletteMode) =>
      prevMode === "dark" ? "light" : "dark"
    );
  };

  return <Switch checked={mode === "dark"} onChange={handleChange} />;
}

export default SwitchTheme;
