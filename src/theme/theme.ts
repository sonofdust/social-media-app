// theme.ts

import {createTheme} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    palette?: {
      otherColor: {
        danger: string;
      };
    };
  }
}

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#ff6f61",
    },
    // otherColor: {danger: "#FF5733"},
  },
});

export default customTheme;
//export default theme;

// import {red} from "@mui/material/colors";
// import {PaletteOptions} from "@mui/material/styles/createPalette";
// import React from "react";
//import React from "react";

// interface CustomPaletteOptions extends PaletteOptions {
//   customColor?: {danger: string};
// }

// interface PaletteOptions {
//   otherColor?: {
//     danger: React.CSSProperties["color"];
//   };
// }

// const otherColor = {
//   danger: "#FF5733",
// };
// interface CustomPaletteOptions extends PaletteOptions {
//   otherColor?: {danger: string};
// }

// const custom =  createTheme<CustomPaletteOptions>({otherColor})

// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#1760a5",
//       light: "skyblue",
//     },
//     secondary: {
//       main: "#15c630",
//     },
//     //otherColor: {danger: "#FF5733"},
//   },
// });

// declare module "@mui/material/styles" {
//   interface Theme {
//     otherColor: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     otherColor?: {
//       danger?: string;
//     };
//   }
// }
