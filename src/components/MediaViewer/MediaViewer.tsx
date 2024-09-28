import ListRenderer from "../../components/ListRenderer/ListRenderer";
import Modal from "../../components/Modal/Modal";
import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import useIndex from "../../hooks/useIndex";
import { MediaViewerModalProps, UploadedFile } from "./types";
import { RenderMedia } from "./MediaViewerComponent";
import Dummy1 from "../../assets/images/Dummy1.jpg";
import Dummy2 from "../../assets/images/Dummy2.jpg";
import Dummy3 from "../../assets/images/Dummy3.jpg";

export default function MediaViewer({
  onClose,
  media = [
    { image: Dummy1 },
    { image: Dummy3 },
    { image: Dummy2 },
    { image: Dummy1 },
    { image: Dummy2 },
  ],
  data,
  modalRef,
}: MediaViewerModalProps) {
  const {
    currentIndex,
    currentItem,
    handleNext,
    handlePrev,
    handleSetCurrent,
  } = useIndex(media, data, true);

  return (
    <Modal
      closeAfterTransition
      fullScreen
      modalRef={modalRef}
      showCancel={false}
      showSave={false}
      paperStyles={{
        animation: "show 0.5s ease-in-out forwards",
        "@keyframes show": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
            backdropFilter: "blur(10px)",
          },
        },
        background: "transparent",
      }}
    >
      <Box
        position="relative"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width="100%"
      >
        <AnimatePresence mode="popLayout">
          <Box
            key={currentIndex}
            component={motion.div}
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
            }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexGrow={1}
          >
            <RenderMedia
              mediaItem={currentItem as UploadedFile}
              videoProps={{
                controls: true,
              }}
              generalProps={{
                width: "95%",
                height: "auto",
                maxHeight: "75vh",
                mx: "auto",
                sx: {
                  aspectRatio: "16/9",
                  objectFit: "contain",
                },
              }}
            />
          </Box>
        </AnimatePresence>

        <Box overflow="auto hidden">
          <Box
            pb={2}
            display="flex"
            width="max-content"
            mx="auto"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <ListRenderer
              data={media}
              renderItem={(item, index) => (
                <Box>
                  <RenderMedia
                    key={index}
                    mediaItem={item as UploadedFile}
                    generalProps={{
                      onClick: handleSetCurrent(index),
                      width: 100,
                      borderRadius: 3,
                      height: 100,
                      sx: { objectFit: "cover", cursor: "pointer" },
                      border: "2px solid",
                      borderColor:
                        index === currentIndex ? "common.white" : "transparent",
                    }}
                  />
                </Box>
              )}
            />
          </Box>
        </Box>

        <Box
          position="absolute"
          width="100%"
          top="50%"
          sx={{
            transform: "translateY(-50%)",
          }}
          display="flex"
          justifyContent="space-between"
        >
          <IconButton onClick={handlePrev} sx={{ color: "primary.main" }}>
            <ArrowBackIos />
          </IconButton>
          <IconButton onClick={handleNext} sx={{ color: "primary.main" }}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Box>
      <Box
        component={IconButton}
        position="absolute"
        right={20}
        onClick={onClose}
      >
        <Close sx={{ color: "primary.main", fontSize: 35 }} />
      </Box>
    </Modal>
  );
}
