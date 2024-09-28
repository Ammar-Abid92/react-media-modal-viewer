import {
  Button,
  ButtonProps,
  CircularProgress,
  CircularProgressProps,
} from "@mui/material";
import { ReactNode } from "react";

export default function LoadingButton({
  isLoading,
  loaderProps,
  children,
  ...props
}: {
  isLoading: boolean;
  loaderProps?: CircularProgressProps;
  children: ReactNode;
} & ButtonProps) {
  return (
    <Button disabled={isLoading} {...props}>
      {isLoading && (
        <CircularProgress
          sx={{
            color: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-12px",
            marginLeft: "-12px",
          }}
          size={25}
          {...loaderProps}
        />
      )}
      {children}
    </Button>
  );
}
