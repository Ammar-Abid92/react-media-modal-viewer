import { RenderMediaProps } from "./types";
import { FileTypeEnums } from "../../constants/enums";
import { DocumentScanner } from "@mui/icons-material";
import { Box } from "@mui/material";

export function RenderMedia({
  imageProps,
  videoProps,
  generalProps,
  mediaItem,
}: RenderMediaProps) {
  switch (mediaItem.fileType) {
    case FileTypeEnums.Image:
      return (
        <Box
          component="img"
          src={mediaItem.url}
          {...generalProps}
          {...imageProps}
        />
      );
    case FileTypeEnums.Video:
      return (
        <Box
          component="video"
          src={mediaItem.url}
          {...generalProps}
          {...videoProps}
        />
      );
    case FileTypeEnums.Application:
      return <Box component={DocumentScanner} {...generalProps} />;
  }
}
