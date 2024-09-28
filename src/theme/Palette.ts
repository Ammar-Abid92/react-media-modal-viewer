import { Palette } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      errorFilter: string;
      dark: string;
      placeholder: string;
      main: string;
      topbar: string;
      brown: string;
      darkRed: string;
      sidebar: string;
      lightRed: string;
      green: string;
      lightGray: string;
      lightBlack: string;
      lightBrown: string;
      appGradient: string;
      font1: string;
      font2: string;
      bgInput: string;
      background: string;
      boxBorder: string;
      boxShadow: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      darkRed: string;
      topbar: string;
      errorFilter: string;
      dark: string;
      green: string;
      placeholder: string;
      main: string;
      sidebar: string;
      brown: string;
      lightRed: string;
      lightBrown: string;
      lightGray: string;
      lightBlack: string;
      appGradient: string;
      font1: string;
      font2: string;
      bgInput: string;
      background: string;
      boxBorder: string;
      boxShadow: string;
    };
  }
}

export default {
  primary: {
    main: "#024780",
    contrastText: "#444444",
    light: "#F2F2F2",
    dark: "#444444",
  },
  secondary: {
    main: "#E9E5DF",
    light: "#EEEEEEEE",
    contrastText: "#666666",
  },
  text: {
    primary: "#011628",
    secondary: "#666666",
  },
  custom: {
    darkRed: "#E30B0B",
    lightRed: "#FA1414",
    lightGray: "#BABABA",
    lightBlack: "#222222",
    green: "#0B8235",
    lightBrown: "#C0AE9A",

    topbar: "#fff",
    brown: "#8A6D59",
    sidebar: "#fff",
    dark: "#444444",
    placeholder: "#BABABA",
    main: "#019FE2",
    errorFilter:
      "invert(14%) sepia(78%) saturate(6511%) hue-rotate(0deg) brightness(100%) contrast(118%)",
    appGradient: "linear-gradient(322.69deg, #024780 -0.67%, #019FE2 99.11%)",
    font1: "#333333",
    font2: "#1E1E1E",
    bgInput: "#FAFAFA",
    background: "#F5FAFF",
    boxBorder: "#E2E2E2",
    boxShadow: "#0000000F",
  },
  common: {
    white: "#FFFFFF",
    black: "#000000",
  },
  mode: "light",
  success: {
    main: "#0B8235",
  },
  error: {
    main: "#ff0000",
  },
} as Palette;
