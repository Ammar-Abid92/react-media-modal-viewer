import { Components, Theme } from "@mui/material";
import MuiButton from "../../theme/ComponentOverrides/Button";

export default {
  MuiButton,
  MuiSwitch: {
    styleOverrides: {
      root: ({ theme: { palette } }) => ({
        padding: 6,

        "& .MuiSwitch-switchBase": {
          "&.Mui-checked": {
            color: palette.primary.main,
            "& .MuiSwitch-thumb": {
              backgroundColor: palette.primary.main,
            },
            "& + .MuiSwitch-track": {
              border: `4px solid ${palette.primary.main}`,
              opacity: 1,
              backgroundColor: "white",
            },
          },
        },

        "& .MuiSwitch-track": {
          opacity: 1,
          borderRadius: 24 / 2,
          backgroundColor: "white",
          border: `4px solid ${palette.primary.contrastText}80`,

          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: 27,
            height: 24,
          },
        },
        "& .MuiSwitch-thumb": {
          backgroundColor: `${palette.primary.contrastText}80`,
          boxShadow: "none",
          width: 12,
          height: 12,
          margin: 4,
        },
      }),
    },
  },

  MuiFormControl: {
    styleOverrides: {
      root: ({ theme: { palette } }) => ({
        "&[data-iswhite] .MuiInputBase-root": {
          backgroundColor: palette.common.white,
        },
        "& .MuiOutlinedInput-root": {
          "&:not(:is(.Mui-focused)) .MuiOutlinedInput-notchedOutline": {
            borderColor: palette.primary.light,
          },
        },
        "& .MuiFormLabel-root": {
          fontSize: 18,
        },

        "& .MuiFormLabel-root:not(.MuiInputLabel-shrink)": {
          fontSize: 14,
          top: 2,
        },
      }),
    },
  },

  MuiInput: {
    styleOverrides: {
      root: {
        "&::before,&::after": {
          display: "none",
        },
        "& .MuiInputBase-input": {
          "&:focus": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme: { palette } }) => ({
        borderRadius: 4,
        "&::after": {
          display: "none",
        },
        "&::before": {
          display: "none",
        },
        backgroundColor: palette.custom.bgInput,

        "& .MuiFormLabel-root": {
          color: palette.text.primary,
          "&.Mui-focused": {
            color: palette.text.primary,
          },
        },
        "& .MuiOutlinedInput-notchedOutline": {
          "&, &:hover, &.Mui-focused": {
            border: `1px solid ${palette.primary.light}`,
          },
        },
      }),
    },
  },

  MuiFormControlLabel: {
    styleOverrides: {
      root: ({ theme: { palette } }) => ({
        "& .MuiFormControlLabel-label.Mui-disabled": {
          color: palette.primary.contrastText,
        },
      }),
    },
  },

  MuiCssBaseline: {
    styleOverrides: {
      background: "#D9D9D9",
    },
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme: { palette } }) => ({
        textTransform: "none",
        fontSize: 24,
        fontWeight: 600,
        color: palette.secondary.contrastText,
      }),
    },
  },
} as Components<Theme>;
