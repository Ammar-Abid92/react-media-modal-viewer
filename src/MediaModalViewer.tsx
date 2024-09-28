import { Box, BoxProps } from "@mui/material";
import MediaViewer from "./components/MediaViewer/MediaViewer";
import { MediaViewerProps } from "./components/MediaViewer/types";
import { FileTypeEnums } from "./constants/enums";
import useModal from "./hooks/useModal";
import React from "react";

export default function MediaModalViewer({
  featuredMedia,
  mediaContainerStyles,
  fileType = FileTypeEnums.Image,
}: {
  featuredMedia: { image: string }[];
  mediaContainerStyles?: BoxProps;
  fileType?: "image" | "video" | "application";
}) {
  const { openModal: openMediaModal, Modal } = useModal<
    unknown,
    MediaViewerProps
    // @ts-ignore
  >(MediaViewer, {
    media: featuredMedia.map(({ image }) => ({
      url: image,
      fileType: fileType,
    })) as any,
  });

  return (
    <>
      <Box
        onClick={() => openMediaModal(0)}
        component="img"
        src={featuredMedia[0].image}
        width="100%"
        height="100%"
        borderRadius={2}
        sx={{ objectFit: "cover" }}
        {...mediaContainerStyles}
      />

      {Modal}
    </>
  );
}
