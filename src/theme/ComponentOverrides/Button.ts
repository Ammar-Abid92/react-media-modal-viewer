import { Components, Theme } from "@mui/material/styles";
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    main: true;
    underlined: true;
    filled: true;
    action: true;
    "outlined-dashed": true;
  }
}

const MuiButton: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: {
      width: "max-content",
      textAlign: "center",
      height: 40,
      borderRadius: 4,
      textTransform: "none",
      "&.Mui-disabled": {
        opacity: 0.5,
      },
    },
  },
  variants: [
    {
      props: { variant: "main" },
      style: ({ theme }) => ({
        width: "100%",
        height: 54,
        borderRadius: 4,
        "&,&:hover": {
          background: theme.palette.custom.appGradient,
          color: theme.palette.common.white,
        },
        fontSize: 16,
        fontWeight: 600,
      }),
    },
    {
      props: { variant: "filled" },
      style: ({ theme }) => ({
        borderRadius: 4,
        fontSize: 16,
        fontWeight: 600,
        "&,&:hover": {
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
      }),
    },
    {
      props: { variant: "underlined" },
      style: ({ theme }) => ({
        padding: 0,
        "&,&:hover": {
          textDecoration: "underline",
          background: "transparent",
          color: theme.palette.primary.main,
        },
      }),
    },
    {
      props: { variant: "outlined" },
      style: ({ theme }) => ({
        height: 54,
        fontSize: 16,
        fontWeight: 600,
        borderRadius: 4,
        "&,&:hover": {
          border: "1px solid",
          background: "white",
          color: theme.palette.primary.main,
        },
      }),
    },
    {
      props: { variant: "action" },
      style: ({ theme }) => ({
        "&,&:hover": {
          border: "1px solid",
          background: "transparent",
          borderColor: theme.palette.primary.light,
        },
      }),
    },
    {
      props: { variant: "outlined-dashed" },
      style: ({ theme }) => ({
        height: 54,
        fontSize: 16,
        fontWeight: 600,
        borderRadius: 4,
        "&,&:hover": {
          border: "1px dashed",
          background: "transparent",
          color: theme.palette.primary.main,
        },
      }),
    },
  ],
};

export default MuiButton;
