import {
  Box,
  IconButton,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";

export const CenteredBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const ElipsesTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "numOfLines",
})<TypographyProps & { numOfLines?: number }>(({ numOfLines = 3 }) => ({
  display: "-webkit-box",
  WebkitLineClamp: numOfLines,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
}));

export const CenteredOverLay = styled(Box)({
  position: "absolute",
  left: "50%",
  top: "50%",
  height: "120px",
  width: "100%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "rgba(0,0,0,0.4)",
  transition: "all 0.3s",
  borderRadius: 6,
  opacity: 0,
});

export const OverlayContainer = styled(Box)({
  position: "relative",
  top: "0px",
  borderRadius: 7,
  display: "flex",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  alignItems: "center",
  overflow: "hidden",
  "&:hover": {
    "& button": { opacity: 1 },
    "& div": { opacity: 1 },
  },
});

export const DelIconContainer = styled(IconButton)({
  color: "red",
  fontSize: "50px",
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  opacity: 0,
  transition: "all 0.3s",
});
