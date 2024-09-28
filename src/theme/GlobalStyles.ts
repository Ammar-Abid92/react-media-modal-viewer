import { GlobalStylesProps, createTheme } from "@mui/material";
import palette from "./Palette";
import ComponentOverrides from "./ComponentOverrides/ComponentOverrides";

export const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
  components: ComponentOverrides,
  palette,
});

export const globalStyles = {
  styles: {
    body: {
      background: theme.palette.custom.background,
    },
    "*::selection": {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    "input[type=date]": {
      "&::-webkit-calendar-picker-indicator": {
        filter: "invert(1)",
      },
    },

    "input:-webkit-autofill,input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active":
      {
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: theme.palette.primary.contrastText,
        transition: "background-color 5000s ease-in-out 0s",
        boxShadow: "inset 0 0 0 0 white",
      },
    "input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button":
      {
        display: "none",
      },
    "*::-webkit-scrollbar": {
      borderRadius: 5,
      width: 3,
      height: 4,
    },

    "*::-webkit-scrollbar-thumb": {
      background: theme.palette.primary.main,
      borderRadius: 5,
    },

    " *::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(201, 201, 201, 0.3)",
      background: theme.palette.background.paper,
    },
  },
} as GlobalStylesProps;

export const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.7,
};
