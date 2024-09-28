import { ModalTypes } from "../Modal/Modal";
import { BoxProps } from "@mui/material";
import {
  DetailedHTMLProps,
  HtmlHTMLAttributes,
  VideoHTMLAttributes,
} from "react";

export type UploadedFile = {
  url: string;
  file: File;
  name: string;
  id?: string;
  size: string;
  progress?: number;
  error?: boolean;
  uploading?: boolean;
  fileType: string;
};

export type RenderMediaProps = {
  imageProps?: BoxProps & HtmlHTMLAttributes<HTMLImageElement>;
  videoProps?: BoxProps &
    DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
  isSelected?: boolean;
  generalProps?: BoxProps;
  mediaItem: UploadedFile;
};

export type MediaViewerProps = {
  media: UploadedFile[];
  data?: number;
  viewOnly?: boolean;
};
export type MediaViewerModalProps = ModalTypes & MediaViewerProps;
