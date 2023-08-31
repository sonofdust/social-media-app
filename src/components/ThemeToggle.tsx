import React from "react";
import {IconButton} from "@mui/material";
import {DarkMode, LightMode} from "@mui/icons-material";

interface ThemeToggleProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({toggleTheme, isDarkMode}) => {
  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {isDarkMode ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default ThemeToggle;
